const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*',
}));

// Ignore request for FavIcon. so there is no error in browser
const ignoreFavicon = (req, res, next) => {
  if (req.originalUrl.includes('favicon.ico')) {
      res.status(204).end();
  }
  next();
};
// Configure nonFeature
app.use(ignoreFavicon);

app.get('/hello', (req, res) => {
  res.send('Hello from js');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = app;
