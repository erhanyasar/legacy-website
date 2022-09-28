$(document).ready(function() {

    var items = [];    
    
    $.getJSON( "data.json", function( data ) {
      $.each( data, function( key, val ) {
        items.push( "<li><img src='" + val.picture + "' /></li>" );
      });
      $( "<ul>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );
    });

});