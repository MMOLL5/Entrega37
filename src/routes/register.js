import express from 'express';
import {Router} from 'express';
import session from 'express-session';

const regUserRouter = express.Router();

regUserRouter.get('/', (req, res) => {
    res.render('register');
});

export default regUserRouter;