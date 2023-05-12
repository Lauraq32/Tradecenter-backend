const User = require('../models/user');

const emailValidation = async( email = '' ) => {
    const usedEmail = await User.findOne({ email });
    if (usedEmail) {
        throw new Error(`${ email }, is registered`);
    }
}

module.exports = {
    emailValidation,
}
