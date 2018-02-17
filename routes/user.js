/**
 * Variáveis necessárias para a aplicação
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

// Retornar todos os usuários
router.get('/', function(req, res, next) {
    User.find(function(err, products) {
        if (err) {
            return next(err);
        }
        
        res.json(products);
    });
});

// Retornar apenas um determinado usuário
router.get('/:id', function(req, res, next) {
    User.findById(req.params.id, function(err, post) {
        if (err) {
            return next(err);
        }
        
        res.json(post);
    });
});

// Salvando um usuário
router.post('/', function(req, res, next) {
    User.create(req.body, function(err, post) {
        if (err) {
            return next(err);
        }
        
        res.json(post);
    });
});

// Atualizando um usuário
router.put('/:id', function(req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) {
            return next(err);
        }
        
        res.json(post);
    });
});

// Excluindo um usuário
router.delete('/:id', function(req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) {
            return next(err);
        }
        
        res.json(post);
    });
});

module.exports = router;
