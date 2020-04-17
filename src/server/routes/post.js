const express = require("express");
const Post = require("../models/post");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/", (req, res) => {
  Post.findAll()
    .then((post) => {
      if (!post.length) return res.status(404).send({ err: "Todo not found" });
      res.send(`find successfully: ${post}`);
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/", (req, res) => {
  if (req.body.user === "") {
    return res.status(400).json({
      error: "EMPTY USERNAME",
      code: 2,
    });
  }

  if (req.body.contents === "") {
    return res.status(400).json({
      error: "EMPTY CONTENTS",
      code: 2,
    });
  }

  let post = new Post({
    user: req.body.user,
  });

  post.save((err) => {
    if (err) throw err;
    return res.json({ success: true });
  });
});

module.exports = router;
