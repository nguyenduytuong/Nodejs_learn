function mutipleMongooseToObject(mongooseArrays) {
    return mongooseArrays.map(mongooseArray => mongooseArray.toObject())
}

function mongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}

function a(mongoose) {
    return mongoose.reduce(reduce=>reduce.toObject());
}

// const mutipleMongooseToObject = {
//     mutipleMongooseToObject: function (mongooseArrays) {
//         return mongooseArrays.map(mongooseArray => mongooseArray.toObject());
//     },
//     MongooseToObject: function (mongoose) {
//         return mongoose ? mongoose.toObject() : mongoose;
//     }
// }

export { mutipleMongooseToObject, mongooseToObject, a };