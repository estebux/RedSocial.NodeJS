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

    return  {
        list,
        get,
    }
}

