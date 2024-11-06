import { startGame, shuffleArray, updateScore } from './game.js';

const gameBoard = document.getElementById('game-board'); // Spelbord waar kaarten worden weergegeven
const scoreDisplay = document.getElementById('score'); // Element om de huidige score te tonen
const levelDisplay = document.getElementById('level-display'); // Element om het huidige level te tonen
const restartButton = document.getElementById('restart-button'); // Knop om het spel opnieuw te starten
const winMessage = document.getElementById('win-message'); // Element dat verschijnt bij het voltooien van een level
const winMessageText = winMessage.querySelector('h2'); // Tekst in het win-bericht
const playAgainButton = document.getElementById('play-again-button'); // Knop in het win-bericht om het spel opnieuw te spelen na level 3

let score = 0; // Huidige score van de speler
let flippedCards = []; // Huidige geselecteerde kaarten die worden vergeleken
let matchedPairs = 0; // Aantal gevonden paren in het huidige level
let level = 1; // Huidige level, startend vanaf level 1

// Functie om kaarten te genereren voor het huidige level zonder duplicaten
const generateRandomCards = (level) => {
    const baseCards = ['🍎', '🍌', '🍇', '🍊', '🍉', '🍓', '🍒', '🥭', '🍍', '🥝']; // Basisset van unieke kaarten
    let cards = [];
    
    // Kies het aantal unieke kaarten op basis van het level (bv. 2 paren voor level 1)
    const numPairs = level + 1; // Aantal paren neemt toe met elk level
    const uniqueCards = baseCards.slice(0, numPairs); // Selecteer het aantal unieke kaarten voor het huidige level

    // Dupliceer elke unieke kaart om een paar te maken en voeg toe aan de kaartenlijst
    uniqueCards.forEach(card => {
        cards.push(card, card); // Elk uniek kaarttype wordt twee keer toegevoegd voor het maken van paren
    });

    return shuffleArray(cards); // Schud de kaarten om de volgorde willekeurig te maken
};

// Functie om de score te verhogen en te updaten in het scoreDisplay
const incrementScore = points => {
    score += points; // Voeg punten toe aan de score
    updateScore(scoreDisplay, score); // Update de scoreweergave
};

// Controleer of het level is voltooid door te kijken of alle paren zijn gevonden
const checkLevelWin = () => {
    // Als alle paren zijn gevonden voor het huidige level
    if (matchedPairs === generateRandomCards(level).length / 2) {
        winMessage.classList.remove('hidden'); // Toon het win-bericht
        
        // Als het laatste level is voltooid (level 3)
        if (level === 3) {
            winMessageText.textContent = "Je hebt gewonnen! Alle levels voltooid!"; // Eindboodschap voor de speler
            playAgainButton.classList.remove('hidden'); // Toon de "Play Again" knop om het spel opnieuw te starten
        } else {
            // Berichten voor levels 1 en 2
            winMessageText.textContent = `Gefeliciteerd! Level ${level} voltooid! Ga door naar level ${level + 1}...`;
            playAgainButton.classList.add('hidden'); // Verberg de "Play Again" knop tijdens het niveau-overgang
            
            // Ga na een korte pauze door naar het volgende level
            setTimeout(() => {
                level++; // Verhoog het level
                initializeGame(); // Start het volgende level
            }, 2000); // 2 seconden pauze
        }
    }
};

// Start of herstart het spel zonder de score opnieuw in te stellen
const initializeGame = () => {
    matchedPairs = 0; // Reset het aantal gevonden paren voor het nieuwe level
    flippedCards = []; // Reset de omgedraaide kaarten voor het nieuwe level
    updateScore(scoreDisplay, score); // Update de scoreweergave zonder deze te resetten
    levelDisplay.textContent = level; // Update het level display om het huidige level te tonen
    const cards = generateRandomCards(level); // Genereer de kaarten voor het huidige level
    startGame(cards, gameBoard); // Laad de kaarten op het spelbord
    winMessage.classList.add('hidden'); // Verberg het win-bericht wanneer het level start
};

// Start het spel op level 1 bij het laden
initializeGame();

// Eventlistener om kaartklikken te verwerken en paren te controleren
gameBoard.addEventListener('click', event => {
    const target = event.target;

    // Controleer of het geklikte element een kaart is en nog niet omgedraaid
    if (target.classList.contains('card') && !target.classList.contains('flipped')) {
        target.classList.add('flipped'); // Markeer de kaart als omgedraaid
        target.textContent = target.dataset.value; // Toon de waarde van de kaart
        flippedCards.push(target); // Voeg de kaart toe aan de lijst van omgedraaide kaarten

        // Als er twee kaarten zijn omgedraaid, controleer of ze een paar vormen
        if (flippedCards.length === 2) {
            const [card1, card2] = flippedCards; // Haal de twee omgedraaide kaarten op
            new Promise(resolve => {
                setTimeout(() => {
                    if (card1.dataset.value === card2.dataset.value) {
                        incrementScore(10); // Verhoog de score als de kaarten overeenkomen
                        matchedPairs++; // Verhoog het aantal gevonden paren
                        checkLevelWin(); // Controleer of het level voltooid is
                    } else {
                        // Draai de kaarten terug als ze niet overeenkomen
                        card1.classList.remove('flipped');
                        card2.classList.remove('flipped');
                        card1.textContent = '';
                        card2.textContent = '';
                    }
                    flippedCards = []; // Reset de omgedraaide kaartenlijst
                    resolve();
                }, 1000); // Wacht 1 seconde voordat je de kaarten terugdraait
            });
        }
    }
});

// Eventlistener om het spel te herstarten met de "Restart Game" knop
restartButton.addEventListener('click', () => {
    level = 1; // Zet het level terug naar 1
    score = 0; // Zet de score terug naar 0
    initializeGame(); // Start het spel opnieuw
});

// Eventlistener voor de "Play Again" knop in het win-bericht na level 3
playAgainButton.addEventListener('click', () => {
    level = 1; // Zet het level terug naar 1
    score = 0; // Zet de score terug naar 0
    initializeGame(); // Start het spel opnieuw
});
