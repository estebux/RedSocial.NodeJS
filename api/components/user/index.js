//const store = require('../../../store/mysql');
const config = require('../../../config');
const store = require('../../../store/remote-mysql');

if(config.remoteDB === true){
    const store = require('../../../store/remote-mysql');
}else{
    const store = require('../../../store/mysql');
}


const ctrl = require('./controller');

module.exports = ctrl(store);