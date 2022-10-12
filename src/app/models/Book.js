import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Book = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    pagecount: {
        type: Number
    },
    price:{
        type:Number
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Author'
    },
    coverImage: {
        type: String
    },
}, {
    timestamps: true,
});

const Books = mongoose.model('Book', Book);

export {
    Books
};