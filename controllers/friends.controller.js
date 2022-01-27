const { friends } = require("../models/friends.model");

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriends = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriends);
  res.json(newFriends);
  console.log(newFriends);
}

function getFriends(req, res) {
  res.json(friends);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "friend does not exist",
    });
  }
}

module.exports = {
  postFriends,
  getFriends,
  getFriend,
};
