const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
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

UserSchema.pre("save", async function() {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);  
});

UserSchema.methods.createJWT = function(){
  return jwt.sign({userId: this.id, name: this.name}, 'MyS3cret', {
    expiresIn: '3d'
  })
}

module.exports = mongoose.model('User', UserSchema);