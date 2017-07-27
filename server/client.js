/**
 * Created by zh on 17-7-26.
 */

var http=require("http");
//用于请求的选项
var options={
    host:"127.0.0.1",
    port:'8080',
    path:"../webIndex.html"
};
//处理响应的回调函数
var callback=function(response){
    var body='';
    response.on('data',function(data){
        body+=data;
    });
    response.on('end',function(){
//数据接收完成
        console.log(body);
    });

};
//向服务器发送请求
var req=http.createClient(options,callback);
req.end();