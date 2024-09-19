module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api:{
        port: process.env.API_PORT || 3004,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'sql.freedb.tech',
        user: process.env.MYSQL_USER || 'freedb_freeUserRedSocial',
        password: process.env.MYSQL_PASS || 'G%FBYgmWB9@RvuN',
        database: process.env.MYSQL_DB || 'freedb_redSocial'
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-10018.c308.sa-east-1-1.ec2.redns.redis-cloud.com',
        password: process.env.REDIS_PASS || '0j0hBnK4MY7P3a9sRli8Xsirciz8GsPu',        
        port: process.env.REDIS_PORT || 10018
    },
    post:{
        port: process.env.POST_PORT || 3002,
    }   
}