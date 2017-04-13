$(window).resize(()=>{
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

	}else{
		$('.offers_small').addClass('invisible');
		$('.offers').removeClass('invisible');
		$('#main-text').addClass('main-text').removeClass('small-text');
		$('.effort_text_sm').addClass('effort_text').removeClass('effort_text_sm');
	}
});