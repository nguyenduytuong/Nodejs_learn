function mutipleMongooseToObject(mongooseArrays) {
    return mongooseArrays.map(mongooseArray => mongooseArray.toObject())
}

function mongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}

function a(mongoose) {
    return mongoose.reduce(reduce=>Object.assign(reduce));
}

export { mutipleMongooseToObject, mongooseToObject, a };