const express = require('express');
const Projects = require('../helpers/project-helper');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'We were unable to locate your projects'
    });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Projects.findById(id);

    if (project) {
      res.json(project);
    } else {
      res.status(404).json({
        success: false,
        message: 'We cold not find the project with the given id.'
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'We were unable to locate your project'
    });
  }
});

router.post('/', async (req, res) => {
  const projectData = req.body;

  try {
    const project = await Projects.add(projectData);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: 'We were unable to create a new project' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Projects.remove(id);

    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res
        .status(404)
        .json({ message: 'We could not find project with the  given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete the project' });
  }
});

module.exports = router;
