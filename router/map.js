const express = require("express");
const router = express.Router();
const mapData = require("../mock/china.json");

router.get("/data", (req, res) => {
  res.send({ msg: "我是chinaMap的路由地址", chinaMap: mapData });
});

module.exports = router;
