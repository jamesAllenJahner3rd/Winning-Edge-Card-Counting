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
             for(let card in data.cards){ 
                console.log(card, data.cards[card].image);
             } 
        })
        .catch (err => console.log(err));
    }
    layDownCard(whosHand){
        addElement(whosHand)
        theSpot.createElement(`<li id =${cardCount}>`)

    }
    addElement(theId) {
        // create a new div element
        const newDiv = document.createElement("li");
      
        // and give it some content
        const newContent = document.createTextNode("Hi there and greetings!");
      
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
      
        // add the newly created element and its content into the DOM
        const whosPile = document.getElementById(theId);
        document.body.insertAdjacentElement(beforeend, whosPile);
      }
 }

