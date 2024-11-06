# Memory Game

## Projectbeschrijving
Dit is een interactief geheugenspel waarin spelers kaarten omdraaien om paren te vinden. Het spel maakt gebruik van moderne ES6+ functies zoals arrow functions, destructuring, promises en modules. Naarmate je door de levels gaat, worden er meer unieke kaarten toegevoegd en blijft je score behouden. Na het voltooien van elk level verschijnt een "You Win!"-melding, en na het laatste level kun je het spel opnieuw starten.

## Functies
- ES6+ Functionaliteit: Gebruik van let/const, arrow functions, destructuring, de spread-operator, modules en promises voor een gestructureerde, moderne code.
- Levelprogressie: Speel door drie levels, waarbij elk level meer unieke kaartparen heeft.
- Score Bijhouden: De score blijft behouden over alle levels en stijgt met 10 punten per succesvol gevonden paar.
- Interactieve Gameplay: Klik op kaarten om deze om te draaien, probeer paren te vinden en vorder naar het volgende level.
- Responsief Ontwerp: Geoptimaliseerd voor zowel desktop- als mobiele apparaten.
- Spelmeldingen: Na elk level verschijnt een "You Win!"-melding, en na level 3 krijg je een felicitatiebericht met een optie om opnieuw te spelen.

## Hoe te Spelen
Volg deze stappen om het spel te spelen:

1. Start het Spel:
   - Open het bestand `index.html` in je browser.
   - Een disclaimer bovenaan herinnert je eraan rustig te spelen voor de beste ervaring.

2. Draai Kaarten Om:
   - Klik op een kaart om deze om te draaien en het symbool te onthullen.
   - Probeer een andere kaart met hetzelfde symbool te vinden om een paar te maken.

3. Maak Paren:
   - Als twee omgedraaide kaarten overeenkomen, blijven ze open liggen en ontvang je 10 punten.
   - Als ze niet overeenkomen, draaien de kaarten na een korte vertraging weer om.

4. Voltooi Levels:
   - Elk level heeft een toenemend aantal unieke paren:
     - Level 1: 2 paren
     - Level 2: 3 paren
     - Level 3: 4 paren
   - Na elk level verschijnt een "You Win!"-melding. Het spel gaat automatisch door naar het volgende level.

5. Win het Spel:
   - Na het voltooien van level 3 krijg je een laatste bericht dat je feliciteert met het voltooien van alle levels. Klik op "Play Again" om opnieuw te beginnen vanaf level 1.

6. Herstart het Spel:
   - Klik op de knop "Restart Game" om het spel op elk moment opnieuw te starten. Dit reset het spel naar level 1 met een score van 0.

## Gebruikte Technologieën
- HTML5 voor de structuur
- CSS3 voor de styling en layout
- JavaScript (ES6+) voor de spel-logica