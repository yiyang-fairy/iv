const express = require('express')
var url = require("url")
var user = require("./front/Login/login-user.js")
var user = require("./front/Register/user.js")


const app = express()
app.use(express.static('front'))

app.get("/login-user/Login", function (req, res) {
  var obj = url.parse(req.url, true)

  //获取用户名
  var t_username = obj.query.username

  //获取用户密码
  var t_userpass = obj.query.userpass

  //读取json文件中之前保存的用户数据
  var userList = user.list()

  res.writeHead(200, "ok", { "Content-Type": "text/html;charset=utf-8" })
  const hwh = userList.findIndex((h) => h.username == t_username)

  if (hwh == -1) {
    res.end("输入错误，请重新输入")
  }
  if (userList[hwh].userpass === t_userpass) {
    res.end("登陆成功")
  } else {
    res.end("密码错误，请重试")
  }
})

app.get("/user/Register", function (req, res) {
  //接收来自客户端提交的数据
  //http://localhost:3000/user/register?username=aaa&userpass=bbb

  var obj = url.parse(req.url, true)
  console.log(obj)
  //获取用户名
  var t_username = obj.query.username
  //获取用户密码
  var t_userpass = obj.query.userpass
  console.log(t_username)
  console.log(t_userpass)
  //读取json文件中之前保存的用户数据
  var userList = user.list()
  console.log(userList)
  //创建新的用户对象
  var newUser = {}
  newUser.username = t_username
  newUser.userpass = t_userpass

  //将新创建的对象存入数组
  userList.push(newUser)

  //将数组数据再次存入文件
  user.save(userList)

  //给客户端做出响应
  // res.writeHead(200, "ok", { "Content-Type": "text/html;charset=utf-8" })
  res.redirect('/')
  // res.end("注册ok!")
})


app.listen(3000, function() {
    console.log('项目启动。。。')
})