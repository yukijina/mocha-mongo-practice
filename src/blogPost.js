const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: String,
  content: String,
  //many coomments in this relation
  comments: ({
    // this is not nesting. Referencing comment collection => MongoDb stores id of comments
    // In this case, you should include array both type and ref
    type: Schema.Types.ObjectId,
    ref: 'comment'  // referencing model name (lowercase)
  })
})

//model name - lowercase
const BlogPost = mongoose.model('blogPost', BlogPostSchema);

module.exports = BlogPost;

// association:  blogPost has many comments (collection of comment.id)