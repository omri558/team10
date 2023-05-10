function main(array) {
    let dubCards = array.concat(array)
    dubCards = shuffle(dubCards)
    return dubCards
}

function shuffle(array) {
    tempArr = []
    for (i in array) {
        let num1 = Math.floor(Math.random() * (array.length - 1))
        tempArr.splice(num1, 0, array[i])
    }
    return tempArr
}

// Picturs array:

let picBack = `memory_game_Rotem/pics/Question_mark_(black).png`

let pic1 = 'memory_game_Rotem/pics/img-1.png'
let pic2 = 'memory_game_Rotem/pics/img-2.png'
let pic3 = 'memory_game_Rotem/pics/img-3.png'
let pic4 = '/memory_game_Rotem/pics/img-4.png'
let pic5 = 'memory_game_Rotem/pics/img-5.png'
let pic6 = '/memory_game_Rotem/pics/img-6.png'

let picturesBlank = [pic1, pic2, pic3, pic4, pic5, pic6]

let pictures = main(picturesBlank)

// create cards function:

function createCard() {

    let board = document.getElementById("board")

    for (i = 0; i < pictures.length; i++) {

        let card = document.createElement("div")
        let front = document.createElement("img")
        let back = document.createElement("img")

        front.src = pictures[i]
        back.src = picBack

        front.classList = "card_img card_none"
        back.classList = "card_img"


        card.addEventListener("click", (e) => {
            front.classList.toggle("card_none")
            back.classList.toggle("card_none")
            card.classList.add("flipped")

            let flipped = document.getElementsByClassName("flipped")
            if (flipped.length % 2 == 0) {
                if (flipped[0].children[0].src == flipped[1].children[0].src) {
                    flipped[0].classList.add("paired")
                    flipped[1].classList.add("paired")
                    flipped[0].removeEventListener("click",(e)={})
                    flipped[1].removeEventListener("click",(e)={})
                    flipped[0].classList.remove("flipped")
                    flipped[0].classList.remove("flipped")
                    console.log(flipped)

                }
                else if (flipped[0].children[0].src != flipped[1].children[0].src) {
                    setTimeout(() => {
                            
                        flipped[0].children[0].classList.toggle("card_none")
                        flipped[0].children[1].classList.toggle("card_none")
                        flipped[0].classList.remove("flipped")
                                
                        flipped[0].children[0].classList.toggle("card_none")
                        flipped[0].children[1].classList.toggle("card_none")
                        flipped[0].classList.remove("flipped")
               
                    }, 1000)
                }
            }
            let paired = document.getElementsByClassName("paired")
            if(paired.length == pictures.length){
                // להוסיף פןנקציה שמחזירה לתפריט הראשי
            }

        })


        card.className = "card"
        card.append(front, back)
        board.append(card)
    }
}


createCard()

function clicked() {
    front.classList.toggle("card_none")
    back.classList.toggle("card_none")
    card.classList.add("flipped")

    let flipped = document.getElementsByClassName("flipped")
    if (flipped.length % 2 == 0) {
        if (flipped[0].children[0].src == flipped[1].children[0].src) {
            flipped[0].classList.add("paired")
            flipped[1].classList.add("paired")
            flipped[0].removeEventListener("click",(e)={})
            flipped[1].removeEventListener("click",(e)={})
            flipped[0].classList.remove("flipped")
            flipped[0].classList.remove("flipped")

        }
        else if (flipped[0].children[0].src != flipped[1].children[0].src) {
            setTimeout(() => {
                    
                flipped[0].children[0].classList.toggle("card_none")
                flipped[0].children[1].classList.toggle("card_none")
                flipped[0].classList.remove("flipped")
                        
                flipped[0].children[0].classList.toggle("card_none")
                flipped[0].children[1].classList.toggle("card_none")
                flipped[0].classList.remove("flipped")
       
            }, 1000)
        }
    }
    let paired = document.getElementsByClassName("paired")

}