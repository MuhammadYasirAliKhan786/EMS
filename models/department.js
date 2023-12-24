const mongoose = require("mongoose");

const Department = mongoose.model(
  "Department",
  new mongoose.Schema({
    name: String,
    // employee: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Employee"
    // }
  })
);

module.exports = Department;
