const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const QuestionSchema = new Schema ({
    value: Number,
    question: String,
    answer: String
})

const CategorySchema = new Schema ({
    name: String,
    question: [QuestionSchema]
})

const GameSchema = new Schema ({
    user: String,
    points: Number,
    board: [Boolean],
    categories: [CategorySchema]
})


const GameModel = mongoose.model("Game", GameSchema);
const CategoryModel = mongoose.model("Category", Categorychema);
const QuestionModel = mongoose.model("Question", Questionchema);


module.exports = {
  Game: GameModel,
  Category: CategoryModel,
  Question: QuestionModel
};