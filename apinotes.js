/*Deck of Cards
An API
Shuffle the Cards:
                    https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1 copy
                    Add deck_count as a GET or POST parameter to define the number of Decks you want to use. Blackjack typically uses 6 decks. The default is 1.

                    Response:
                    {
                    "success": true,
                    "deck_id": "3p40paa87x90",
                    "shuffled": true,
                    "remaining": 52
                    }
Draw a Card:
                    https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2 copy
                    The count variable defines how many cards to draw from the deck. Be sure to replace deck_id with a valid deck_id. We use the deck_id as an identifier so we know who is playing with what deck. After two weeks, if no actions have been made on the deck then we throw it away.

                    TIP: replace <<deck_id>> with "new" to create a shuffled deck and draw cards from that deck in the same request.

                    Response:
                    {
                    "success": true,
                    "deck_id": "kxozasf3edqu",
                    "cards": [
                    {
                    "code": "6H",
                    "image": "https://deckofcardsapi.com/static/img/6H.png",
                    "images": {
                    "svg": "https://deckofcardsapi.com/static/img/6H.svg",
                    "png": "https://deckofcardsapi.com/static/img/6H.png"
                    },
                    "value": "6",
                    "suit": "HEARTS"
                    },
                    {
                    "code": "5S",
                    "image": "https://deckofcardsapi.com/static/img/5S.png",
                    "images": {
                    "svg": "https://deckofcardsapi.com/static/img/5S.svg",
                    "png": "https://deckofcardsapi.com/static/img/5S.png"
                    },
                    "value": "5",
                    "suit": "SPADES"
                    }
                    ],
                    "remaining": 50
                    }
Reshuffle the Cards:

                    https://www.deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/
                    https://www.deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/?remaining=true copy

                    Don't throw away a deck when all you want to do is shuffle. Include the deck_id on your call to shuffle your cards. Don't worry about reminding us how many decks you are playing with. Adding the remaining=true parameter will only shuffle those cards remaining in the main stack, leaving any piles or drawn cards alone.

                    Response:
                    {
                    "success": true,
                    "deck_id": "3p40paa87x90",
                    "shuffled": true,
                    "remaining": 52
                    }
A Brand New Deck:
                    https://www.deckofcardsapi.com/api/deck/new/ copy
                    Open a brand new deck of cards.
                    A-spades, 2-spades, 3-spades... followed by diamonds, clubs, then hearts.

                    Hot Tip: Add jokers_enabled=true as a GET or POST parameter to your request to include two Jokers in the deck.

                    Response:
                    {
                    "success": true,
                    "deck_id": "3p40paa87x90",
                    "shuffled": false,
                    "remaining": 52
                    }
A Partial Deck:
                    https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH copy
                    If you want to use a partial deck, then you can pass the card codes you want to use using the cards parameter. Separate the card codes with commas, and each card code is a just a two character case-insensitive string:

                    The value, one of A (for an ace), 2, 3, 4, 5, 6, 7, 8, 9, 0 (for a ten), J (jack), Q (queen), or K (king);
                    The suit, one of S (Spades), D (Diamonds), C (Clubs), or H (Hearts).
                    In this example, we are asking for a deck consisting of all the aces, twos, and kings.

                    Response:
                    {
                    "success": true,
                    "deck_id": "3p40paa87x90",
                    "shuffled": true,
                    "remaining": 12
                    }
Adding to Piles
                    https://www.deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=AS,2S copy
                    Piles can be used for discarding, players hands, or whatever else. Piles are created on the fly, just give a pile a name and add a drawn card to the pile. If the pile didn't exist before, it does now. After a card has been drawn from the deck it can be moved from pile to pile.

                    Note: This will not work with multiple decks.

                    Response:
                    {
                    "success": true,
                    "deck_id": "3p40paa87x90",
                    "remaining": 12,
                    "piles": {
                    "discard": {
                    "remaining": 2
                    }
                    }
                    }
Shuffle Piles
                    https://www.deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/shuffle/ copy
                    Note: This will not work with multiple decks.

                    Response:
                    {
                    "success": true,
                    "deck_id": "3p40paa87x90",
                    "remaining": 12,
                    "piles": {
                    "discard": {
                    "remaining": 2
                    }
                    }
                    }
Listing Cards in Piles
                    https://www.deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/list/ copy
                    Note: This will not work with multiple decks.
                    
                    Response:
                    {
                    "success": true,
                    "deck_id": "d5x0uw65g416",
                    "remaining": "42",
                    "piles": {
                    "player1": {
                    "remaining": "3"
                    },
                    "player2": {
                    "cards": [
                    {
                    "image": "https://www.deckofcardsapi.com/static/img/KH.png",
                    "value": "KING",
                    "suit": "HEARTS",
                    "code": "KH"
                    },
                    {
                    "image": "https://www.deckofcardsapi.com/static/img/8C.png",
                    "value": "8",
                    "suit": "CLUBS",
                    "code": "8C"
                    }
                    ],
                    "remaining": "2"
                    }
                    },
                    }
//Drawing from Piles
                    https://www.deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/draw/?cards=AS copy
                    https://www.deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/draw/?count=2
                    https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/bottom/
                    https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/random/
                    Specify the cards that you want to draw from the pile. The default is to just draw off the top of the pile (it's a stack). Add /bottom/ to the URL to draw from the bottom or /random/ to draw random cards - both of these also accept the count parameter.

                    Response:
                    {
                    "success": true,
                    "deck_id": "3p40paa87x90",
                    "remaining": 12,
                    "piles": {
                    "discard": {
                    "remaining": 1
                    }
                    },
                    "cards": [
                    {
                    "image": "https://www.deckofcardsapi.com/static/img/AS.png",
                    "value": "ACE",
                    "suit": "SPADES",
                    "code": "AS"
                    }
                    ]
                    }
//Returning cards to the deck:
                    https://www.deckofcardsapi.com/api/deck/<<deck_id>>/return/ copy
                    https://www.deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/return/
                    https://www.deckofcardsapi.com/api/deck/<<deck_id>>/return/?cards=AS,2S
                    https://www.deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/return/?cards=AS,2S
                    Use this call to return cards which have been drawn or cards from a pile back to the main deck to re-use. Both versions can take the cards parameter for a list of cards to return (if valid).
                    
                    Response:
                    {
                    "success": true,
                    "deck_id": "3p40paa87x90",
                    "shuffled": true,
                    "remaining": 52
                    "piles": {
                    "discard": {
                    "remaining": 0
                    }
                    }
                    }
                    Back of Card Image:
                    https://www.deckofcardsapi.com/static/img/back.png copy
                    Lastly, I
                    */