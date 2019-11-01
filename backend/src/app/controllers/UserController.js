import User from '../models/User';

class UserController {
    async index(req, res) {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email'],
        });

        return res.json(users);
    }

    async store(req, res) {
        const userExists = await User.findOne({
            where: { email: req.body.email },
        });
        if (userExists) {
            return res.status(400).json({ error: 'User  already exists' });
        }
        const { id, name, email } = await User.create(req.body);
        return res.json({ id, name, email });
    }

    async show(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }
        const { email, name } = user;
        return res.json({ id, name, email });
    }

    async update(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        const { name, email } = await user.update(req.body);

        return res.json({ id, name, email });
    }

    async delete(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }
        user.destroy();

        return res.json();
    }
}

export default new UserController();
