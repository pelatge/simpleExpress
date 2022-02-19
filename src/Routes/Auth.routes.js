import { verifySignUp } from "./../Middlewares/index.js";
import {AuthController} from "./../Controllers/index.js";
import express from 'express';
const app = express();

function authRoute(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    AuthController.signup
  );

  app.post("/api/auth/signin", AuthController.signin);
};

export default authRoute;