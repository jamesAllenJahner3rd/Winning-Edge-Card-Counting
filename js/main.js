class BlackJackGame{
    constructor(){

   
//https://www.deckofcardsapi.com/
// declare variables
    this.NumDecks =1;



//event listeners
    this.DeckCountSubmit = document.getElementById("DeckCountButton").addEventListener("click", selectionDeckCount);




    }
    selectionDeckCount(){
        this.NumDecks = document.querySelectorAll("#DeckCountInput").value;
        fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${NumDecks}`)
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