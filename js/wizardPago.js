var wizardPago = (function() {	
		
	var initProperties = function() {
         functions.handlePlans();
		 functions.handleWizard();
	};
	
	var functions = {	
        handlePlans : function(){
			//inicio de planes
			$('.plans-container').slick({
				dots: true,
				infinite: true,
				speed: 300,
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
							dots: true
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 480,
						settings: {
					  slidesToShow: 1,
					  slidesToScroll: 1
					}
				}
			]
			});
			//para caja de pagos en landing
            $(".payment-option").click(function(){
                $(this).parent().find('.selected-option').removeClass('selected-option')
                $(this).addClass('selected-option')
                $('.box-option').removeClass('selected-box')
				const contentToShow = $(this).attr('data-show')
				$(contentToShow).addClass('selected-box')
            });
        },
		handleWizard : function(){
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
				$('.plans-container').slick('refresh');
            });
            $(".prev-step").click(function (e) {
                var active = $(this).closest('.wizard').find('.nav-tabs li.active');
                prevTab(active);
				$('.plans-container').slick('refresh');
            });
			function nextTab(elem) {
				$(elem).next().find('a[data-toggle="tab"]').click();
			}
			function prevTab(elem) {
				$(elem).prev().find('a[data-toggle="tab"]').click();
			}
			$('.nav-tabs').on('click', 'li', function() {
				$(this).closest('.nav-tabs').find('li.active').removeClass('active');
				$(this).addClass('active');
			});
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
	wizardPago.init();
});
