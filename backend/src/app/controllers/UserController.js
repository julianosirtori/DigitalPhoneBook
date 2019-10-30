class UserController {
    index(req, res) {
        res.json({ message: 'Controller User' });
    }
}

export default new UserController();
