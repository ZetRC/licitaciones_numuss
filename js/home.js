var home = (function() {	
		
	var initProperties = function() {
        functions.handleSidebar()
	};
	
	var functions = {	
        handleSidebar : function(){
            $('.sidebar-element').click(function(){
                //cambia la seccion actual
                const target = $(this).attr('data-target')
                $('.body-section').removeClass('d-block').addClass('d-none')
                $(target).removeClass('d-none').addClass('d-block')
                //cambia color del elemento de sidebar seleccionado
                $('.sidebar-element').removeClass("selected-item")
                $(this).addClass("selected-item")
              })
    
              $('#toggle-sidebar').click(function(){
                $("#sidebar").animate({width:'toggle'},100);  
              })
    
              $("#perfil-selector").click(function(){
                const target = $(this).attr('data-target')
                $('.body-section').removeClass('d-block').addClass('d-none')
                $(target).removeClass('d-none').addClass('d-block')
                console.log(target)
            })
        },
	};
	
	var initialize = function() {
		initProperties();
	};


	return {
		init : initialize,
	}
	
})();


$(document).ready(function () {
	home.init();
});


