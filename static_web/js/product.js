		$(function(){
			$("body").parent().css("overflow-y","hidden")

			var num=0;
			var index=0;
			var Left=0;
			$('.product-one .right').find('.btn_right').click(function(){
				$('.btn_left').eq(index).css('pointer-events','auto')
				index = $('.btn_right').index($(this))
				Left=$('.produce_img ul').eq(index).position().left
				Left=-Left/750
				num=Left;
				num++;
				var obj = {
					left:-750*num+'px'
				}
				$('.produce_img ul').eq(index).animate(obj,500)		
				if($('.produce_img ul').eq(index).width()<=750*(num+1)){
					$('.btn_right').eq(index).css('pointer-events','none')
				}
			})
			$('.product-one .right').find('.btn_left').on('click',function(){
				$('.btn_right').eq(index).css('pointer-events','auto')

				num--;
				console.log(num)
				var obj = {
					left:-750*num+'px'
				}
				$('.produce_img ul').eq(index).animate(obj,500)
				if(num==0){
					$('.btn_left').eq(index).css('pointer-events','none')
				}

			})


		var x=-1;
		var aTop=0;

		$(window).bind('mousewheel', function(event,delta) {
	        loghandle(event, delta);
		})
		
		//鼠标滚轮监听事件
			

		var loghandle = function(event, delta){
			// console.log(delta)
			var dir =delta> 0 ? 'Up' : 'Down';
			if (dir == 'Up') {
					x--;
					if(x<=-1){
						$('html').stop()
						var obj={
							scrollTop: '0px'
						}
						$('html').animate(obj, 800);
						

						x=-1;
					}else{
						console.log(x)
						var obj={
							scrollTop: $('.product-one').eq(x).offset().top-120
						}
						$('html').animate(obj, 800);

					}
					
				}else{
					if(x>=5){
						$('html').stop()
						var obj={
							scrollTop: $('.footer').offset().top
						}
						$('html').animate(obj, 800);
						x=6;
					}else{
						x++;			
						var obj={
							scrollTop: $('.product-one').eq(x).offset().top-120
						}
						$('html').animate(obj, 800);
					}
				}
				$('.product-one').eq(x).find('.left :first-child()').animate({width:'300px'}, 800).animate({width:'200px'}, 800);
				$('.product-one').eq(x).find('.left p').css('opacity',0).animate({opacity:'1'}, 1600);
			return false;
		}	
		$('.trunTop').click(function(){
			x=-1;
		})
	})
		window.onload = function(){
			setTimeout(
				function(){
				$(window).scrollTop(0)
			},10);
		}