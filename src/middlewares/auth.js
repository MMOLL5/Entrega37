import passport from 'passport';
import Config from '../config';
import {
  VerifyFunction,
  StrategyOption,
  Strategy as FaceBookStrategy,
} from 'passport-facebook';

const argumentos = process.argv;
let facebookClientId = argumentos[3];
let facebookClientSecret = argumentos[4];

const strategyOptions = {
  clientID: facebookClientId || Config.FACEBOOK_APP_ID,
  clientSecret: facebookClientSecret || Config.FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:8080/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'photos', 'emails'],
};

const loginFunc = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  console.log('SALIO TODO BIEN');
  console.log(accessToken);
  console.log(refreshToken);
  console.log(profile);
  return done(null, profile);
};

passport.use(new FaceBookStrategy(strategyOptions, loginFunc));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

export const isLoggedIn = (req, res, done) => {
  if (!req.isAuthenticated())
    return res.status(401).json({ msg: 'Unathorized' });

  done();
};

export default passport;