const mongoose = require("mongoose");

const Employee = mongoose.model(
  "Employee",
  new mongoose.Schema({
    name: String,
    surname: String,
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department"
    }
  })
);

module.exports = Employee;
