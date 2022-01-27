const { messenger } = require("../models/messages.model");

function getMessages(req, res) {
  res.send("<h1>helloooo Einstien</h1>");
}

function postMessage(req, res) {
  if (!req.body.topic && !req.body.text) {
    return res.status(400).json({
      error: "missing message",
    });
  }
  const newMessenger = {
    topic: req.body.topic,
    text: req.body.text,
    id: messenger.length,
  };
  messenger.push(newMessenger);
  res.json(newMessenger);
}

module.exports = {
  getMessages,
  postMessage,
};
