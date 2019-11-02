import Sequelize, { Model } from 'sequelize';

class Phone extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                phone: Sequelize.STRING,
                tags: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Phone;
