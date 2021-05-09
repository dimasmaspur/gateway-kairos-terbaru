const create = require('./create');
const update = require('./update');
const approve = require('./approve');
const reject = require('./reject');
const reissued = require('./reissued');
const picked_up = require('./picked_up');
// const print = require('./print');
const get = require('./get');
const getAll = require('./getAll');
const search = require('./search');
const scan = require('./scan_barcode');
const total_edo = require('./total_edo');
const destroy = require('./destroy');
const print = require('./print');
const send = require('./send_to_consignee');

module.exports = {
    create,
    // edit,
    // print,
    get,
    getAll,
    total_edo,
    update,
    destroy,
    reissued,
    reject,
    approve,
    search,
    picked_up,
    print,
    send,
    scan,
}