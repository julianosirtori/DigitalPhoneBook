import { Op } from 'sequelize';
import Call from '../models/Call';

class PhoneController {
    async index(req, res) {
        const {
            page = 1,
            caller = '',
            called_number = '',
            date = null,
        } = req.query;

        const filterDate =
            date === null
                ? { [Op.ne]: null }
                : {
                      [Op.between]: [
                          `${date}T00:00:00-00:00`,
                          `${date}T23:59:59-00:00`,
                      ],
                  };

        const response = await Call.findAll({
            where: {
                [Op.or]: [
                    {
                        caller: {
                            [Op.like]: `%${caller}%`,
                        },
                    },
                    {
                        called_number: {
                            [Op.like]: `%${called_number}%`,
                        },
                    },
                ],
                date: filterDate,
            },
            limit: 20,
            offset: (page - 1) * 20,
            attributes: [
                'date',
                'duration',
                'caller',
                'direction',
                'dialled_number',
                'is_internal',
            ],
            order: [['date', 'DESC'], ['duration', 'DESC']],
        });
        return res.json(response);
    }
}

export default new PhoneController();
