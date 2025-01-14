import express from 'express';

import loginController from '../controllers/loginController';

const loginRouter = express.Router();

loginRouter.post('/', loginController.login);

export default loginRouter;
