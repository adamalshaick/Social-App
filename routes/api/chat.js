const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Load Message Model
const Message = require("../../models/Message");

router.get("/", (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages);
  });
});

router.post("/", (req, res) => {
  const message = new Message(req.body);
  message.save(err => {
    if (err) sendStatus(500);
    res.sendStatus(200);
  });
});
