$(function(){			
	$('.brand_img ul').children().click(function(){
		index = $(this).index()
		$(this).addClass('brand-style').siblings().removeClass('brand-style')
		run();
	})
	var index=0;
	var num=0;
	var a=0;
	$('.cir ul').children().click(function(){
		index = $(this).index()
		$('.brand_img ul').children().eq(index).addClass('brand-style').siblings().removeClass('brand-style')
		run();	
	})
	function run(){
		$('.word p').eq(index).addClass('word-style').siblings().removeClass('word-style')
		if(index==0){
			num=1
		}
		if(index==1){
			num=0
		}
		if(index==2){
			num=-1
		}
		var obj={
			left:200*num+'px'
		}
		$('.brand_img ul').animate(obj,600)
		$('.cir ul').children().eq(index).addClass('cir-style').siblings().removeClass('cir-style')
	}
	$('.tab-nav ul').children().hover(function(){
		$(this).find('a').css('color','#FAD000')
	},function(){
		if(a!= $(this).index()){
			$(this).find('a').css('color','#3E1909')
		}
	})
	$('.tab-nav ul').children().on('click',function(){
		a = $(this).index()
		$(this).addClass('nav-style').siblings().removeClass('nav-style')
		$(this).siblings().find('a').css('color','#3E1909')
		if(a==1){
			$('.tab').height('853px')
			var Height = $('.main').height()+500+'px';
	    	$('.main').css('height',Height)
		}else{
			$('.tab').height('352px')
			var Height = $('.main').height()-500+'px';
	    	$('.main').css('height',Height)
		}
		$('.nav-word').children().eq(a).show().siblings().hide()
	})

	$(':radio').change(function(){
	    console.log($('.tojoin-info').children())
	    $('.box').children().eq($(this).attr('value')).show().siblings().css('display','none');
	    if($(this).attr('value')==1){
	    	var Height = $('.main').height()+60+'px';
	    	$('.main').css('height',Height)
	    	// $()
	    }else{
	    	var Height = $('.main').height()-60+'px';
	    	$('.main').css('height',Height)
	    }
	})
	$('.tojoin-brand ul').children().click(function(){
		$(this).css('border-color','orange').siblings().css('border-color','#ccc')
	})
})