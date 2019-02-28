$(document).ready(function () {


  var targetValue;
  //randomize number to 19-120 for the user to "#random-number"


  targetValue = Math.floor(Math.random() * 101) + 19;
  $("#random-number").text(targetValue);


  //----------------------------------------------
  var scoreCount = 0;
  var wins = 0;
  var losses = 0;
  $("#score-total").html(scoreCount);


  myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var randomItem1 = myArray[Math.floor(Math.random() * myArray.length)];
  var randomItem2 = myArray[Math.floor(Math.random() * myArray.length)];
  var randomItem3 = myArray[Math.floor(Math.random() * myArray.length)];
  var randomItem4 = myArray[Math.floor(Math.random() * myArray.length)];




  //use a function to add numbers to each crystal variable
  //make a click event for every crystal

  $("#rocks").on("click", function () {
    scoreCount += randomItem1;
    $("#score-total").html(scoreCount);
    checkGame();
  });

  $("#rocks1").on("click", function () {
    scoreCount += randomItem2;
    $("#score-total").html(scoreCount);
    checkGame();
  });

  $("#rocks2").on("click", function () {
    scoreCount += randomItem3;
    $("#score-total").html(scoreCount);
    checkGame();
  });

  $("#rocks3").on("click", function () {
    scoreCount += randomItem4;
    $("#score-total").html(scoreCount);
    checkGame();

  });

  //function for wins and losses

  function win() {
    alert("You won!");
    wins++;
    $("#wins").html(wins);
  }

  function loss() {
    alert("You lost, try again.");
    losses++;
    $("#losses").html(losses);
  }

  $("#losses").html(losses);
  $("#wins").html(wins);

  //if statements from wins and losses
  function checkGame() {
    if (scoreCount == targetValue) {
      win();
      resetGame();

    }
    else if (scoreCount > targetValue) {
      loss();
      resetGame();

    }

    //resest game
    function resetGame() {
      scoreCount = 0;
      $("#score-total").html(scoreCount);
      targetValue = Math.floor(Math.random() * 101) + 19;
      $("#random-number").text(targetValue);
      randomItem1 = myArray[Math.floor(Math.random() * myArray.length)];
      randomItem2 = myArray[Math.floor(Math.random() * myArray.length)];
      randomItem3 = myArray[Math.floor(Math.random() * myArray.length)];
      randomItem4 = myArray[Math.floor(Math.random() * myArray.length)];
    }

  }






});










