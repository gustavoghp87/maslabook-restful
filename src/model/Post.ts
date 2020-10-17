import mongoose from 'mongoose'


const PostSchema = new mongoose.Schema({
  innerId: String,
  timest: String,
  date: String,
  postUrl: String,
  socialNet: String,
  user: String,
  post: String,
  shared: String,
  day: String,
  month: String,
  year: String,
  tags: String
})

export const Post = mongoose.model('posts', PostSchema)
