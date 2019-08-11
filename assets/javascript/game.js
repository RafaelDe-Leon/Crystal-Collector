$(document).ready(function() {
  // global vars
  var wins = 0;
  var losses = 0;

  $(".wins-text").text("Wins: " + wins);
  $(".losses-text").text("Losses: " + losses);

  // array of images of gems i gathered
  var gemImages = [
    "assets/images/silver.png",
    "assets/images/red.png",
    "assets/images/green.png",
    "assets/images/blue.png"
  ];

  // assign random number to each gem with a function
  function gemValues() {
    for (var i = 0; i < gemImages.length; i++) {

      var image = $("<img>");
      image.addClass("gem-buttons gem gem-image");
      image.attr("src", gemImages[i]);
      image.attr("data-letter", Math.floor(Math.random() * 12) + 1);
      $("#gems").append(image);
    }

  }

  function playGame() {
    var counter = 0;
    $(".your-guess").text("Your points: " + counter);

    // generate random number
    var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    // and display it on the browser
    $(".number-to-guess").text("Number to guess: " + targetNumber);
    console.log(targetNumber);

    //when user clicks on gem
    $(".gem-buttons").on("click", function() {
      //assigns random number to each click

      gemIsClicked = true;
      var gemValue = ($(this).attr("data-letter"));
      gemValue = parseInt(gemValue);
      //Adds every click to global counter
      counter += gemValue;

      console.log(gemValue);
      console.log(counter);

      $(".your-guess").text("Your points: " + counter);

      if (counter === targetNumber) {
        alert("You win!");
        wins++;
        $(".wins-text").text("Wins: " + wins);
        $("#gems").empty();
        gemValues();
        playGame();

      } 
      
      else if (counter >= targetNumber) {
        alert("You lose!");
        losses++;
        $(".losses-text").text("Losses: " + losses);
        $("#gems").empty();
        gemValues();
        playGame();
      }
    });
  }

  gemValues();
  playGame();
});
// $("#numberGuess").text(targetNumber);

// // create a for loop to create a crystal for every number option
// for (var i = 0; i < numberOptions.length; i++) {
//   var imageCrystal = $("<img>");
//   // each Crystal will be given the class image-style
//   imageCrystal.addClass("image-style");

//   // each image will be given src link
//   imageCrystal.attr("src", "assets/images/silver.png");

//   // each image will given a data attribute called data-crystalValue
//   imageCrystal.attr("data-crystalvalue", numberOptions[i]);

// //   each image will with all its classes and attributes will be added to the page
// $("#silver").append(imageCrystal);

// }

// $(".image-style").on("click", function () {
//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt (crystalValue);

//     counter += crystalValue;

//     alert("New Score: " + counter);

//     if (counter === targetNumber) {
//         alert("You win!");
//     }

//     else if (counter >= targetNumber) {
//         alert("You lose!!");
//     }

// });
