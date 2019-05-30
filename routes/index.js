const express = require("express");
const router = express.Router();
const { projects } = require('../data.json');


//route that leads to main page that displays project thumbnails
router.get('/', (req, res) => {
  res.render('index', { projects });
});

//route that leads to about page, which displays information about portfolio owner
router.get('/about', (req, res) => {
  res.render('about');
});

//route that leads to project clicked on by user from home page
//page is created dynamically with variables passed to project.pug
router.get('/projects/:id', (req, res) => {
  const id = req.params.id;
  res.render('project', { project: projects[id] });
});

module.exports = router;
