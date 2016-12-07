// 引入 `express` 模块，并将它赋予 `express` 这个变量等待使用。
var express = require('express');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

// 监听本地的 3000 端口
app.listen(3000, function () {
  console.log('app is listening at port 3000');
});