const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('Quiz', quizSchema);
