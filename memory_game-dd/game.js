// let arrCard = ['http://127.0.0.1:5500/1.jpg', 'http://127.0.0.1:5500/2.jpg', 'http://127.0.0.1:5500/3.jpg'];
let arrCard = ['1.jpg', '2.jpg', '3.jpg'];
numCard = 3//Number(prompt("how many pairs of tickets?"))
numCard *= 2
arrCard = arrCard.concat(arrCard)
let i = 0;
shuflle(arrCard);
function shuflle(arr) {  //פונקציה לערבוב קלפים
    let randomIndex;
    corentIndex = arr.length;
    while (corentIndex != 0) {
        randomIndex = Math.floor(Math.random() * corentIndex);
        corentIndex--;
        [arr[corentIndex], arr[randomIndex]] = [arr[randomIndex], arr[corentIndex]];
    }
}
while (i < numCard) {
    // while (numCard > 0) {
    let card = document.createElement('div');
    let img = document.createElement("img")
    card.id = i;
    img.src = arrCard[i];
    card.className = ("card");
    img.className = ("open");
    document.getElementById("board").append(card);
    document.getElementById(i).append(img);
    img = document.createElement("img");
    img.src="back.jpg";
    img.className = ("close");
    document.getElementById(i).append(img);
    i += 1
}
console.log("arrCard:");
console.log(arrCard);


