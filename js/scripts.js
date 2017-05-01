$(document).ready(function() {
  $("#groceryItems").submit(function(event) {

    var arrayItems = ["itemOne", "itemTwo", "itemThree", "itemFour", "itemFive"];


    var newArrayItems = arrayItems.map(function(arrayItem) {
      return $("input#" + arrayItem).val().toUpperCase();

    });
    newArrayItems.sort();

    newArrayItems.forEach(function(newArrayItem) {
      $("#unordered").append("<li>" + newArrayItem + "</li>");
    });


    $("#unordered").show();

    event.preventDefault();
  });
});
