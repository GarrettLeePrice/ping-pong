var outputNums = [];

function pingPong(number) {
for (var i = 1; i <= number; i++) {
  if (i % 3 === 0) {
    outputNums.push("ping");
  } else if (i % 5 === 0) {
    outputNums.push("pong");
  } else if (i % 3 ===0 && i % 5 === 0) {
    outputNums.push("ping pong");
  } else {outputNums.push(i);
  };
};
  for (var i = 0; i < outputNums.length; i++) {
    $("ul").append("<li>" + outputNums[i] + "</li>");
  }
};




$(document).ready(function() {
  $("#form").submit(function(event) {
  var input = $("#input").val();
  pingPong(input);
  event.preventDefault();
  });
});
