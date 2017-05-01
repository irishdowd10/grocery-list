$(document).ready(function() {
  $("#groceryItems").submit(function(event) {
    debugger;
    var arrayItems = ["itemOne", "itemTwo", "itemThree", "itemFour", "itemFive"];
    console.log(11);

    var newArrayItems = arrayItems.map(function(arrayItem) {
      return $("input#" + arrayItem).val().toUpperCase();

    });
    newArrayItems.sort();
    console.log(10);
    newArrayItems.forEach(function(newArrayItem) {
      $("#unordered").append("<li>" + newArrayItem + "</li>");
    });
    console.log(12);


    $("#unordered").show();

    event.preventDefault();
  });
});
