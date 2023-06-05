const express = require('express');
const app = express();
const db = require('./models');
const postRouter = require('./routes/postRouter');

const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', postRouter);

const start = async () => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    app.listen(PORT, function () {
      console.log(`the server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start().then();
