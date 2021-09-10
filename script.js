let Welkom = document.querySelector("h1");
let ResultH1 = document.getElementById("result");
let Img = document.querySelectorAll("img");
let ClassPieces = document.getElementsByClassName("pieces");

var Speler = 1;
Welkom.textContent = "Speler 1, maak je keuze:";

Keuzes = [];

function Kies(event) {
    Clicked(event);
    try {
    Keuze = event.target.alt;

    if (Speler == 1) {
        Keuzes.push(Keuze);
        console.log("Speler " + Speler + " koos voor : " + Keuzes[0]);
        Speler ++;
        setTimeout(() => { Welkom.textContent = "Speler 2, maak je keuze:";}, 500);
        setTimeout(Kies, 2000);
    } else {
        Keuzes.push(Keuze);
        console.log("Speler " + Speler + " koos voor : " + Keuzes[1]);
    } 
    
    if (Keuzes.length == 2) {
        console.log(Keuzes);
        setTimeout(() => { Welkom.textContent = Keuzes[0] + " versus " + Keuzes[1];}, 500);
        setTimeout(() => { Img.forEach(Img => { Img.style.visibility = "hidden";});}, 600);
        setTimeout(() => { Result(Keuzes) }, 800);}
    } catch (Error) {
        console.log(Error instanceof TypeError);
    }
}

function Clicked(event) {
    try {
    event.target.style.boxShadow = "0px 0px 14px 4px #FFDD55";
    setTimeout(() => { event.target.style.boxShadow = "2px 2px 14px 1px #811673"; }, 500);
    throw new TypeError()
    } catch (Error) {
    console.log(Error instanceof TypeError);
    }
}

function Result(Keuzes) {
    if ((Keuzes[0] == "schaar" && Keuzes[1] == "papier") || (Keuzes[0] == "steen" && Keuzes[1] == "schaar") || (Keuzes[0] == "papier" && Keuzes[1] == "steen")) {
        ResultH1.textContent = "Speler 1 wint!";
    } else if ((Keuzes[1] == "schaar" && Keuzes[0] == "papier") || (Keuzes[1] == "steen" && Keuzes[0] == "schaar") || (Keuzes[1] == "papier" && Keuzes[0] == "steen")) {
        ResultH1.textContent = "Speler 2 wint!";
    } else {
        ResultH1.textContent = "Gelijkspel!";
    }
    console.log("hier");
    setTimeout(ResetBTN, 500);
}

function ResetBTN() {
    var newButton = document.createElement("button")
    newButton.innerHTML = "Speel opnieuw!";
    newButton.setAttribute("onclick", "window.location.reload();")
    document.body.appendChild(newButton);
    console.log(newButton);
}
