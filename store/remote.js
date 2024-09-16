const request = require('request');

function createRemoveDB(host, port){
    const URL = 'http://' + host + ':' + port;

    function list(table){
        return req('GET', table);
    }
    /*function get(table, id){}
    function upsert(table, id){}
    function query(table, query, join){}
    */

    function req(method, table, data){
        let url = URL + '/' + table;
        body= '';

        return new Promise((resolve, reject) => {
            request({
                method,
                headers: {
                    'content-type':'application/json'
                },
                url,
                body,
            },  (err, req, body) => {
                if(err){
                    console.log('Error en la base de datos remota', err);
                    return reject(err.message);
                }

                const resp = JSON.parse(body);
                return resolve(resp.body);
            })
        })

    }

    return {
        list,
    }
}

module.exports = createRemoveDB;