var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    updated_at: { type: Date, default: Date.now },
});

// Validate empty name
ItemSchema
  .path('name')
  .validate(function(name) {
    return name.length;
  }, 'Name cannot be blank');

module.exports = mongoose.model('Items', ItemSchema);
