if(!String.prototype.format)throw "EXTENSION REQUIRED"
var isVisable;
const TILE_FORMAT="<div class=\"tile\" id=\"%s\">\
					<div class=\"row\">\
						<img src=\"%s\" />\
					</div>\
					<div class=\"row\">\
						<h3>%s</h3>\
					</div>\
					<div class=\"row\">\
						<p>%s</p>\
					</div>\
					<div class=\"row\">\
						<ul class=\"tags\">\
							%s\
						</ul>\
					</div>\
				</div>"//vars in order:id,imgSrc,name,desc,tags
$(()=>{
	console.log("LOADING AJAX.JS")
	// $.ajax({
	// 	type:"GET",
	// 	url:'/projects'
	// })
	//   .done((res)=>{
	//   	console.log(res);
	//   })
	//   .fail((res)=>{
	//   	console.log(res);
	//   })
	$.ajax({
		type:"GET",
		url:"https://api.github.com/users/jcburnside/repos"
	}).done((res)=>{
		res.forEach((element)=>{
			console.log(element.url)
		})
	})

	// isVisable=function($Obj){
	// 	let w=$(window),
	// 	scrollT=w.scrollTop(),
	// 	scrollL=w.scrollLeft(),
	// 	offset=$Obj.offset(),
	// 	x=offset.left,
	// 	y=offset.top,
	// 	objH=$Obj.height(),
	// 	objW=$Obj.width(),
	// 	winH=w.height(),
	// 	winW=w.width();
	// 	console.log("%s>=%s,%s<=%s,%s>=%s,%s<=%s",y+objH,scrollT,y,scrollT+winH,x+objW,scrollL,x,objW+scrollL)
	// 	return y+objH>=scrollT &&
	// 			y<=scrollT+winH &&
	// 			x+objW>=scrollL&&
	// 			x<=objW+scrollL&&
	// 			$Obj.css("display")!="none";
	// }
});