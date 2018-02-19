/**
 * Variáveis necessárias para a aplicação
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');
var config = require('../config/system');
var localStorage = require('localStorage');

/**
 * Variável para armazenar as informações do usuários (para o localStorage),
 * na qual são carregadas alguns exemplos
 */
var userStorage = [
    {
        "_id": Math.round(Math.random() * 10000000000).toString(),
        "email": "teste1@example.com",
        "first_name": "Exemplo",
        "last_name": "Teste 1",
        "vat": 33,
        "company": "Company 1",
        "address": "Address 1",
        "country": "Brazil",
        "postal_code": "0000-000",
        "city": "BH",
        "state": "MG",
        "created": new Date()
    },
    {
        "_id": Math.round(Math.random() * 10000000000).toString(),
        "email": "teste2@example.com",
        "first_name": "Exemplo",
        "last_name": "Teste 2",
        "vat": 33,
        "company": "Company 2",
        "address": "Address 2",
        "country": "Brazil",
        "postal_code": "0000-000",
        "city": "BH",
        "state": "MG",
        "created": new Date()
    },
    {
        "_id": Math.round(Math.random() * 10000000000).toString(),
        "email": "teste3@example.com",
        "first_name": "Exemplo",
        "last_name": "Teste 3",
        "vat": 33,
        "company": "Company 3",
        "address": "Address 3",
        "country": "Brazil",
        "postal_code": "0000-000",
        "city": "BH",
        "state": "MG",
        "created": new Date()
    }
];

// Retornar todos os usuários
router.get('/', function(req, res, next) {
    if (config.USE_MONGODB === true) {
        User.find(function(err, products) {
            if (err) {
                return next(err);
            }
            console.log(products);
            
            res.json(products);
        });
    } else {
        var userList = localStorage.getItem('user-list');
        if (userList) {
            userStorage = JSON.parse(userList);
        }
        res.json(userStorage);
    }
});

// Retornar apenas um determinado usuário
router.get('/:id', function(req, res, next) {
    if (config.USE_MONGODB === true) {
       User.findById(req.params.id, function(err, post) {
            if (err) {
                return next(err);
            }
            
            res.json(post);
        }); 
    } else {
        var pos = userStorage.map(function(e) { return e._id; });
        var idPos = pos.indexOf(req.params.id);
        var user = userStorage[idPos];

        res.json(user);
    }
});

// Salvando um usuário
router.post('/', function(req, res, next) {
    if (config.USE_MONGODB === true) {
        console.log(req.body);
        User.create(req.body, function(err, post) {
            if (err) {
                return next(err);
            }
            
            res.json(post);
        });
    } else {
        var user = {
            "_id": Math.round(Math.random() * 10000000000).toString(),
            "email": req.body.email,
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "vat": req.body.vat,
            "company": req.body.company,
            "address": req.body.address,
            "country": req.body.country,
            "postal_code": req.body.postal_code,
            "city": req.body.city,
            "state": req.body.state,
            "created": new Date()
        };

        userStorage.unshift(user);
        
        var jsonStr = JSON.stringify(userStorage);
        localStorage.setItem('user-list', jsonStr);

        res.json(user);
    }
});

// Atualizando um usuário
router.put('/:id', function(req, res, next) {
    if (config.USE_MONGODB === true) {
        User.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
            if (err) {
                return next(err);
            }
            
            res.json(post);
        });
    } else {
        var pos = userStorage.map(function(e) { return e._id; });

        var user = {
            "_id": req.params.id,
            "email": req.body.email,
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "vat": req.body.vat,
            "company": req.body.company,
            "address": req.body.address,
            "country": req.body.country,
            "postal_code": req.body.postal_code,
            "city": req.body.city,
            "state": req.body.state,
            "created": new Date()
        };
        userStorage[pos.indexOf(req.params.id)] = user;

        var jsonStr = JSON.stringify(userStorage);
        localStorage.setItem('user-list', jsonStr);

        res.json(user);
    }
});

// Excluindo um usuário
router.delete('/:id', function(req, res, next) {
    if (config.USE_MONGODB === true) {
        User.findByIdAndRemove(req.params.id, req.body, function(err, post) {
            if (err) {
                return next(err);
            }
            
            res.json(post);
        });
    } else {
        var pos = userStorage.map(function(e) { return e._id; });
        var idPos = pos.indexOf(req.params.id);
        var user = userStorage[idPos];
        
        if (idPos === userStorage.length - 1) {
            userStorage.pop();
        } else if (idPos === 0) {
            userStorage.shift();
        } else {
            var arrAuxIni = userStorage.slice(0, idPos);
            var arrAuxEnd = userStorage.slice(idPos + 1);

            userStorage = arrAuxIni.concat(arrAuxEnd);
        }

        var jsonStr = JSON.stringify(userStorage);
        localStorage.setItem('user-list', jsonStr);

        res.json(user);
    }
});

module.exports = router;
