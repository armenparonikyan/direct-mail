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
	if(w<=500){
		$('#main-text').removeClass('main-text').addClass('small-text');
	}else{
		$('#main-text').addClass('main-text').removeClass('small-text');
	}
	if(w<=700){
		$('.offers').addClass('invisible');
		$('.offers_small').removeClass('invisible');
	}else{
		$('.offers_small').addClass('invisible');
		$('.offers').removeClass('invisible')
	}
});