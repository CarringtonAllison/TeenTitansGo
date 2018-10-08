$("document").ready(function () {
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var randomHighNumber = Math.floor(Math.random() * 120) + 19;

    var crystal1 = Math.floor(Math.random() * 12) + 1;
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    var crystal4 = Math.floor(Math.random() * 12) + 1;
    var crystal5 = Math.floor(Math.random() * 12) + 1;

    // console.log(crystal1)
    // console.log(crystal2)
    // console.log(crystal3)
    // console.log(crystal4)
    // console.log(crystal5)

    function reset() {
        totalScore = 0;
        randomHighNumber = Math.floor(Math.random() * 120) + 19;
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
        crystal5 = Math.floor(Math.random() * 12) + 1;
        $("#computer-random-text").html(randomHighNumber)
        $("#total-score-text").html(totalScore)
    }

    function start() {
        totalScore = 0;
        randomHighNumber = Math.floor(Math.random() * 120) + 19;
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
        crystal5 = Math.floor(Math.random() * 12) + 1;
        $("#computer-random-text").html(randomHighNumber);
        $("#total-score-text").html(totalScore)




        // adds value attribute with a random number to each crystal
        $("#crystal-1").attr("value", crystal1)
        $("#crystal-2").attr("value", crystal2)
        $("#crystal-3").attr("value", crystal3)
        $("#crystal-4").attr("value", crystal4)
        $("#crystal-5").attr("value", crystal5)


        // when crystal is clicked on it saves value to crystal and then adds to totalScore
        $(".crystal").on("click", function () {
            $("#total-score-text").html(totalScore);
            savedNumber = parseInt($(this).attr("value"));
            totalScore += savedNumber;
            console.log($(this).attr("value"));
            console.log(totalScore);
            
            
            // logic for wins and losses
            if (totalScore === randomHighNumber) {
                wins++;
                $("#wins-text").html(wins);
                reset();
            } else if (totalScore > randomHighNumber) {
                losses++;
                $("#losses-text").html(losses);
                reset();
            }
        });


    }

    start();

});








    // function randomLowNumber() {
    //     return Math.floor(Math.random() * 12) + 1;
    // }



    // $(".crystal").attr().on("click", function () {

    //     console.log(randomLowNumber())

    // });




    // // linking the HTML ID's and updating their text content
    // document.getElementById("wins-text").textContent = wins;
    // document.getElementById("losses-text").textContent = losses;
    // document.getElementById("total-score-text").textContent = totalScore;
    // document.getElementById("computer-random-text").textContent = randomHighNumber;

// function add (first, second, third, fourth){
//     return first+second+third+fourth;
// }