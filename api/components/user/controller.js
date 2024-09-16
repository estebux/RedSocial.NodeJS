const nanoid = require('nanoid');
const auth = require('../auth');

const tabla = 'user';

module.exports = function(injectedStore){
    let store = injectedStore;
    if(!store){
        store = require('../../../store/mysql');
    }

    
    function list(){
        return store.list(tabla);
    }

    async function login(username, password){
        const data = await store.query(tabla, {usrename: username});
        return data;
    }

    function get(id){
        return store.get(tabla, id);
    }

    async function upsert(body){
        const user = {
            name: body.name,
            username: body.username,
        }
        if (body.id) {
            user.id = body.id;
        } else {
            user.id = nanoid();
        }

        if(body.password || body.username){
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password,
            })
        }

        return store.upsert(tabla, user);
    }

    function follow(from, to){
        return store.upsert(tabla + '_follow',{
            user_from: from,
            user_to: to,
        });
    }

    async function following(user){
        const join = {}
        join[tabla] = 'user_to';
        const query = {user_from: user}

        return await store.query(tabla + '_follow', query, join);
    }

    return  {
        list,
        get,
        upsert,
        follow,
        following,
    }
}

