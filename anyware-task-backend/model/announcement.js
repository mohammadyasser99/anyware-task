const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({

    user: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Announcement', announcementSchema);

   