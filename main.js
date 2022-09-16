const express = require("express")
var url = require("url")
var user = require("./front/Register/user.js")
var userLogin = require("./front/Login/login-user.js")
var bodyParser = require("body-parser")

const app = express()
app.use(express.static("front"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get("/login-user/Login", function (req, res) {
  var { userpass, username: user, number } = url.parse(req.url, true).query
  const username = "" + number + user

  if (user === "" || userpass === "") {
    res.writeHead(200, "ok", { "Content-Type": "text/html;charset=utf-8" })
    res.end("请输入账号或密码")
    return
  }

  //获取用户名
  var t_username = username

  //获取用户密码
  var t_userpass = userpass
  //读取json文件中之前保存的用户数据
  var userList = userLogin.list()

  const hwh = userList.findIndex((h) => h.username == t_username)

  if (hwh == -1) {
    res.writeHead(200, "ok", { "Content-Type": "text/html;charset=utf-8" })
    res.end("输入错误，请重新输入")
    return
  }
  if (userList[hwh]?.userpass === t_userpass) {
    res.redirect("/")
  } else {
    res.writeHead(200, "ok", { "Content-Type": "text/html;charset=utf-8" })
    res.end("密码错误，请重试")
  }
})

app.post("/user/Register", function (req, res) {
  const { number, userphone, userpass } = req.body
  const username = number + userphone

  if (userphone === "" || userpass === "") {
    res.writeHead(200, "ok", { "Content-Type": "text/html;charset=utf-8" })
    res.end("请输入账号或密码")
    return
  }

  var userList = user.list()
  //将新创建的对象存入数组
  userList.push({
    username,
    userpass,
  })

  //将数组数据再次存入文件
  user.save(userList)
  res.redirect("/")
})

app.listen(3000, function () {
  console.log("项目启动。。。")
})
