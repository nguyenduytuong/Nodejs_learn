import mongoose from "mongoose";

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/nodejs_learn_dev');
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect fail!!!');
    }
}
export { connect };
// module.exports = connect;