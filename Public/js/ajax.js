if(!String.prototype.format)throw "EXTENSION REQUIRED"
var isVisable;
const TILE_FORMAT="<div class=\"tile col-xs-12 col-md-3\" id=\"%s\">\
					<a href=\"%s\">\
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
					</a>\
				</div>"//vars in order:id,imgSrc,name,desc,tags
$(()=>{
	console.log("LOADING AJAX.JS")
	$(window).scroll(function(){
		let $navBar=$('#navBar'),
			$mobileBar=$('#mobileNavBar');
		if($navBar.css('display')!="none"&&$(this).scrollTop()>=$("header").height())$navBar.addClass('nav-fixed')
		else $navBar.removeClass('nav-fixed');
		if($mobileBar.css('display')!="none"&&$(this).scrollTop()>=$("header").height())$mobileBar.addClass('mobile-fixed')
		else $mobileBar.removeClass('nav-fixed');
		console.log($(this).scrollTop()>=$("header").height())
	})
	$.ajax({
		type:"GET",
		url:"https://jcburnside.github.io/private/projects.json"
	}).done((res)=>{
		var $featProjects=$('#featProjects');
		res.projects.forEach((element,i)=>{
			let tags="";
			console.log(i)
			element.tags.forEach((e)=>tags+="<li>"+e+"</li>");
			if((i)%3==0)$featProjects.append("<div class='col-md-1 hidden-xs hidden-sm'></div>");
			// <div class='col-md-1 hidden-xs hidden-sm'></div>
			console.log(i%3==0&&i!=0);
			$featProjects.append(TILE_FORMAT.format(element.name.replace(" ","_"),element.link||element.github,element.name,element.desc,tags))
		})
		var $tiles=$('.tile'),
			maxHeight=0;

		for(let ctr=0;ctr<$tiles.length;ctr++){
			maxHeight=Math.max($($tiles[ctr]).height(),maxHeight);

		}
		for(let ctr=0;ctr<$tiles.length;ctr++){
			$($tiles[ctr]).height(maxHeight);
		}
	}).fail((res)=>{
		console.log("FAILED",res)
	})

	/*isVisable=function($Obj){
		let w=$(window),
		scrollT=w.scrollTop(),
		scrollL=w.scrollLeft(),
		offset=$Obj.offset(),
		x=offset.left,
		y=offset.top,
		objH=$Obj.height(),
		objW=$Obj.width(),
		winH=w.height(),
		winW=w.width();
		console.log("%s>=%s,%s<=%s,%s>=%s,%s<=%s",y+objH,scrollT,y,scrollT+winH,x+objW,scrollL,x,objW+scrollL)
		return y+objH>=scrollT &&
				y<=scrollT+winH &&
				x+objW>=scrollL&&
				x<=objW+scrollL&&
				$Obj.css("display")!="none";
	}*/
});