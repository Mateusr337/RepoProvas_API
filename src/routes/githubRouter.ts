import { Router } from "express";
import axios from "axios";

const githubRouter = Router();

githubRouter.get("/github/callback", (req, res) => {
  // The req.query object has the query params that were sent to this route.
  const requestToken = req.query.code;

  axios({
    method: "post",
    url: `https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.SECRET_KEY}&code=${requestToken}`,
    // Set the content type header, so that we get the response in JSON
    headers: {
      accept: "application/json",
    },
  }).then((response) => {
    const access_token = response.data.access_token;
    res.send({ access_token });
  });
});

githubRouter.get("/success", function (req, res) {
  let access_token = req.query.access_token;

  axios({
    method: "get",
    url: `https://api.github.com/user`,
    headers: {
      Authorization: "token " + access_token,
    },
  })
    .then((response) => {
      res.send({ userData: response.data });
    })
    .catch((error) => console.log(error.message));
});

export default githubRouter;
