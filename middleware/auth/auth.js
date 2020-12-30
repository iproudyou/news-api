const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../../db/User');

module.exports = function (passport) {
    passport.use(
        'signin',
        new localStrategy(
            {
                usernameField: 'email',
                passwordField: 'password'
            },
            async (username, password, done) => {
                try {
                    const user = await UserModel.getByEmail(username);

                    if (!user) {
                        // user not found error
                        return done(null, false, { message: 'User not found' })
                    }

                const validate = await user.isValidPassword(password);

                if (!validate) {
                    // wrong password error
                    return done(null, false, { message: 'Wrong password' });
                }

                // user information is sent to the next middleware
                return done(null, user, { message: 'Logged in Successfully' })
                } catch (err) {
                    done(err)
                }
            }
        )
    );

    // stores cookie in the browser
    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    })

    // returns the user from the cookie
    passport.deserializeUser((id, cb) => {
        UserModel.findOne({_id: id}, (err, user) => {
            cb(err. user);
        })
    })
}
