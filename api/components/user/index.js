//const store = require('../../../store/mysql');
const config = require('../../../config');
//const store = require('../../../store/remote-mysql');

let store;
if(config.remoteDB === true){
    store = require('../../../store/remote-mysql');
}else{
    store = require('../../../store/mysql');
}
const ctrl = require('./controller');

module.exports = ctrl(store);