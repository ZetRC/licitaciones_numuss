var home = (function() {	
		
	var initProperties = function() {
        functions.handleSidebar()
        functions.handleToggleableTables()
        functions.handleCustomInputFile()
        functions.handleCustomTables()
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
        handleToggleableTables : function(){
            $(".toggleable-item").click(function(){
                $(this).parent().find(".active-item").removeClass("active-item");
                $(this).addClass("active-item");
                $(this).closest(".toggleable-box").find(".active-option").removeClass("active-option");
                const sectionToShow = $(this).attr("data-target");
                $(sectionToShow).addClass("active-option");
                
            });
        },
        handleCustomInputFile : function(){
          var fileInput = document.querySelector('.form-input-file');
          var fileInputText = document.querySelector('.form-input--file-text');
          fileInputTextContent = fileInputText.textContent;

          fileInput.addEventListener('change', function(e) {
            var value = e.target.value.length > 0 ? e.target.value : fileInputTextContent;
            
            fileInputText.textContent = value.replace('C:\\fakepath\\', '');
          });
        },
        handleCustomTables : function(){
          $('.custom-datatable').DataTable();
        }
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


