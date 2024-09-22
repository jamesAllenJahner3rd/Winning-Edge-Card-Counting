
   
//https://www.deckofcardsapi.com/
// declare variables
    let numDecks =1;
    console.log(`initial amount of decks is ${numDecks}`);
//event listeners
    document.getElementById("deckCountButton").addEventListener("click", selectionDeckCount);
    
    function selectionDeckCount(){
        const deckCount = document.getElementById("deckCountButton").value;
        console.log("selectionDeckCount is being called",`total amount of decks is ${deckCount}`);
        const newGame = new BlackJackGame(deckCount)
    }
    class BlackJackGame{
    constructor(decks){

        numDecks = document.querySelectorAll("#DeckCountInput").value;
        fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numDecks}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));

    }
    deal(){
        fetch("https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2")
        .then(response => response.json())
        .then(data =>{
            console.log(data);
        })
        .catch (err => console.log(err));
    }
}

