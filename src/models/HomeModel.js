const moogoose = require('mongoose');

const HomeSchema = new moogoose.Schema({
    titulo: {type: String, required: true},
    descricao: String
});

const HomeModel = moogoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;
