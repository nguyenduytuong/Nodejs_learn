function MongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}

export { MongooseToObject }