var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', { title : 'Express' });
});

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Challenge = mongoose.model('Challenge');
var Match = mongoose.model('Match');

router.get('/users', function(req, res, next) {
    User.find(function(err, users) {
        if(err) {
            return next(err);
        }
        res.json(users);
    });
});

router.param('user', function(req, res, next, id) {
    var query = User.findById(id);

    query.exec(function(err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return next(new Error("Can't find user"));
        }

        req.user = user;
        return next();
    });
});

router.param('challenge', function(req, res, next, id) {
    var query = Challenge.findById(id);

    query.exec(function(err, challenge) {
        if (err) {
            return next(err);
        }
        if (!challenge) {
            return next(new Error("Can't find challenge"));
        }

        req.challenge = challenge;
        return next();
    });
});
router.param('match', function(req, res, next, id) {
    var query = Match.findById(id);

    query.exec(function(err, match) {
        if (err) {
            return next(err);
        }
        if (!match) {
            return next(new Error("Can't find match"));
        }

        req.match = match;
        return next();
    });
});
