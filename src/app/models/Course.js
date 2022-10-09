import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
},{
    timestamps:true,
});

const Courses = mongoose.model('Course', Course);

export { Courses };