$(function(){

	var state = true;
	var titleHeader = $('h1');

     titleHeader.on( "click", function() {
      if ( state ) {
        $( "h1" ).css({
          
          color: "#000",
          
        });
      } else {
        $( "h1" ).css({
          
          color: "#aa0000",
          
        });
      }
      state = !state;
    });


	$('p').not("aside p").text(function () {
	    	return $(this).text().replace("Bacon", "harambe"); 
	});

	 $("h5:odd").hide();

	 $("aside img").remove();

	 $(".post:last-of-type").remove();
	 $(".post:last-of-type").remove();

  })
