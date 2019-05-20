const express = require("express");
const router = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
  res.render('index', { projects });
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/projects/:id', (req, res) => {
  const id = req.params.id;
  res.render('project', { project: projects[id] });
});

module.exports = router;
