// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController');

router.get('/task', taskController.getTasks); // Método index
router.post('/task', taskController.createTask); // Método store
router.get('/task/:id', taskController.getTask); // Método show
router.put('/task/:id', taskController.updateTask); // Método update
router.delete('/task/:id', taskController.deleteTask); // Método delete

module.exports = router;
