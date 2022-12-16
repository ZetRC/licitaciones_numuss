var registration = (function() {	
		
	var initProperties = function() {
         functions.handleWizard();
         functions.handleFade();
	};
	
	var functions = {	
        handleWizard : function(){
            $('.nav-tabs > li a[title]').tooltip();
            
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

                var target = $(e.target);
            
                if (target.parent().hasClass('disabled')) {
                    return false;
                }
            });

            $(".next-step").click(function (e) {
                var active = $(this).closest('.wizard').find('.nav-tabs li.active');
                active.next().removeClass('disabled');
                nextTab(active);

            });
            $(".prev-step").click(function (e) {

                var active = $(this).closest('.wizard').find('.nav-tabs li.active');
                prevTab(active);

            });

        function nextTab(elem) {
            $(elem).next().find('a[data-toggle="tab"]').click();
        }
        function prevTab(elem) {
            $(elem).prev().find('a[data-toggle="tab"]').click();
        }


        $('.nav-tabs').on('click', 'li', function() {
            $(this).closest('.nav-tabs').find('li.active').removeClass('active');
            //$('.nav-tabs li.active').removeClass('active');
            $(this).addClass('active');
        });
        },

        handleFade : function(){
            $('.toggle-content').click(()=>{
                $('.selection-box').fadeOut(200)
            })

            $('#provedor-selector').click(()=>{
                $('#formularioProvedor').delay(200).fadeIn(200)
            })

            $('#licitador-selector').click(()=>{
                $('#formularioLicitador').delay(200).fadeIn(200)
            })

            $('.back-selection').click(()=>{
                $(".selection-box").delay(200).fadeIn(200)
                $('#formularioProvedor').fadeOut(200)
                $('#formularioLicitador').fadeOut(200)
                
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
	registration.init();
});
