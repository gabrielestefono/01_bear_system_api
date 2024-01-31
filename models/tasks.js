const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  nome: String,
  status: String,
  createdAt: Date
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
