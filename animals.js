  $(document).ready(function(){


  $("button").click(function() {
    var animalLow = $("#animal").val();
    var animalChoice = animalLow.toLowerCase();

    if (animalChoice === "lion") {
      $("#lion").show();
      if ($("#snake").is(":visible") || $("#turtle").is(":visible")){
        $("#snake").hide() && $("#turtle").hide();
      }
    }
    else if (animalChoice === "snake") {
      $("#snake").show();
      if ($("#lion").is(":visible") || $("#turtle").is(":visible")){
        $("#lion").hide() && $("#turtle").hide();
    }
  }
    else if (animalChoice === "turtle") {
      $("#turtle").show();
      if ($("#snake").is(":visible") || $("#lion").is(":visible")){
        $("#snake").hide() && $("#lion").hide();
    }
  }
    else if ((animalChoice != "lion")|| (animalChoice != "turtle") || (animalChoice != "snake")) {
      alert("Please enter either Lion, Snake, or Turtle.");
    }
  });
  });
