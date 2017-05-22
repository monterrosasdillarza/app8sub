// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		
		$('#izquierda').on("swipeleft",function(){
		navigator.notification.alert("deslizo a la izquierda",function(){"aplicacion7","Aceptar"});
});

$('#derecha').on("swiperight",function(){
		navigator.notification.confirm("que quieres hacer",function(opt){
			switch(opt)
			{
				case 1:
				navigator.notification.beep(1);
				break;
				
				case 2:
				navigator.notification.vibrate(1000);
				break;
			}
		},"aplicacion7","beep,vibrar,cancelar");
		
});
        },false);
});