// mongodb+srv://aleksandar:<password>@cluster0.dle0u6v.mongodb.net/?retryWrites=true&w=majority
const express = require('express');
//!npm install mongoose
const mongoose = require('mongoose');

const blogController = require('./controller/blogController');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose
//   .connect(
//     'mongodb+srv://aleksandar:YRzFP7MITu4YfYZo@cluster0.dle0u6v.mongodb.net/?retryWrites=true&w=majority'
//   )
//   .then(() => {
//     console.log('successfully conected!');
//   })
//   .catch((err) => console.log(err));

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://aleksandar:YRzFP7MITu4YfYZo@cluster0.dle0u6v.mongodb.net/vtorChas?retryWrites=true&w=majority'
    );
    console.log('Successfully connected!');
  } catch (err) {
    console.log(err);
  }
};

connectToDatabase();

app.get('/api/v1/blogs', blogController.getAllBlogs);
app.post('/api/v1/blogs', blogController.createBlog);

const port = 10000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// const testBlog = new Blog({
//   naslov: 'Iphone15',
//   tekst: 'This is expensive phone',
//   ocenka: 4,
//   avtor: 'Darko',
// });

// async function saveBlog() {
//   try {
//     await testBlog.save();
//     console.log('Usspesno zacuvavme eden blog');
//   } catch (err) {
//     console.log(err);
//   }
// }
// saveBlog();

//? Za domasna
