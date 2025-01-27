const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/CompleteCrud");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("user", userSchema);