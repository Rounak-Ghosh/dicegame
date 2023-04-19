randomNumber1 = Math.floor(Math.random()*5+1);
randomNumber2 = Math.floor(Math.random()*5+1);
randomImage1 = "./images/dice" + randomNumber1 + ".png";
randomImage2 = "./images/dice" + randomNumber2 + ".png";

if(randomNumber1 > randomNumber2)
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
else if(randomNumber1 < randomNumber2)
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
else
    document.querySelector("h1").textContent = "Draw!";


document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", randomImage2);

