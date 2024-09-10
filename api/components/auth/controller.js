const auth = require('../../../auth');
const tabla  = 'auth';

module.exports = function(injectedStore){
    let store = injectedStore;
    if(!store){
        store = require('../../../store/dummy');
    }

    async function login(username, password){
        const data = await store.query(tabla, {usrename: username});
        if(data.password === password){
            //generar token
            return auth.sign(data);
        }
        else
        {
            throw new Error('Informacion invalida');
        }
        return data;
    }


    function upsert(data){
           const authData = {
                id: data.id,
           } 
           if(data.username){
            authData.username = data.username;
           }
           if(data.password){
            authData.password = data.password;
           }

           return store.upsert(tabla, authData);
    }

    return {
        upsert,
        login,
    };

};