const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport,getUserByEmail){
    const authenticateUser = (email, password, done) => {
        const user = getUserByEmail(email)
        if (user == null){
            return done(null,false, {message: 'No user with that email'})
        }

        try {
            if (await bcrypt.compare(password, user.password)){
                return done(null,false, {message: user})
            }else {
                return done(null,false, {message: 'wrong password'})
            }
        }
        catch(err){
            return done(err)
        }

    }

    passport.use(new LocalStrategy({ usernameField: 'email'}), 
    authenticateUser)
    passport.serializeUser((user, done) => { }) //i have no ideia
    passport.deserializeUser((id, done) => { })
}


module.exports = initialize