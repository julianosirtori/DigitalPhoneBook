module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
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
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password_hash: {
                type: Sequelize.STRING,
                allowNul: false,
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
        return queryInterface.dropTable('users');
    },
};
