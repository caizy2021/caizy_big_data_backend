const express = require("express");
const app = express();
// 设置跨域
app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

// 引用路由文件
const chart1 = require("./router/item1.js");
const chart2 = require("./router/item2.js");
const chart3 = require("./router/item3.js");
const chart4 = require("./router/item4.js");
const chartMap = require("./router/map.js");

// 使用中间件配置路由
app.use("/1", chart1);
app.use("/2", chart2);
app.use("/3", chart3);
app.use("/4", chart4);
app.use("/china", chartMap);

app.listen(2101, () => {
  console.log("server running at http://localhost:2101");
});
