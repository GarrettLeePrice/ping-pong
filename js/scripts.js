var outputNums = [];

function pongping(number) {

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
  outputNums = outputNums.join(" ");
};

$(document).ready(function() {
  $("form#form").submit(function(event) {
  var input = $("#input").val();

pongping(input);

$("#output").append("<li>" + outputNums + "</li>");
  event.preventDefault();
  });
});
