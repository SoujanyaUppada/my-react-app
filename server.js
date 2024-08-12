const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'banner_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Default route for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Banner API. Use /api/banner to interact with the banner data.');
});

// Get the current banner data
app.get('/api/banner', (req, res) => {
  const sql = 'SELECT * FROM banners WHERE id = 1';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});

// Update the banner data
app.post('/api/banner', (req, res) => {
  const { description, timer, link, visibility } = req.body;
  const sql = `UPDATE banners SET description = ?, timer = ?, link = ?, visibility = ? WHERE id = 1`;
  db.query(sql, [description, timer, link, visibility], err => {
    if (err) throw err;
    res.send({ message: 'Banner updated successfully' });
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
