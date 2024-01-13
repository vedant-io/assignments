import express from "express";

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable
function requestCounterMiddleware(_req, _res, next) {
  requestCount++;
  next();
}

app.use(requestCounterMiddleware);

app.get("/user", function (_req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (_req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/requestCount", function (_req, res) {
  res.status(200).json({ requestCount });
});

export default app;
