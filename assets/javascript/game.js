$("document").ready(function () {
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var villainHighNumber = Math.floor(Math.random() * 120) + 19;

    function reset() {
        totalScore = 0;
        villainHighNumber = Math.floor(Math.random() * 120) + 19;
        titan1 = Math.floor(Math.random() * 12) + 1;
        titan2 = Math.floor(Math.random() * 12) + 1;
        titan3 = Math.floor(Math.random() * 12) + 1;
        titan4 = Math.floor(Math.random() * 12) + 1;
        titan5 = Math.floor(Math.random() * 12) + 1;
        $("#villain-random-text").html(villainHighNumber)
        $("#total-score-text").html(totalScore)
        $("#titan-1").attr("value", titan1)
        $("#titan-2").attr("value", titan2)
        $("#titan-3").attr("value", titan3)
        $("#titan-4").attr("value", titan4)
        $("#titan-5").attr("value", titan5)
    }

    function start() {
        totalScore = 0;
        villainHighNumber = Math.floor(Math.random() * 120) + 19;
        titan1 = Math.floor(Math.random() * 12) + 1;
        titan2 = Math.floor(Math.random() * 12) + 1;
        titan3 = Math.floor(Math.random() * 12) + 1;
        titan4 = Math.floor(Math.random() * 12) + 1;
        titan5 = Math.floor(Math.random() * 12) + 1;
        $("#villain-random-text").html(villainHighNumber);
        $("#total-score-text").html(totalScore)

        // adds value attribute with a random number to each titan
        $("#titan-1").attr("value", titan1)
        $("#titan-2").attr("value", titan2)
        $("#titan-3").attr("value", titan3)
        $("#titan-4").attr("value", titan4)
        $("#titan-5").attr("value", titan5)

        // when titan is clicked on it saves value to titan and then adds to totalScore
        $(".titan").on("click", function () {
            console.log($(this).attr("value"));
            savedNumber = parseInt($(this).attr("value"));
            totalScore += savedNumber;
            console.log(totalScore);
            $("#total-score-text").html(totalScore);


            // logic for wins and losses
            if (totalScore === villainHighNumber) {
                wins++;
                $("#wins-text").html(wins);
                reset();
            } else if (totalScore > villainHighNumber) {
                losses++;
                $("#losses-text").html(losses);
                reset();
            }
        });
    }
    start();
});







// var titan1 = Math.floor(Math.random() * 12) + 1;
// var titan2 = Math.floor(Math.random() * 12) + 1;
// var titan3 = Math.floor(Math.random() * 12) + 1;
// var titan4 = Math.floor(Math.random() * 12) + 1;
// var titan5 = Math.floor(Math.random() * 12) + 1;

// console.log(titan1)
// console.log(titan2)
// console.log(titan3)
// console.log(titan4)
// console.log(titan5)

// function randomLowNumber() {
    //     return Math.floor(Math.random() * 12) + 1;
    // }



    // $(".titan").attr().on("click", function () {

        //     console.log(randomLowNumber())

    // });




    // // linking the HTML ID's and updating their text content
    // document.getElementById("wins-text").textContent = wins;
    // document.getElementById("losses-text").textContent = losses;
    // document.getElementById("total-score-text").textContent = totalScore;
    // document.getElementById("villain-random-text").textContent = villainHighNumber;

// function add (first, second, third, fourth){
//     return first+second+third+fourth;
// }