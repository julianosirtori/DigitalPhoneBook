module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('calls', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            duration: {
                type: Sequelize.TIME,
                allowNull: false,
            },
            caller: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            direction: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            called_number: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            dialled_number: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            is_internal: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNul: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNul: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('calls');
    },
};
