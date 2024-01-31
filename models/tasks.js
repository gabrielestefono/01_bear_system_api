const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "O nome desta tarefa é obrigatório"],
    validate: {
      validator: function(v) {
        return typeof v === 'string';
      },
      message: props => `${props.value} não é uma string válida!`
    }
  },
  status: {
    type: String,
    required: [true, "O status é obrigatório"],
    enum: {
      values: ['Concluído', 'Em andamento', 'Aguardando'],
      message: '{VALUE} não é um status válido'
    },
    validate: {
      validator: function(v) {
        return typeof v === 'string';
      },
      message: props => `${props.value} não é uma string válida!`
    }
  },
  createdAt: {
    type: Date,
    default: Date.now,
    validate: {
      validator: function(v) {
        return v instanceof Date;
      },
      message: props => `${props.value} não é uma data válida!`
    }
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
