const express = require("express");

const { friendsRouter } = require("./routes/friends.router");
const { messagesRouter } = require("./routes/messages.router");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method}, ${req.baseUrl}${req.url}, and  ${delta}`);
});

app.use(express.json());

app.use("/messages", messagesRouter);
app.use("/friends", friendsRouter);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
