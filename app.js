const express = require('express');
const app = express();
const { projects } = require('./data.json');

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');

app.use(mainRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  console.log(`Uh oh! Something went wrong:
    ${err.status} - ${err.message}`)
  next(err);
})

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
})

app.listen(3000, () => {
	console.log('The application is running on localhost:3000!');
});
