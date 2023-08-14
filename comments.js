// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Data
const comments = require('./data/comments');

// Routes
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,
    body: req.body.body,
    postId: req.body.postId,
  };

  comments.push(newComment);
  res.json(newComment);
});

app.listen(4001, () => {
  console.log('Comments service started on port 4001');
});
