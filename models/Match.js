var mongoose = require('mongoose');

var MatchSchema = mongoose.Schema({
    userId1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userId2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    user1Winner: Boolean,
    user1Rating: Number,
    user2Rating: Number,
    date: Date
});

mongoose.model('Match', MatchSchema);
