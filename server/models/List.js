var mongoose = require('mongoose');
var ListItem = require('../models/ListItem.js');

var ListSchema = new mongoose.Schema({
    name: String,
    note: String,
    updated_at: { type: Date, default: Date.now },
    items: [ListItem.schema]
});


// Validate empty name
ListSchema
  .path('name')
  .validate(function(name) {
    return name.length;
  }, 'Name cannot be blank');

module.exports = mongoose.model('Lists', ListSchema);
