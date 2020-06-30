const mongoose = require('mongoose');
const Schema = mogoose.Schema;

const CommentSchema = new Schema({
  content: String,
  // comment is associated/blongs to a user
  user: { types: Schema.Types.ObjectId, ref: 'user' }
})

const Comment  = mongoose.model('comment', CommentSchema);

module.exports = Comment;

// association:  Comments belongs to a user (collection of Id)