var express=require("express");
var app = express();
var http=require('http').Server(app);
app.use(express.static(__dirname+'/Public'))
app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/index.html');
});
app.get('/projects',(req,res)=>{
	res.sendFile(__dirname+'/private/projects.json')
})
http.listen(3000,()=>{
	console.log('listening on port 3000')
});
