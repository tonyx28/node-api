var mongoose      = require('mongoose');
var Schema        = mongoose.Schema;

var BearSchema    = new Schema({
    name: string
});

module.exports = mongoose.model('Bear', BearSchema);
