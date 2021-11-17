import express from 'express';
import {Router} from 'express';
import session from 'express-session';

const logOutRouter = express.Router();

logOutRouter.get('/', (req, res) => {
    req.session.destroy( (err) => {
        if (!err) {
          const destination = Config.ETHEREAL_EMAIL;
          const subject = 'Log Out' + userData.displayName + Date.now();
          const content = `
          <h1>LogOut de Usuario</h1>
          <p> Usuario: ${userData.displayName}</p>
          `;

          try {
            const response = EmailService.sendEmail(
              destination,
              subject,
              content
            );

            res.json(response);
          } catch (err) {
            res.status(500).json(err);
          }
          res.redirect('/login');
        }
        else res.send({ status: 'Logout ERROR', body: err });
      });
});

export default logOutRouter;