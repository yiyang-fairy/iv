//处理用户文件操作的代码
//获取用户列表的json数据
const p = require("path")
var fs=require('fs');

//数据存储的路径
var path =p.join(__dirname, './01data.json');

//读取文件，获取用户数组
//返回值:对象数组
exports.list=function(){
    //fs.readFileSync(path)返回的是二进制数据,为同步方法
    var jsonString=fs.readFileSync(path).toString();
    return JSON.parse(jsonString);
}