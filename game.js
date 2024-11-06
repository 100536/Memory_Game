// Functie om het spel te starten door de kaarten in het spelbord te laden
export function startGame(cards, gameBoard) {
    gameBoard.innerHTML = ''; // Maak het spelbord leeg bij het starten van een nieuw level
    cards.forEach(card => {
        const cardElement = document.createElement('div'); // Creëer een nieuw kaart element
        cardElement.classList.add('card'); // Voeg de kaartstijl toe
        cardElement.dataset.value = card; // Sla de waarde van de kaart op in data attribuut
        gameBoard.appendChild(cardElement); // Voeg de kaart toe aan het spelbord
    });
}

// Functie om een array met kaarten te schudden, zodat de volgorde willekeurig is
export function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5); // Sorteer de array willekeurig door een negatieve of positieve waarde te retourneren
}

// Functie om de scoreweergave te updaten met de huidige score
export function updateScore(scoreDisplay, score) {
    scoreDisplay.textContent = score; // Toon de bijgewerkte score in het scoreDisplay element
}
