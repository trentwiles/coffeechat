const bcrypt = require("bcryptjs");
const User = require("../models/user");



const localSignupStrategy = async (req, email, password, done) => {
    try
    {
        email = email ? email.toLowerCase() : email;
        if (req.user) return done(null, false, { message: "Already logged in." });
        let user = await User.findOne({ email });
        if (user) return done(null, false, { message: "Email already exists." });
        user = undefined;
        if (!req.body.username) return done(null, false, { message: "Missing username in request body." });
        user = await User.findOne({ username: req.body.username });
        if (user) return done(null, false, { message: "Username already exists." });
        user = undefined;
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        user = await User.create({ email, password, username: req.body.username });
        done(null, user);
    } catch (error)
    {
        done(null, false, { message: error.message });
    }
};

const localSigninStrategy = async (req, email, password, done) => {
    try
    {
        const user = await User.findOne({ email });
        if (!user) return done(null, false);
        const matching = await bcrypt.compare(password, user.password);
        if (matching) return done(null, user);
        done(null, false);
    } catch (error)
    {
        console.debug(error);
        done(null, false);
    }
};

module.exports.localSignupStrategy = localSignupStrategy;
module.exports.localSiginStrategy = localSigninStrategy;