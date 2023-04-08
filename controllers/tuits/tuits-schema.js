import mongoose from 'mongoose';

const schema = mongoose.Schema({
    topic: String,
    userName: String,
    time: String,
    title: String,
    image: String,
    liked: Boolean,
    replies: Number,
    retuits: Number,
    likes: Number,
    handle: String,
    tuit: String,
}, {collection: 'Tuits'});
export default schema;