let header = document.querySelector(".heading")
let header3 = document.querySelector(".heading3")
let header4 = document.querySelector(".heading4")
let inputone = document.querySelector(".inputone")
let buttonone = document.querySelector(".btnone")
let inputtwo = document.querySelector(".inputtwo")
let inputthree = document.querySelector(".inputthree")
let inputfour = document.querySelector(".inputfour")
let buttontwo = document.querySelector(".btntwo")
let buttonthree = document.querySelector(".btnthree")
let buttonfour = document.querySelector(".btnfour")
let error = document.querySelector(".error")
let chance = document.querySelector("h2")
let span = document.querySelector("span")
let img = document.querySelector("img")
let crying = document.querySelector(".crying")
let reset = document.querySelector(".reset")
let allbody = document.querySelector(".number-guess")

let playerOneNumber;
let count = 5;

buttonone.addEventListener("click", function () {
    if (inputone.value == "") {
        error.style.color = "red"
        error.innerHTML = "Please give a number"
    } else {
        if (Number(inputone.value)) {
            if (Number(inputone.value) >= 1 && Number(inputone.value) <= 10) {
                playerOneNumber = inputone.value;
                error.innerHTML = ""
                header.innerHTML = "Player-2"
                span.innerHTML = count;
                chance.style.display = "block"
                displaycontrol("p2bp1n");
            } else {
                error.style.color = "red"
                error.innerHTML = "Please give a number between 1 to 10"
            }
        } else {
            error.style.color = "red"
            error.innerHTML = "Please give a number"
        };
    };
});


buttontwo.addEventListener("click", function () {
    if (count > 0) {

        if (inputtwo.value == "") {
            error.style.color = "red"
            error.innerHTML = "Please give a number"
        } else {
            if (Number(inputtwo.value)) {

                if (Number(inputtwo.value) >= 1 && Number(inputtwo.value) <= 10) {
                    error.innerHTML = ""
                    count--
                    span.innerHTML = count;
                    if (playerOneNumber == inputtwo.value) {
                        error.innerHTML = ""
                        header.innerHTML = "Player-3"
                        span.innerHTML = count = 5;
                        chance.style.display = "block"
                        displaycontrol("p3bp2n");
                    } else if (count == 0) {
                        error.innerHTML = ""
                        header.innerHTML = "Player-3"
                        span.innerHTML = count = 5;
                        chance.style.display = "block"
                        displaycontrol("p3bp2n");
                    }
                } else {
                    error.style.color = "red"
                    error.innerHTML = "Please give a number between 1 to 10"
                }
            } else {
                error.style.color = "red"
                error.innerHTML = "Please give a number"
            }
        }
    } else {
        chance.innerHTML = "Game is Over"
    }

});


buttonthree.addEventListener("click", function () {
    span.innerHTML = count;
    if (count > 0) {

        if (inputthree.value == "") {
            error.style.color = "red"
            error.innerHTML = "Please give a number"
        } else {
            if (Number(inputthree.value)) {

                if (Number(inputthree.value) >= 1 && Number(inputthree.value) <= 10) {
                    error.innerHTML = ""
                    count--
                    span.innerHTML = count;
                    if (playerOneNumber == inputthree.value) {
                        error.innerHTML = ""
                        header.innerHTML = "Player-4"
                        span.innerHTML = count = 5;
                        chance.style.display = "block"
                        displaycontrol("p4bp2n");
                    } else if (count == 0) {
                        error.innerHTML = ""
                        header.innerHTML = "Player-4"
                        span.innerHTML = count = 5;
                        chance.style.display = "block"
                        displaycontrol("p4bp2n");
                    }
                } else {
                    error.style.color = "red"
                    error.innerHTML = "Please give a number between 1 to 10"
                }
            } else {
                error.style.color = "red"
                error.innerHTML = "Please give a number"
            }
        }
    } else {
        chance.innerHTML = "Game is Over"
    }

});

buttonfour.addEventListener("click", function () {

    if (count > 0) {
        console.log(count)
        if (inputfour.value == "") {
            error.style.color = "red"
            error.innerHTML = "Please give a number"
        } else {
            if (Number(inputfour.value)) {

                if (Number(inputfour.value) >= 1 && Number(inputfour.value) <= 10) {
                    error.innerHTML = ""
                    count--
                    span.innerHTML = count;
                    if (playerOneNumber == inputfour.value && playerOneNumber == inputtwo.value && playerOneNumber == inputthree.value) {
                        header.innerHTML = "Player 2 Winner"
                        //header3.style.display = "block"
                        //header4.style.display = "block"
                        header3.innerHTML = "Player 3 Winner"
                        header4.innerHTML = "Player 4 Winner"
                        img.style.display = "block"
                        chance.style.display = "none"
                        displaycontrol("all");
                    } else if (playerOneNumber == inputfour.value && playerOneNumber != inputtwo.value && playerOneNumber == inputthree.value) {
                        header.innerHTML = "Player 2 Loser"
                        //header3.style.display = "block"
                        //header4.style.display = "block"
                        header3.innerHTML = "Player 3 Winner"
                        header4.innerHTML = "Player 4 Winner"
                        img.style.display = "block"
                        chance.style.display = "none"
                        displaycontrol("all");

                    } else if (playerOneNumber == inputfour.value && playerOneNumber == inputtwo.value && playerOneNumber != inputthree.value) {
                        header.innerHTML = "Player 2 Winner"
                        //header3.style.display = "block"
                        //header4.style.display = "block"
                        header3.innerHTML = "Player 3 Loser"
                        header4.innerHTML = "Player 4 Winner"
                        img.style.display = "block"
                        chance.style.display = "none"
                        displaycontrol("all");

                    } else if (playerOneNumber == inputfour.value && playerOneNumber != inputtwo.value && playerOneNumber != inputthree.value) {
                        header.innerHTML = "Player 2 Loser"
                        //header3.style.display = "block"
                        //header4.style.display = "block"
                        header3.innerHTML = "Player 3 Loser"
                        header4.innerHTML = "Player 4 Winner"
                        img.style.display = "block"
                        chance.style.display = "none"
                        displaycontrol("all");

                    } else if (count == 0 && playerOneNumber == inputtwo.value && playerOneNumber == inputthree.value) {
                        header.innerHTML = "Player 2 Winner"
                        //header3.style.display = "block"
                        //header4.style.display = "block"
                        header3.innerHTML = "Player 3 Winner"
                        header4.innerHTML = "Player 4 Loser"
                        img.style.display = "block"
                        chance.style.display = "none"
                        displaycontrol("all");

                    } else if (count == 0 && playerOneNumber != inputtwo.value && playerOneNumber == inputthree.value) {
                        header.innerHTML = "Player 2 Loser"
                        //header3.style.display = "block"
                        //header4.style.display = "block"
                        header3.innerHTML = "Player 3 Winner"
                        header4.innerHTML = "Player 4 Loser"
                        img.style.display = "block"
                        chance.style.display = "none"
                        displaycontrol("all");
                    } else if (count == 0 && playerOneNumber == inputtwo.value && playerOneNumber != inputthree.value) {
                        header.innerHTML = "Player 2 Winner"
                        //header3.style.display = "block"
                        //header4.style.display = "block"
                        header3.innerHTML = "Player 3 Loser"
                        header4.innerHTML = "Player 4 Loser"
                        img.style.display = "block"
                        chance.style.display = "none"
                        displaycontrol("all");
                    } else if (count == 0 && playerOneNumber != inputtwo.value && playerOneNumber != inputthree.value) {
                        header.innerHTML = "All Are Loser"
                        crying.style.display = "block"
                        chance.style.display = "none"
                        displaycontrol("all");
                    }
                } else {
                    error.style.color = "red"
                    error.innerHTML = "Please give a number between 1 to 10"
                }
            } else {
                error.style.color = "red"
                error.innerHTML = "Please give a number"
            }
        }
    } else {
        chance.innerHTML = "Game is Over"
    }
});

/* reset.addEventListener("click", function () {
    header.innerHTML = "Player 1"
    chance.style.display = "none"
    span.innerHTML = count = 5;
    displaycontrol("resetbtn");
}) */


function displaycontrol(type) {

    if (type == "p2bp1n") {
        inputone.style.display = "none"
        buttonone.style.display = "none"
        inputtwo.style.display = "inline-block"
        buttontwo.style.display = "inline-block"
        inputthree.style.display = "none"
        buttonthree.style.display = "none"
        inputfour.style.display = "none"
        buttonfour.style.display = "none"
    } else if (type == "p3bp2n") {
        inputone.style.display = "none"
        buttonone.style.display = "none"
        inputtwo.style.display = "none"
        buttontwo.style.display = "none"
        inputthree.style.display = "inline-block"
        buttonthree.style.display = "inline-block"
        inputfour.style.display = "none"
        buttonfour.style.display = "none"
    } else if (type == "p4bp2n") {
        inputone.style.display = "none"
        buttonone.style.display = "none"
        inputtwo.style.display = "none"
        buttontwo.style.display = "none"
        inputthree.style.display = "none"
        buttonthree.style.display = "none"
        inputfour.style.display = "inline-block"
        buttonfour.style.display = "inline-block"
    } else if (type == "resetbtn") {
        inputtwo.style.display = "none"
        buttontwo.style.display = "none"
        inputthree.style.display = "none"
        buttonthree.style.display = "none"
        inputfour.style.display = "none"
        buttonfour.style.display = "none"
        inputone.style.display = "inline-block"
        buttonone.style.display = "inline-block"
    } else if (type == "all") {
        inputtwo.style.display = "none"
        buttontwo.style.display = "none"
        inputthree.style.display = "none"
        buttonthree.style.display = "none"
        inputfour.style.display = "none"
        buttonfour.style.display = "none"
        inputone.style.display = "none"
        buttonone.style.display = "none"
    }
}