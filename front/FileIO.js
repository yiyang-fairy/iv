//处理用户文件操作的代码
//获取用户列表的json数据

const fs=require('fs');

//数据存储的路径
const path='/data/user.json';

//读取文件，获取用户数组
//返回值:对象数组[{},{},{}]
exports.list=function(){
    //fs.readFileSync(path)返回的是二进制数据,为同步方法
    var jsonString=fs.readFileSync(path).toString();
    return JSON.parse(jsonString);
}


//将对象数组[{},{},{}]转化为json字符串后存入文件
// exports.save=function(userList){
//     //fs.writeFileSync(path)为同步方法
//     fs.writeFileSync(path,JSON.stringify(userList));
//     console.log('save ok!');
// }