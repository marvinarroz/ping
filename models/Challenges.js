var mongoose = require('mongoose');

var ChallengeSchema = mongoose.Schema({
    fromId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    toId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    accepted: Boolean
});

mongoose.model('Challenge', ChallengeSchema);
