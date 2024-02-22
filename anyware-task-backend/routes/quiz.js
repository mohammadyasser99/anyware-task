const express = require('express');
const router = express.Router();
const controller = require('../controller/quiz.js');

router.get('/',controller.getQuiz)
router.post('/add',controller.createQuiz)
router.put('/update/:id',controller.updateQuiz)
router.get('/:id',controller.getQuizById)
router.delete('/delete/:id',controller.deleteQuiz)

module.exports = router;
