// mongodb+srv://aleksandar:<password>@cluster0.dle0u6v.mongodb.net/?retryWrites=true&w=majority
const express = require('express');
//!npm install mongoose

const database = require('./database/database');
const blogController = require('./controller/blogController');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

database.connectToDatabase();

// zemame informacii od data baza i gi prakjame na klient
app.get('/api/v1/blogs', blogController.getAllBlogs);
app.get('/api/v1/blogs/:id', blogController.getBlog);
// kreirame nov zapis vo data baza
app.post('/api/v1/blogs', blogController.createBlog);
// so patch updejtirame informacii
app.patch('/api/v1/blogs/:id', blogController.updateBlog);
// brishime informacii
app.delete('/api/v1/blogs/:id', blogController.deleteBlog);

//!

//!

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

//? Za domasna da se kreira
//? Akteri - kolekckcija so get ,post,delete,patch
//? Peaci - kolekcija so get ,post,delete,patch
//? filmovi - kolekcija get ,post,delete,patch

//? domasna2

//! DA SE IMPLEMENTIRA VIEW, da si ima sopstveni ruti view
//! "/blogs" - na get da se prikazat site blogovi
//! "/blogs" = na post metoda da se kreira nov post
//* "/blogs/delete/:id" i "/blogs/:id" - da moze da pristapime do signle blog
