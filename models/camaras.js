const mongoose = require('mongoose');
const { Schema } = mongoose;

const camarasSchema = new Schema({
  id: {type: String, required: true},
  name:{type:String, required: true},
  scr:{type:String, required: true},
  date:{type: Date, default: Date.now}
});



module.exports = mongoose.model('camaras', camarasSchema);
