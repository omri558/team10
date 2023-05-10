let difficulty;
let cardsAmount;
let easy = document.getElementById("easy"); 
let nightmare = document.getElementById("nightmare");
// let hard = document.getElementById("hard");
let levels = [easy,nightmare];
levels.forEach(level =>  level.onclick = levelClick);
let userChoiceH1 = document.getElementById("h2");
function levelClick(event){
    choice = event.target;
    userChoiceH1.innerText = "Cards amount:";
    // userChoiceH1.style.fontSize = "100px";
    difficulty = choice.innerText;
    localStorage.setItem("difficulty",difficulty);
    console.log(cardsAmount, difficulty)
    easy.innerText = "24";
    nightmare.textContent = "48";
    levels.forEach(button => { button.style.fontSize = "100px" 
    button.onclick = amount} );
} 
function amount(event){
    cardsAmount = event.target.innerText;
    localStorage.setItem("cardAmount",cardsAmount);
    window.location.href = "index.html";
} 
let moves24 = "24:48"
let time24 = "24:48"
let time48 = "24:48"
let moves48 = "24:48"
const records = document.getElementById("records");
records.onclick = showRecords;
let allPElements = document.getElementsByClassName("div");
allPElements[0].innerText = `easy - moves: ${moves24} time: ${time24}`
allPElements[1].innerText = `nightmare - moves: ${moves48} time: ${time48}`
function showRecords(){

    let allPElements = document.getElementsByClassName("div");
    console.log(allPElements)
    //allPElements[0].style.visibility == "hidden"
   // allPElements.forEach(p => p.style.visibility = "visible")
    //     if(document.getElementById("easyRecord").style.visibility == "hidden"){
    //     allPElements.forEach(p => p.style.visibility = "visible")
    // allPElements[0].innerText = `easy - moves: ${moves24} time: ${time24}`
    // allPElements[1].innerText = `nightmare - moves: ${moves48} time: ${time48}`
    // }
    // else{
    //     allPElements.forEach((p) => p.style.visibility = "hidden")
    // }



}






