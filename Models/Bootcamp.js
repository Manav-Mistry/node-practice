const mongoose = require("mongoose");

const BootcampSchema = mongoose.Schema({
    id: {
        type: Number,
        require: [true, "Please add id"],
        unique: true,
    },
    name: {
        type: String,
        require: [true, "Please add a name"],
        
        trim: true,
        maxlength: [50, "Name can not be more than 50"]
    },
    description: {
        type: String,
        require: [true, "Please add a name"],
        trim: true,
        maxlength: [50, "Name can not be more than 50"]
    }
})

module.exports= mongoose.model("Bootcamp", BootcampSchema);