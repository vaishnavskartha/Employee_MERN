var Mongoose = require("mongoose");
const UserSchema = Mongoose.Schema(
    {
        username: {
            type: String,
            required: true
          },
        password : {
          type: String,
          required: true
        }
       
    }
);

var UserModel = Mongoose.model("Users",UserSchema);
module.exports = {UserModel};