import  { authJwt } from "./../Middlewares/index.js";
import {UserController} from "./../Controllers/index.js";
import express from 'express';
const app = express();

function userRoute() {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", UserController.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], UserController.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    UserController.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    UserController.adminBoard
  );
};

export default userRoute;