$(document).ready(function() {
  $("form").submit(function(event) {
 

  var groceries = [];
  groceries.push($("#grocery1").val());
  groceries.push($("#grocery2").val());
  groceries.push($("#grocery3").val());
  
  console.log(groceries);

  var userInputUpperCases = groceries.map(function(grocery) {
    return grocery.toUpperCase();
  
  });

  $("#userOutput").append("<li>" + userInputUpperCases[0] + "</li>");
  $("#userOutput").append("<li>" + userInputUpperCases[1] + "</li>");
  $("#userOutput").append("<li>" + userInputUpperCases[2] + "</li>");
  event.preventDefault();  
  
  });
});