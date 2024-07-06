const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.Schema('account', accountSchema);
