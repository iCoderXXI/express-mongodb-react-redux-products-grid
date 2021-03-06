const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/*', (req, res) => {
  const param = req.query.q;
  return res.json("API is under construction yet.");
});

app.get('/*', (req, res) => {
  const param = req.query.q;
  return res.json("API located at /api/...");
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
