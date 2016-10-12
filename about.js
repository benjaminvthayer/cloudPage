$(document).ready(function(){
	alert("Click in text areas to show/hide text");
	
	var isShown = true;
	$("#bitAboutUs").click(function(){
		if(isShown){
			$("#bitAboutUsText").slideUp();
			isShown = false;
			}
		else{
			$("#bitAboutUsText").slideDown();
			isShown = true;
			}	
	});
	
	
	var isShown2 = true;
	$("#bitAboutUs2").click(function(){
		if(isShown2){
			$("#bitAboutUsText2").slideUp();
			isShown2 = false;
			}
		else{
			$("#bitAboutUsText2").slideDown();
			isShown2 = true;
			}	
	});
	
	
	var isShown3 = true;
	$("#bitAboutUs3").click(function(){
		if(isShown3){
			$("#bitAboutUsText3").slideUp();
			isShown3 = false;
			}
		else{
			$("#bitAboutUsText3").slideDown();
			isShown3 = true;
			}	
	});
	
});

