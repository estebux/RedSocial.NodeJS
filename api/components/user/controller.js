const tabla = 'user';

module.exports = function(injectedStore){
    let store = injectedStore;
    if(!store){
        store = require('../../../store/dummy');
    }

    function list(){
        return store.list(tabla);
    }

    function get(id){
        return store.get(tabla, id);
    }

    function upsert(body){
        const user = {
            name: body.name
        }
        if (body.id) {
            user.id = body.id;
        } else {
            user.id = nanoid();
        }

        return store.upsert(tabla, user);
    }

    return  {
        list,
        get,
        upsert,
    }
}

