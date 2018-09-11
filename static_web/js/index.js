		$(function(){
			var index=0;
			$('.circle ul').children().eq(index).toggleClass('cir')
			$('.circle ul').children().eq(index).children().toggleClass('btn')
			var timer =  setInterval(run,3000)
			//导航栏固定
			$(window).scroll(function(){
				if($(this).scrollTop()>=$('.banner').height()-120){
					$('.nav').css({'position':'fixed','top':'0px'})
				}else{
					$('.nav').css({'position':'absolute','bottom':'0px','top':''})
				}
			})

			function run(){
				if($('.img').children().eq(index).next().length==0){
					$('.img').children().first().fadeTo(500,1);
					$('.img').children().last().fadeTo(500,0);
					index=0;
					$('.circle ul').children().eq(index).toggleClass('cir').siblings().removeClass('cir')
					$('.circle ul').children().eq(index).children().toggleClass('btn')
					$('.circle ul').children().last().children().toggleClass('btn')	
				}else{
					$('.img').children().eq(index).fadeTo(500,0).next().fadeTo(500,1)
					$('.circle ul').children().eq(index).next().toggleClass('cir').siblings().removeClass('cir')
					$('.circle ul').children().eq(index).next().children().toggleClass('btn')
					$('.circle ul').children().eq(index).children().toggleClass('btn')
					index++;
				}
			}
			$('.circle ul').children().on('click',function(){
				index = $(this).index()
				console.log(index)
				$('.img').children().eq(index).fadeTo(500,1).siblings().fadeTo(500,0)
				$('.circle ul').children().eq(index).addClass('cir').siblings().removeClass('cir')
				$('.circle ul').children().eq(index).siblings().children().removeClass('btn')
				$('.circle ul').children().eq(index).children().addClass('btn')
			})
			$('.banner_img').hover(function(){
				clearInterval(timer);
			},function(){
				timer =  setInterval(run,3000)
			})

			$('.warp').children().hover(function(){
				$(this).css('opacity','0.7')
			},function(){
				$(this).css('opacity','1')
			})
			
			//到达指定位置
			$('.arrow').click(function(){
				$('html').animate({scrollTop: $('.nav_menus').offset().top}, 800);
			}); 
			$('.nav_menus ul').eq(0).children().hover(function(){
				$(this).css('background','#F1C42B');
				$(this).children().css('color','#523528')
				if($(this).index()==0){
					$('.submenu').show()
				}
			},function(){
				$(this).css('background','');
				$('.submenu').hide()
				$(this).children().css('color','white')
			})

			$('.nav_menus ul').eq(1).children().hover(function(){
				$(this).css('background','rgba(250,214,85,0.6)');
			},function(){
				$(this).css('background','rgba(250,214,85,1)');
			})

			var index_img=0;
			var num=0;
			$('.produce_nav ul li').on('click',function(){
				$(this).addClass('click_style').siblings().removeClass('click_style')
				index_img = $(this).index();
				$('.produce_img').children().eq(index_img).css('display','block').siblings().css('display','none')
				num=0;
				$('.produce_img ul').eq(index_img).css('left','0px')
				$('.btn_right').css('visibility','visible')
				$('.btn_left').css('visibility','hidden')
				if($('.produce_img ul').eq(index_img).width()<=750){
					$('.btn_right').css('visibility','hidden')
				}
			})

			$('.produce_ex div').eq(0).on('click',function(){
				num--;
				console.log(num)
				var obj = {
					left:-750*num+'px'
				}
				$('.produce_img ul').eq(index_img).animate(obj,500)
				$('.btn_right').css('visibility','visible')

				if(num==0){
					$('.btn_left').css('visibility','hidden')
				}

			})
			
			$('.produce_ex div').eq(1).on('click',function(){
				num++;
				var obj = {
					left:-750*num+'px'
				}
				$('.produce_img ul').eq(index_img).animate(obj,500)
				if($('.produce_img ul').eq(index_img).width()<=750*(num+1)){
					$('.btn_right').css('visibility','hidden')
				}
				if(num>0){
					$('.btn_left').css('visibility','visible')
				}
			})
			$('.news_box ul').children().hover(function(){
				console.log('123')
				$(this).find('img').css('opacity','0.6')
			},function(){
				$(this).find('img').css('opacity','1')
			})

			var timer1

			//返回顶部
			$('.trunTop').click(function(){
				$('html').animate({scrollTop: '0px'}, 800);
			})

			function run1(){
				var obj = {
					top:'220px'
				}
				var obj1 = {
					top:'250px'
				}

				$('.welcome').fadeIn(500)
				$('img').eq(0).animate(obj,500).animate(obj1,500)
				timer1 = setInterval(function(){
					console.log('111')
					$('img').eq(0).animate(obj,500).animate(obj1,500)
				},1000)
				setTimeout(function(){
						clearInterval(timer1)
						$('.come').fadeOut(500)
						$('body').css('overflow','auto')
				},2000)
				
			}
			
			$('.welcome').click(function(){

				clearInterval(timer1)
				$('.come').fadeOut(500)
				$('body').css('overflow','auto')
				$('.welcome').css('display','none')
				$('img').eq(0).css('display','none')
			})
			$('.message').find('a').hover(function(){
				$(this).css('opacity','0.7')
			},function(){
				$(this).css('opacity','1')
			})
			var aTop;

		$('.news_box ul').children().click(function(){
			console.log('111')
			var Height=$(window).outerHeight()+'px'
			var Top=$(window).scrollTop()+'px'
			$('.flow').css({'height':Height,'top':Top})
			$('.flow').fadeIn(500)
			$('.flow-row').eq($(this).index()).fadeIn()
			$('.flow-row').eq($(this).index()).find('.box').children().addClass('move1').siblings().removeClass('move1')
			$("body").parent().css("overflow-y","hidden")
		})

		window.onload = function(){
			setTimeout(
				function(){
				$(window).scrollTop(0)
			},10);
			run1()
		}
	})



