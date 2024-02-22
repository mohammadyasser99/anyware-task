const Quiz = require('../model/quiz');
exports.getQuiz = async (req, res) => {
    const quiz = await Quiz.find({});
    res.json(quiz);
}

exports.createQuiz = async (req, res) => {
    const { course, topic, time } = req.body;
    const quiz = new Quiz({
        course,
        topic,
        time
    });
    await quiz.save();
    res.json(quiz);
}

exports.updateQuiz = async (req, res) => {
    const { course, topic, time } = req.body;
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, {
        course,
        topic,
        time
    }, { new: true });
    res.json(quiz);
}

exports.getQuizById = async (req, res) => {
    const quiz = await Quiz.findById(req.params.id);
    res.json(quiz);
}

exports.deleteQuiz = async (req, res) => {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    res.json(quiz);
}

