import { Op } from 'sequelize';
import Phone from '../models/Phone';

class SearchController {
    async index(req, res) {
        const { search } = req.params;
        const phones = await Phone.findAll({
            where: {
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: `%${search}%`,
                        },
                    },
                    {
                        phone: {
                            [Op.like]: `%${search}%`,
                        },
                    },
                    {
                        tags: {
                            [Op.like]: `%${search}%`,
                        },
                    },
                ],
            },
        });
        res.json(phones);
    }
}

export default new SearchController();
