import {
    Decimal128,
    Int32
} from "bson";
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
        type: Int32
    },
    price:{
        type:Decimal128
    },
    author: {
        // type: Date
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