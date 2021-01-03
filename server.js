const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Database is working');
  })
  .catch((err) => {
    console.log(err);
  });

const port = 3000 || port.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
