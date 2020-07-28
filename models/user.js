const   mongoose  = require("mongoose");
const   validator = require("validator");
const   _         = require("lodash");

 const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: false,
        required: true,
        minlength: 1,
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        unique: false,
        trim: true,
        validate: {
            validator: value=>validator.isEmail(value),
            message: "Not a valid Email",
        },
    },
     status: {
          type: String,
          required: false,
          minlength: 1,
          unique: false,
      },

    password: {
        type: String,
        minlength: 6,
        required: true,
        unique: true,
    },
    channels: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Channel",
    }],
    profile_picture: {
        type: String,
        default: "/img/placeholder.png",
    },
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    created_at: {
        type: Date,
        default: Date.now,
    },
    online: {
        type: Boolean,
        default: false,
    },
   delete: {
        type: Boolean,
        default: false,
    },
   admin: {
        type: Boolean,
        default: false,
    },
});

// userSchema.plugin(passportLocalMongoose);

// // Generating a hash
// userSchema.methods.generateHash = function(password) {
//     // return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
//     bcrypt.genSalt(10, (err, salt) =>{
//         bcrypt.hash(password, salt, (err, res) =>{
//             return res;
//         });
//     });
// };

// userSchema.methods.toJSON = ()=>{
//     const user = this;
//     const userObj = user.toObject();
//     return _.pick(userObj, ["_id"]);
// };


module.exports = mongoose.model("User", userSchema);
