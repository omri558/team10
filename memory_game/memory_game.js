let arr1 = [{index:"0",imgSrc:"b20.jpg"},{index:"1",imgSrc:"b10.jpg"},{index:"2",imgSrc:"b0.jpg"},{index:"3",imgSrc:"b1.jpg"},{index:"4",imgSrc:"b2.jpg"},{index:"5",imgSrc:"b3.jpg"},{index:"6",imgSrc:"b4.jpg"},{index:"7",imgSrc:"b5.jpg"},{index:"8",imgSrc:"b6.jpg"},{index:"9",imgSrc:"b7.jpg"},{index:"10",imgSrc:"b8.jpg"},{index:"11",imgSrc:"b9.jpg"},
{index:"12",imgSrc:"b24.jpg"},{index:"13",imgSrc:"b11.jpg"},{index:"14",imgSrc:"b23.webp"},{index:"15",imgSrc:"b13.jpg"},{index:"16",imgSrc:"b14.jpg"},{index:"17",imgSrc:"b15.jpg"},{index:"18",imgSrc:"b16.jpg"},{index:"19",imgSrc:"b17.jpg"},{index:"20",imgSrc:"b18.jpg"},{index:"21",imgSrc:"b19.jpg"},{index:"22",imgSrc:"b21.webp"},{index:"23",imgSrc:"b22.webp"}];
const difficulty = localStorage.getItem("difficulty"); //if i'll do const it wouldn't let me do if(difficulty == "somthing") bacause it's shuld alwyas have the same value 
const cardAmount = localStorage.getItem("cardAmount");
let userChoose = cardAmount;
let arr2 = arr1.slice(0,userChoose / 2).concat(arr1.slice(0,userChoose / 2))
let moves = 0, seconds = 0 , minutes = 0;
let isFuncActivated = false;//to check if lose / win func was activated
if(difficulty == "nightmare"){
    if(cardAmount == "48"){
        moves = 200, minutes = 5, seconds = 0;    
    }
    else{
        moves = 50, minutes = 1, seconds = 20;
    }
}
console.log(cardAmount, difficulty)

//function that suffle the second array
function shuffle(arr) {
    for (let j = 0; j < 10 + Math.random() * 10; j++) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      arr.reverse();
    }
    return arr;
  }
// function shuffle(arr){
//     for(j = 0; j < 9 + Math.random() * 10; j++){
//        for(i = 0;i < arr.length; i++){
//             let ran = Math.floor(Math.random()) * (i + 1)//rndom
//             let temp = arr[i] 
//             arr[i] = arr[ran]
//             arr[ran] = temp
//         }
//         //  arr.reverse()
//     }
//     return arr
// }
// )    (זה בגלל שבלולאת פור עשיתי length * 2) נקראת הדף בכרום כותב "אוי לא" ולא טוען את הדף כל פעם שפונקציית shuffle (status breakpoint)
//func -  makes new array made from stars in the same length of the suffle array
let shufarray = shuffle(arr2);
//func - to count how may moves the user did
function movesCounter(countingDown){
    if(countingDown){
        moves-- ;
    }
    else{
        moves++ ;
    }
    if(moves == 0 && !isFuncActivated){
        //you lost func
        finishGame("lose", "moves");
        isFuncActivated = true;
    }
    document.getElementById("movesText").innerText = `${moves}` ;
}
//stopwatch
function stopWatch(){
    if(difficulty == "nightmare"){//set timer
        if(seconds == 0){
            seconds = 60 ;
            minutes-- ;
        }
        seconds-- ;
        if(minutes == 0 && seconds == 0 && !isFuncActivated){
            finishGame("lose", "time")
            isFuncActivated = true;
        }
    }
    else{//set stopwatch
        if(seconds == 59){
            seconds = -1 ;
            minutes++ ;
        }
        seconds++ ;
    } 
    document.getElementById("clock").innerText = `${minutes}:${seconds}` ;
}
setInterval(stopWatch,1000)//calling the s
let createCard = () => {
    // let arr = [];
for(i in shufarray){
    card = document.createElement("div");
    card.className = "cardBack";
    card.id = i;
    card.innerText = "?";
    img = document.createElement("img");
    img.src = shufarray[i].imgSrc;
    card.src = shufarray[i].imgSrc;
    img.className = "backPhotos";
    card.onclick = handleClick;
    board = document.getElementById("board");
    if(cardAmount == "48"){
        board.style.height = "97%";
        board.style.gap = "1%";
        board.style.marginTop = "-28.6%"
        board.style.flexDirection = "row"
        card.style.width = "11%";
        card.style.height = "15.35%";
        card.style.margin = "0";
        card.style.fontSize = "80px";
    }
    card.append(img);
    board.append(card);
}
}
createCard();
let flippedArr = []; //arr that gets the flipped cards
function flip(event){
    card = event.target;
    card.className = "cardFront";
    card.style.fontSize = "0";/* */
    img = document.getElementById(card.id).querySelector("img");
    img.className = "frontPhotos";
    flippedArr.push(card.id);
    card.onclick = null;
    if(flippedArr.length == 2){
        card2 = document.getElementById(flippedArr[0]);
        if(document.getElementById(flippedArr[0]).src !== document.getElementById(flippedArr[1]).src){ //check if the cards match
           //show the cards for a few seconds and then show the back
           document.querySelectorAll(".cardBack").forEach(card => {
                card.onclick = null
           });
           card2 = document.getElementById(flippedArr[0]);
           setTimeout( () => {
           img.className = "backPhotos";
           card.className = "cardBack";
           card2.className = "cardBack";
           if(cardAmount == "48"){
           card.style.fontSize = "80px", card2.style.fontSize = "80px";}
           else{
            card.style.fontSize = "100px", card2.style.fontSize = "100px";
           }
           card2.querySelector("img").className = "backPhotos";
           document.querySelectorAll(".cardBack").forEach(card => {
           card.onclick = handleClick;
            })
           },800)
        }
        else{
            //sound effect
            card.onclick = null;
            card2.onclick = null;
            if(document.querySelectorAll(".cardBack").length == 0){
                finishGame("win");
                isFuncActivated = true;
            }
        }
        flippedArr = [];
    }
}
function handleClick (Event){
    if(difficulty == "nightmare"){
        movesCounter("countingDown");
    }
    else{
    movesCounter();
    }
    flip(Event);
}
function finishGame(winOrLose, movesOrTime){
    gameDiv = document.getElementById("game");
    lost = document.createElement("div");
    lost.id = "finishGame";
    lost.style.zIndex = 2;
    restart = document.createElement("a");
    restart.href = "levels.html" , restart.innerText = "\nrestart";
    if(winOrLose == "lose"){
    gameDiv.style.display = "none";
        if(movesOrTime == "moves"){//if the user lose because he run out of moves
            lost.innerText = `no moves left, you lost`;
        }
        else{//if he lose because no time left
            lost.innerText = `no time left, you lost`;
        }
    }
    else{//if the user won
        lost.innerText = "you won!";
        document.getElementById("board").style.filter = "blur(5px)";
    }
    lost.append(restart);
    body = document.getElementsByTagName("body")[0];
    body.append(lost);
}

