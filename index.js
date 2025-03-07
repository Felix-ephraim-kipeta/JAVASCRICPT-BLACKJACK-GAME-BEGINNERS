let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function getRandomCard () {
    let randNo = Math.floor(Math.random() * 13) + 1
    if ( randNo === 1){
        return 11
    }
    else if ( randNo > 10) {
        return 10
    }
    else{
        return randNo
    }
}

function renderGame () {
    
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " , "
        
    }
    
    sumEl.textContent = "Sum: " + sum
    if ( sum <= 20 ){
        message = "Do you want to draw a new card? 😶"
        
    }
    
    else if ( sum === 21) {
        message = "you've Blackjack! 🎉😁"
        hasBlackjack = true
    }
    
    else {
       message = "you're out of the game! 😭"
       isAlive = false
    }
    
    messageEl.textContent = message
}

function startGame () {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function newCard () {
    let newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard
    renderGame()
}
