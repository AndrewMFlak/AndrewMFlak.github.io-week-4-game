
$(document).ready(function () {

    var randomNumber = Math.floor(Math.random() * 100 + 20)
    // will generate a random number between 20 and 120
    $('#randomNumber').text(randomNumber);
    // commits random number var to Id randomNumber

    var one = Math.floor(Math.random() * 11 + 1)
    var two = Math.floor(Math.random() * 11 + 1)
    var three = Math.floor(Math.random() * 11 + 1)
    var four = Math.floor(Math.random() * 11 + 1)
    // variable declared to generate random number between 1 - 20

    var yourScore = 0;
    var wins = 0;
    var losses = 0;
    // variables declared for numberic values on page (user score, wins, losses)
    $('wins').text(wins);
    $('losses').text(losses);
    // wins and losses buttons updated
    function reset() {
        randomNumber = Math.floor(Math.random() * 100 + 20)
        console.log(randomNumber)
        $('#randomNumber').text(randomNumber);
        one = Math.floor(Math.random() * 11 + 1);
        two = Math.floor(Math.random() * 11 + 1);
        three = Math.floor(Math.random() * 11 + 1);
        four = Math.floor(Math.random() * 11 + 1);
        yourScore = 0;
        $('finalScore').text(youScore);
    }
    function fYes() {
        alert("You Won!!!!");
        wins++;
        $("#wins").text(wins);
        reset();
        // incremental increase in wins
    }

    function fNo() {
        alert("You Lose!!!!");
        losses++;
        $("#losses").text(wins);
        reset();
    }

    $('#one').on('click', function () {
        yourScore = yourScore + one;
        console.log("Updated User Score = " + yourScore);
        $('#yourScore').text(yourScore);
        if (yourScore == randomNumber) {
            fYes();
        }
        else if (yourScore > randomNumber) {
            fNo();
        }
    });
    $('#two').on('click', function () {
        yourScore = yourScore + two;
        console.log("Updated User Score = " + yourScore);
        $('#yourScore').text(yourScore);
        if (yourScore == randomNumber) {
            fYes();
        }
        else if (yourScore > randomNumber) {
            fNo();
        }
    })
    $('#three').on('click', function () {
        yourScore = yourScore + three;
        console.log("Updated User Score = " + yourScore);
        $('#yourScore').text(yourScore);
        if (yourScore == randomNumber) {
            fYes();
        }
        else if (yourScore > randomNumber) {
            fNo();
        }
    })
    $('#four').on('click', function() {
        yourScore = yourScore + four;
        console.log("Updated User Score " + yourScore);
        $('#yourScore').text(yourScore);
        if (yourScore == randomNumber) {
            fYes();
        }
        else if (yourScore > randomNumber) {
            fNo();
        }
    
    })

});
