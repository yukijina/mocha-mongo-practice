const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = require('./post');

// Create a user schema
const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be more than 2 characters'
    },
    required: [true, 'Name is required.']
    },
  postCounter: Number,
  posts: [PostSchema],   // set PostSchema in array - posts are nesting
  likes: number,
  blogBosts: [{
    type: Schema.Types.ObjectId,
    ref: 'blogPost'
  }]
})

UserSchema.virtual('postCount').get(function() {
  return this.posts.length;
})

// pre is middleware. do something before saving
UserSchema.pre('remove', function(){
  //remove blogPost that is associated with user
  const BlogPost = mongoose.model('blogPost');
  BlogPost.remove({ _id: { $in: this.blogPosts }})
    .then(() =>next())
})

// Create a user model
const User = mongoose.model('user', UserSchema);

module.exports = User;

// association:  User has many post (title) - api display post title (not collection of ids)



