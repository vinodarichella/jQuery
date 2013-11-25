$(document).ready(function() {
  $("#testbutton").click(function() {
    $("div").css("background-color","red");

  });

  $( window ).resize(function() {
  $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
});
  
});