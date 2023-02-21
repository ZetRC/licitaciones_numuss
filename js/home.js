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

          function format(d) {
            // `d` is the original data object for the row
            return (
                '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
                '<tr>' +
                '<td>Full name:</td>' +
                '<td>' +
                d.name +
                '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Extension number:</td>' +
                '<td>' +
                d.extn +
                '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Extra info:</td>' +
                '<td>And any further details here (images etc)...</td>' +
                '</tr>' +
                '</table>'
            );
          }
        
          var table = $('#example').DataTable({
            //ajax: '../ajax/data/objects.txt',
            ajax: '../ajax/objects.txt',
            columns: [ 
                {
                    className: 'dt-control',
                    orderable: false,
                    data: null,
                    defaultContent: '<i class="fa-solid fa-plus btn btn-main p-2 cursor-pointer rounded-full"></i>',
                },
                { data: 'name' },
                { data: 'position' },
                { data: 'office' },
                { data: 'salary' },
            ],
            order: [[1, 'asc']],
          });

          // Add event listener for opening and closing details
            $('#example tbody').on('click', 'td.dt-control', function () {
              var tr = $(this).closest('tr');
              var row = table.row(tr);

              if (row.child.isShown()) {
                  // This row is already open - close it
                  row.child.hide();
                  tr.removeClass('shown');
              } else {
                  // Open this row
                  row.child(format(row.data())).show();
                  tr.addClass('shown');
              }
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
	home.init();
});


