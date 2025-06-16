const asyncHandler = require('express-async-handler');
const News = require('../models/News');

// @desc    Get all news articles
// @route   GET /api/news
// @access  Public
const getNews = asyncHandler(async (req, res) => {
  const news = await News.find({}).sort({ createdAt: -1 }); // Sort by newest first
  res.json(news);
});

// @desc    Get a single news article by ID
// @route   GET /api/news/:id
// @access  Public
const getNewsById = asyncHandler(async (req, res) => {
  const news = await News.findById(req.params.id);

  if (news) {
    res.json(news);
  } else {
    res.status(404);
    throw new Error('News article not found');
  }
});

// @desc    Create a new news article
// @route   POST /api/news
// @access  Private/Admin
const createNews = asyncHandler(async (req, res) => {
  // Assuming req.user is populated by auth middleware for admin
  const { title, imageUrl, content, category } = req.body;

  const news = new News({
    title,
    imageUrl,
    content,
    category,
    // author: req.user._id, // Uncomment if you link news to admin user
  });

  const createdNews = await news.save();
  res.status(201).json(createdNews);
});

// @desc    Update a news article
// @route   PUT /api/news/:id
// @access  Private/Admin
const updateNews = asyncHandler(async (req, res) => {
  const { title, imageUrl, content, category } = req.body;

  const news = await News.findById(req.params.id);

  if (news) {
    news.title = title || news.title;
    news.imageUrl = imageUrl || news.imageUrl;
    news.content = content || news.content;
    news.category = category || news.category;

    const updatedNews = await news.save();
    res.json(updatedNews);
  } else {
    res.status(404);
    throw new Error('News article not found');
  }
});

// @desc    Delete a news article
// @route   DELETE /api/news/:id
// @access  Private/Admin
const deleteNews = asyncHandler(async (req, res) => {
  const news = await News.findById(req.params.id);

  if (news) {
    await news.deleteOne(); // Use deleteOne() for Mongoose 6+
    res.json({ message: 'News article removed' });
  } else {
    res.status(404);
    throw new Error('News article not found');
  }
});

module.exports = {
  getNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
};