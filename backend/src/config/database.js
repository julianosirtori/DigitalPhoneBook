module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456',
    database: 'phonebook',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
