// module.exports = function (app) {
// app.get("/api/post", function (req, res) {
// res.end();
// });
// };
//

const express = require("express");
const post = require("./post");
const get = require("./post");

const router = express.Router();
router.use("/post", post);
router.use("/post", get);

module.exports = router;
