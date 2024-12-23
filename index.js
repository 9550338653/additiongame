let firstnumber = document.getElementById("firstNumber");
let secondnumber = document.getElementById("secondNumber");

function check() {
    let correctanswer = parseInt(firstnumber.textContent) + parseInt(secondnumber.textContent);
    let userinput = document.getElementById("userInput").value;
    if (correctanswer === parseInt(userinput)) {
        document.getElementById("gameResult").textContent = "Congratulations You,got it right"
        document.getElementById("gameResult").style.backgroundColor = "#028a0f"

    } else if (userinput === "") {
        document.getElementById("gameResult").textContent = "Please Try Again";
        document.getElementById("gameResult").style.backgroundColor = "#1e217c"



    } else {
        document.getElementById("gameResult").textContent = "Please Try Again!";
        document.getElementById("gameResult").style.backgroundColor = "#1e217c"
    }
}

function restart() {
    let fnum = Math.random() * 100;
    let snum = Math.random() * 100;
    firstnumber.textContent = parseInt(fnum);
    secondnumber.textContent = parseInt(snum);
    document.getElementById("gameResult").textContent = "";

    document.getElementById("userInput").value = "";
}
restart()