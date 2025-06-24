const express = require('express');
const { getTodos, addTodo, deleteTodo, updateTodo } = require('../controllers/todoController');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

router.use(requireAuth);
router.get('/', getTodos);
router.post('/', addTodo);
router.delete('/:id', deleteTodo);
router.put('/:id', updateTodo);

module.exports = router;
