$(document).ready(function() {
  $("#groceryItems").submit(function(event) {

    var arrayItems = ["itemOne", "itemTwo", "itemThree", "itemFour", "itemFive"];

    arrayItems.forEach(function(arrayitem) {
      var userInput = $("input#" + arrayitem).val();
      $("#unordered").append("<li>" + userInput + "</li>");
    });

    $("#unordered").show();

    event.preventDefault();
  });
});
