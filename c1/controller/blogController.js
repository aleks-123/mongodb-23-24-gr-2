const Blog = require('../model/blogModel');

exports.createBlog = async (req, res) => {
  try {
    console.log(req.body);
    // const newBlog = new Blog(req.body);
    // newBlog.save();
    const newBlog = await Blog.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        blog: newBlog,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({
      status: 'success',
      data: {
        blogs: blogs,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
