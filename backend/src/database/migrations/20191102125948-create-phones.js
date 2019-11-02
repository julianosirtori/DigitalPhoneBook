module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('phones', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            tags: {
                type: Sequelize.STRING,
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
        return queryInterface.dropTable('phones');
    },
};
