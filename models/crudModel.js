const mongoose = require('mongoose');


const CrudSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        maxlength: [50, 'Name must be less than 50 Characters']
    },
    comment: String,
    comepleted: {
        typed: Boolean,
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Tasks', CrudSchema)