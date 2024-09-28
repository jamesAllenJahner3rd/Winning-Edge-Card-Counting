// //https://www.deckofcardsapi.com/
// declare variables
let numDecks   = 1;
let theDeck    = '';
let newGame    = {};
;
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
            this.player={
                '0': 'dealer',
                "1": "player",
                playerPile : [],
                dealerPile : []
            }
            numDecks = decks
            fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numDecks}`)
            .then(response => response.json())
            .then(data => {
                theDeck =data.deck_id
                console.log(data);
            })
            .catch(err => console.log(err));

        }
        layDownCard(whosHand,imgOfCard){
            this.addElement( whosHand, imgOfCard)
        }
        deal(){
                fetch(`https://www.deckofcardsapi.com/api/deck/${theDeck}/draw/?count=4`)
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                 for(let card in data.cards){ 
                    console.log('cardKey', card)
                    console.log(this.player[card%2],data.cards[card].image)
                    this.layDownCard(this.player[card%2],data.cards[card].image)
                    ;
                 } 
            })
            .catch (err => console.log(err));
        }
        addElement(theId,cardImg) {
             // create new elements to hold the images of cards
            const img    = document.createElement("img");
            const newDiv = document.createElement("li" );
            let  playerID = document.getElementById(theId)
            let newContent='';
           
            
            // and give it some content
            console.log("theId has children?", playerID.hasChildNodes())
            if (playerID.hasChildNodes()) {
                newContent = cardImg
            }else{
                newContent = 'https://www.deckofcardsapi.com/static/img/back.png'
            }

            console.log("the link is:", newContent)
           //let setImg = appendChild((img)).setAttribute("src",newContent)
        
            // add the text node to the newly created div
            //newDiv.appendChild(newContent);
        
            // add the newly created element and its content into the DOM
            const whosPile = document.getElementById(theId);
            playerID.insertAdjacentElement('beforeend', newDiv);
            playerID.li.insertAdjacentElement('beforeend', img);
        }
    }

