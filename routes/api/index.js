const router = require('express').Router();
const bookRoutes = require('./bookRoutes');
const userRoutes = require('./userRoutes');
const todoRoutes = require('./todoRoutes');

// Every route inside of this index.js
// already has /api prepended before it

// this will prepend /api/books to every route declared below this comment
router.use('/books', bookRoutes);
// this will prepend /api/users to every route declared below this comment
router.use('/users', userRoutes);
router.use('/todo', todoRoutes);

module.exports = router;