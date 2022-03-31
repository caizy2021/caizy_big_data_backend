const express = require("express");
const router = express.Router();
const oneData = require("../mock/one.json");

router.get("/data", (req, res) => {
  res.send({ msg: "我是item1的路由地址", chartOne: oneData });
});

module.exports = router;
