module.exports = {
    api:{
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || '127.0.0.1',
        user: process.env.MYSQL_USER || 'test',
        password: process.env.MYSQL_PASS || 'qkVzBu]/EiYVkQZz',
        database: process.env.MYSQL_DB || 'diario',
    }
}