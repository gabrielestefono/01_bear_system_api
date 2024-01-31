const taskRoutes = require('./tasksRoutes');

module.exports = (app) => {
  app.use(taskRoutes);
};
