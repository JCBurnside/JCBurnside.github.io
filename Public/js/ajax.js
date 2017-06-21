if(!String.prototype.format)throw "EXTENSION REQUIRED"
var isVisable;
const TILE_FORMAT="<div class=\"tile col-xs-12 col-md-3\" id=\"%s\">\
					<div class=\"col-xs-12\">\
						<img src=\"%s\" />\
					</div>\
					<div class=\"col-xs-12\">\
						<h3>%s</h3>\
					</div>\
					<div class=\"col-xs-12\">\
						<p>%s</p>\
					</div>\
					<div class=\"col-xs-12\">\
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
		url:"https://jcburnside.github.io/private/projects.json"
	}).done((res)=>{
		console.log(res)
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