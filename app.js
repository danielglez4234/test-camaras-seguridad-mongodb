const express = require('express');
const app = express();


// Settings
app.set('view engine', 'pug'); // setting view engine to pug
app.use('/static', express.static('public')); // using the public folder at the address /static


//Middlewares
// require all javascript pages
const mainRoutes = require('./routes');


//Routes
// use all javascript pages with its respective route
app.use(mainRoutes);


//ERROR conf
// create an error message for when the user tries to enter an unknown page
app.use((req, res, next) => {
  console.error('Oops! the page you are trying to enter cannot be found');
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

// rendering the error page
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

// setting the port to 3000
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log('The aplication is runnig on port:', port);
});
