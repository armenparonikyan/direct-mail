const check = function(){
	let w = window.innerWidth;
	let h = window.innerHeight;
	if(w <= 1000){
		$(".links").addClass('invisible');
		$(".menu-icon").removeClass('invisible');
	}else{
		$(".links").removeClass('invisible');
		$(".menu-icon").addClass('invisible');
	}
	if(w<=700){
		$('.offers').addClass('invisible');
		$('.offers_small').removeClass('invisible');
		$('#main-text').removeClass('main-text').addClass('small-text');
		$('.effort_text').removeClass('effort_text').addClass('effort_text_sm');
		$('.big_button1').css('font-size','13px');
		$('.pink_button').css('font-size','13px');

	}else{
		$('.offers_small').addClass('invisible');
		$('.offers').removeClass('invisible');
		$('#main-text').addClass('main-text').removeClass('small-text');
		$('.effort_text_sm').addClass('effort_text').removeClass('effort_text_sm');
		$('.big_button1').css('font-size','28px');
		$('.pink_button').css('font-size','29px');
	}
}
check();
$(window).resize(()=>{
	check();
});