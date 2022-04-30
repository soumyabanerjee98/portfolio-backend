const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    projectId: {
        type: Number,
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    projectDetails: {
        type: String,
        required: true
    },
    projectLink: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Projects", ProjectSchema);