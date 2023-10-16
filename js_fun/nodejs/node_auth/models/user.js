const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');



const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true, // so no user can sign up twice with the same email address
        lowercase: true, // taking the value and turning it into lowercase before storing it
        validate: [isEmail, 'Please enter valid email'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [3, 'Minimum password length is 3'], // don't want to add max since our password will be hashed and very long in our database
    },
}); 

// fire function before save into the db --- hashing passwords
// npm i bcrypt and require it into the schema
// tip; this is called a presave hook (learn more about it in react)
userSchema.pre('save', async function (next) {
    // generate a salt
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    next(); // always pass next inside of a hook
})


// static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });

    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}

const User = mongoose.model('user', userSchema);
module.exports = User;