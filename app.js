const express = require('express');
const app = express();
const { projects } = require('./data.json');

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { projects });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects/:id', (req, res) => {
  const id = req.params.id;
  res.render('project', { project: projects[id] });
});



app.listen(3000, () => {
	console.log('The application is running on localhost:3000!');
});
