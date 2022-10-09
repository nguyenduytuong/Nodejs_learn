function mutipleMongooseToObject(mongooseArrays) {
    return mongooseArrays ? mongooseArrays.map(mongooseArray => mongooseArray.toObject()) : mongooseArrays;
}

// export { mutipleMongooseToObject : function(){

// } };

// const mutipleMongooseToObject = {
//     mutipleMongooseToObject: function (mongooseArrays) {
//         return mongooseArrays.map(mongooseArray => mongooseArray.toObject());
//     },
//     MongooseToObject: function (mongoose) {
//         return mongoose ? mongoose.toObject() : mongoose;
//     }
// }

export { mutipleMongooseToObject };