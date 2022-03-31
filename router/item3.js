const express = require("express");
const router = express.Router();
const threeData = require("../mock/three.json");

router.get("/data", (req, res) => {
  res.send({ msg: "我是item3的路由地址", chartThree: threeData });
});

module.exports = router;
