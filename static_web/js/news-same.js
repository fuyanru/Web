	var bTop=0;
	var a;
	var b;
	var page;
	$('.colse').click(function(){
		$('.move1').css('top','0px')
		$('.bottom .left').css('bottom','0px')
		$('.flow').fadeOut(500)
		$('.flow-row').fadeOut(500)
		$('body').parent().css("overflow-y","visible")
		$('.flow-row').find('.box').children().removeClass('move1')
		bTop=0;
	})
	
	//鼠标按住滑动条实现滑动
	$('.box').children().bind('mousedown',function(e){
		aTop= $(this).position().top;
		a= e.pageY;
		$('.box').bind('mousemove',function(e){
				var H=$('.move1').position().top
				if(H<0){
					$('.move1').css('top','0px')
					$('.box').unbind()
				}else if(H>$('.bottom').find('.box').height()-$('.move1').height()){
					$('.move1').css('top','60px')
					$('.box').unbind()
				}else{
					b= e.pageY;
					page=aTop+b-a;
					$('.move1').css('top',page+'px')
					$('.bottom .left').css('bottom',page+'px')

				}	
		})
	})

	$('.box').children().mouseup(function(){
		$('.box').unbind()
		aTop= $(this).position().top;
		bTop=-aTop;
	})

	$('.box').children().mouseleave(function(){
		$('.box').unbind()
	})

	//文档滑动事件
	$('.bottom').bind('mousewheel', function(event,delta) {
        loghandle(event, delta);
        if($('.move1').position().top<0){
        	bTop=0;
			$('.move1').css('top','0px')
			$('.bottom').find('.left').css('bottom','0px')
		}else if($('.move1').position().top>$('.bottom').find('.box').height()-$('.move1').height()){
			bTop=-60;
			$('.move1').css('top','60px')
			$('.bottom').find('.left').css('bottom','60px')
		}
	})

	//鼠标滚轮监听事件
	var loghandle = function(event, delta){
		console.log(delta)
		var dir =delta> 0 ? 'Up' : 'Down';
		if (dir == 'Up') {
				bTop+=10
				console.log(bTop)
				$('.bottom').find('.left').css('bottom',-bTop+'px')
				$('.bottom').find('.move1').css('top',-bTop+'px')

			}else{
				bTop-=10
				console.log(bTop)
				$('.bottom').find('.left').css('bottom',-bTop+'px')
				$('.bottom').find('.move1').css('top',-bTop+'px')
			}
		return false;
	}