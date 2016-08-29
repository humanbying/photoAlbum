const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  albumName: { type: String, required: true },
  images: { type: String, default: 'http://kikuserfinder.com/assets/img/default.png' },
  createdAt: { type: Date, required: true, default: Date.now }
});


const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
