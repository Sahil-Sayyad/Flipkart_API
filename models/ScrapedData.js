const mongoose = require('mongoose');

const scrapedDataSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    url: {
        type: String,
        required: true
    },
    title: String,
    price: String,
    description: String,
    numReviews: Number,
    ratings: Number,
    mediaCount: Number
});

module.exports = mongoose.model('ScrapedData', scrapedDataSchema);
