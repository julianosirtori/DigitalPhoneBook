import * as Yup from 'yup';
import { Op } from 'sequelize';
import Phone from '../models/Phone';

class PhoneController {
    async index(req, res) {
        const { page = 1, search = '' } = req.query;
        const phones = await Phone.findAll({
            where: {
                [Op.or]: [
                    {
                        name: {
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
            limit: 20,
            offset: (page - 1) * 20,
            attributes: ['id', 'name', 'phone', 'tags'],
            order: ['name'],
        });
        res.json(phones);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            phone: Yup.string().required(),
            tags: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }
        const { id, name, phone, tags } = await Phone.create(req.body);
        return res.json({ id, name, phone, tags });
    }

    async show(req, res) {
        const { id } = req.params;
        const phoneDb = await Phone.findByPk(id);
        if (!phoneDb) {
            return res.status(400).json({ error: 'Phone not found' });
        }
        const { name, phone, tags } = phoneDb;
        return res.json({ name, phone, tags });
    }

    async update(req, res) {
        const { id } = req.params;
        const phoneDb = await Phone.findByPk(id);
        if (!phoneDb) {
            return res.status(400).json({ error: 'Phone not found' });
        }
        const { name, phone, tags } = await phoneDb.update(req.body);
        return res.json({ name, phone, tags });
    }

    async delete(req, res) {
        const { id } = req.params;
        const phoneDb = await Phone.findByPk(id);
        if (!phoneDb) {
            return res.status(400).json({ error: 'Phone not found' });
        }
        await phoneDb.destroy();
        return res.json();
    }
}

export default new PhoneController();
