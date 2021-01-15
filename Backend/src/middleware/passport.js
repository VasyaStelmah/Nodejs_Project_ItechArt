const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Users = require('../models/users');
const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT
};

// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try { 
                // const user = await User.findOne({id: jwt_payload.userId}, function(err, user) {
                const user =  await Users.findAll({
                    where:{
                      id: payload.id
                    }});
                    if (user) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                        // or you could create a new account
                    }
                
            } catch(e) {console.log(e);}
        }));
}