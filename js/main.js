// //https://www.deckofcardsapi.com/
// declare variables
let numDecks =1;
let theDeck='';
let  newGame= {};
//event listeners
document.addEventListener("DOMContentLoaded", () => {
document.getElementById("deckCountButton").addEventListener("click", (e) => selectionDeckCount());
document.getElementById("deal").addEventListener("click", (e) => newGame.deal());
})

    function selectionDeckCount(){
        const deckCount = document.getElementById("DeckCountInput").value;
        newGame = new BlackJackGame(deckCount)
    }
    class BlackJackGame{
    constructor(decks){

        numDecks = decks
        fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numDecks}`)//${numDecks}`)
        .then(response => response.json())
        .then(data => {
            theDeck =data.deck_id
            console.log(data);
        })
        .catch(err => console.log(err));

    }
    deal(){
            fetch(`https://www.deckofcardsapi.com/api/deck/${theDeck}/draw/?count=2`)
        .then(response => response.json())
        .then(data =>{
            console.log(data);
        })
        .catch (err => console.log(err));
        createlem
    }
    layDownCard(whosHand){
        theSpot = document.getElementById(`${whosHand}`)
        theSpot.createElement(`<li id =${cardCount}>`)

    }
 }

