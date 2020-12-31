module.exports = {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    username: 'postgres',
    password: 'postgres',
    database: 'sequelizedb',
    define: {
        timestamps: true,
        underscored: true,
    }  
}