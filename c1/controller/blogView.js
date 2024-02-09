const Blog = require('../model/blogModel');

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).render('blogs', {
      title: 'ALL BLOGS',
      godina: '2024',
      blogs: blogs,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getSingleBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render('singleBlog', { blog });
};
