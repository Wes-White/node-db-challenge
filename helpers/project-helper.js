const db = require('../data/db-config');

module.exports = {
  findProjects,
  findResources,
  findTasks,
  findProjectById,
  addProjects,
  addResources,
  addTask
};

function findProjects() {
  return db('projects');
}

function findResources() {
  return db('resources');
}

function findTasks() {
  return db('task')
    .join('projects', 'projects.id', '=', 'task.project_id')
    .select(
      'Description',
      'Notes',
      'task.Completed',
      'projectName',
      'projectDescription'
    );
}

function findProjectById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function addProjects(changes, id) {
  return db('projects')
    .update(changes)
    .where({ id });
}

function addResources(newResource) {
  return db('resources').insert(newResource);
}

function addTask(newTask) {
  return db('task').insert(newTask);
}
