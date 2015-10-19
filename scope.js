$(document).ready(function() {

  var whatToSay = "Hello!";

  $("div#click-one").click(function(event) {
    alert(whatToSay);
  });

  $("div#click-two").click(function(event) {
    alert(whatToSay);
  });
});
