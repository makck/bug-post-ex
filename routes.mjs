import db from './models/index.mjs';

// import your controllers here

export default function bindRoutes(app) {
  // initialize the controller functions here
  // pass in the db for all callbacks

  // define your route matchers here using app
  app.get('/', (req, res) => {
    res.render('bugform');
  });

  app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Post success');
  });
}
