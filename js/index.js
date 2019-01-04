$(function(){
	$(window).on("resize",function(){
		//1.1获取窗口的宽度
		var clientW=$(window).width();
		//console.log(clientW);
		
		//1.2设置临界值
		var isShowBigImage=clientW>=800;
		//1.3获取所有的item
		var $allItems=$("#lk_carousel .item");
		
		//1.4遍历
		$allItems.each(function(index,item){
			//1.4.1取出图片的路径
			var src=isShowBigImage?$(item).data("lg-img"):$(item).data("sm-img");
			var imgUrl='url("'+src+'")';
			
			//1.4.2设置背景
			$(item).css({
				backgroundImage:imgUrl
			})
			//1.4.3设置img标签
			if(!isShowBigImage){
			var $img="<img src='"+src+"'>";
			$(item).empty().append($img);
			}else{
				$(item).empty();
			}
		})
	})
	
	//工具提示
  $('[data-toggle="tooltip"]').tooltip();
		//动态处理宽度
		$(window).on("resize",function(){
			var $ul=$("#lk_product .nav");
			var $allLis=$("[role='presentation']",$ul);
//			console.log($allLis);
			//遍历
			var totalW=0;
			$allLis.each(function(index,item){
				totalW+=$(item).width();
			})
//			console.log(totalW);
          var parentW=$ul.parent().width();
          //设置宽度
          if(totalW>parentW){
          	$ul.css({
          		width:totalW+"px"
          	})
          }else{
          	$ul.removeAttr("style");
          }
		})
		//导航处理
		var allLis=$("#lk_nav li");
		$(allLis[0]).on("click",function(){
			$("html,body").animate({ scrollTop: $("#lk_about").offset().top },1000);
		})
		$(allLis[1]).on("click",function(){
			$("html,body").animate({ scrollTop: $("#lk_product").offset().top },1000);
		})
		$(allLis[2]).on("click",function(){
			$("html,body").animate({ scrollTop: $("#lk_hot").offset().top },1000);
		})
		$(allLis[3]).on("click",function(){
			$("html,body").animate({ scrollTop: $("#lk_link").offset().top },1000);
		})
		$(allLis[4]).on("click",function(){
			$("html,body").animate({ scrollTop: $("#lk_footer").offset().top },1000);
		})
		$(window).trigger("resize");
})
