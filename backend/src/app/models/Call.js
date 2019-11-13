import Sequelize, { Model } from 'sequelize';

class Call extends Model {
    static init(sequelize) {
        super.init(
            {
                date: Sequelize.DATE,
                duration: Sequelize.TIME,
                caller: Sequelize.STRING,
                direction: Sequelize.STRING,
                called_number: Sequelize.STRING,
                dialled_number: Sequelize.STRING,
                is_internal: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Call;
