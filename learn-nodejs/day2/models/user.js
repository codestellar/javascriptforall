const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
    maxlength: 50,
    minlength: 5,
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: 8,
  },
});

UserSchema.pre("save", async() => {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  
});

module.exports = mongoose.model('User', UserSchema);