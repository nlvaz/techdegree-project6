const express = require('express');
const app = express();
const { projects } = require('./data.json');

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.use('/', (req, res) => {
  res.render('index', { projects });
});
//app.use('/about', );
//app.use('/project', );



app.listen(3000, () => {
	console.log('The application is running on localhost:3000!');
});
