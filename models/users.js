module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        // Model attributes are defined here
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: type.STRING,
        email: type.STRING,
        password: type.STRING,
        rol: type.STRING
    });
}