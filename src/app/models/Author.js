import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Author = new Schema({
    name: {
        type: String
    },
    birthdate: {
        type: Date
    },
    gender: {
        type: Boolean
    },
}, {
    timestamps: true,
});

const Authors = mongoose.model('Author', Author);

export {
    Authors
};