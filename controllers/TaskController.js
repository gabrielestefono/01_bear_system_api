const Task = require('../models/tasks');

/**
 * Equivalente ao método index do laravel
 */
exports.getTasks = async (req, res) => {
	try {
		const tasks = await Task.find();
		res.json(tasks);
	} catch (error) {
		console.log(error);
	}
}

/**
 * Equivalente ao método store do laravel
 */
exports.createTask = async (req, res) => {
	try {
		const task = new Task(req.body);
		await task.save();
		res.status(201).send({task, msg: "Tarefa salva com sucesso!"});
	} catch (error) {
		console.log(error);
	}
}

/**
 * Equivalente ao método show do laravel
 */
exports.getTask = async (req,res) => {
	try {
		const id = req.params.id;
		const task = await Task.findById(id);
		res.json(task);
	} catch (error) {
		console.log(error);
	}
}

/**
 * Equivalente ao método update do laravel
 */
exports.updateTask = async (req, res) => {
	try {
		const id = req.params.id;
		const task = await Task.findByIdAndUpdate(id, req.body);
		res.json(task);
	} catch (error) {
		console.log(error);
	}
}

/**
 * Equivalente ao método delete do laravel
 */
exports.deleteTask = async (req, res) => {}