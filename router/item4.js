const express = require("express");
const router = express.Router();
const fourData = require("../mock/four.json");

router.get("/data", (req, res) => {
  res.send({ msg: "我是item4的路由地址", chartFour: fourData });
});

module.exports = router;
