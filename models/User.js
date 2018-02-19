/**
 * Variável necessária para a aplicação
 */
var mongoose = require('mongoose');

/**
 * Modelo de dados para Usuário
 */
var UserSchema = new mongoose.Schema({
    email: String,
    first_name: String,
    last_name: String,
    vat: String,
    company: String,
    address: String,
    country: String,
    postal_code: String,
    city: String,
    state: String,
    created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
