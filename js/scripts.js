function pingPong(number) {
  var outputNums = [];
  for (var i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      outputNums.push("ping pong");
    } else if (i % 3 === 0) {
      outputNums.push("ping");
    } else if (i % 5 === 0) {
      outputNums.push("pong");
    } else outputNums.push(i);
  }
  return outputNums;
}
$(document).ready(function() {
  $("form").submit(function(event) {
    $("ul").empty();
    var input = $("#input").val();
    if (input) {
      var outputNums = pingPong(input)
      for (var i = 0; i < outputNums.length; i++) {
        $("ul").append("<li>" + outputNums[i] + "</li>");
      }
      event.preventDefault();
    };
  });
});
