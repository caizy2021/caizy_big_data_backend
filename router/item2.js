const express = require("express");
const router = express.Router();
const twoData = require("../mock/two.json");

router.get("/data", (req, res) => {
  res.send({ msg: "我是item2的路由地址", chartTwo: twoData });
});

module.exports = router;
