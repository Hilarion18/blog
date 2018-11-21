const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    name: {
      type: String,
      validate: {
        validator(val) {
          let pattern = new RegExp(/\d/);
          if (pattern.test(val)) {
            throw new Error(`name must be string`);
          }
        }
      },
      required: [true, "name is required"]
    },
    username: {
        type: String
    },
    picture: {
      type: String
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: [true, "gender is required"]
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"]
    },
    password: {
      type: String,
      required: [true, "password is required"],
      // minlength: [6, "password minimal length 6"]
    }
  },
  {
    timestamps: true
  }
);

// userSchema.post("validate", doc => {
//   doc.password = bcrypt.hashSync(
//     doc.password,
//     Number(process.env.SALT_PASS)
//   );
// });

// Custom validation
// userSchema.path("name").validate(function(value) {
//   // Your validation code here, should return bool
// }, "Some error message");

const User = mongoose.model("User", userSchema);

module.exports = User;
