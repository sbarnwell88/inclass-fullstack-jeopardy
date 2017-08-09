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


var GameModel = mongoose.model("Game", GameSchema);
var CategoryModel = mongoose.model("Category", Categorychema);

module.exports = {
  Game: GameModel,
  Category: CategoryModel
};