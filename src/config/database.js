module.exports = { 
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'students',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
  },
}