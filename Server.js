require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/chat', (req, res) => {
  const { message } = req.body;
  console.log(message);
});

app.set('port', process.env.PORT || 5000);
const server = app.listen(5000, () => {
  console.log("Express running → PORT");
});