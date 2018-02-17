/**
 * Variáveis com as dependências necessárias para uso da aplicação
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

/**
 * Varáveis para usar a aplicação
 */
var user = require('./routes/user');
var app = express();

/**
 * Chamada necessária para execução da aplicação
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extender': 'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/users', express.static(path.join(__dirname, 'dist')));
app.use('/user', user);

// Pegando o 404 e encaminho para o manipulador de erros
app.use(function(req, res, next) {
    var err = new Error('Não encontrado');
    err.status = 404;
    next(err);
});

// Manipulando outro erros
app.use(function(err, req, res, next) {
    // Defininando os locais 
    // Apenas será fornecido o erro no desenvolvimento
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Renderizando a página de erro
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
