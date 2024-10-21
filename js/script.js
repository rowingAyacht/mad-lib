console.log("JavaScript file is connected!");

function generateMadLib(){
    const birdTypeInput = document.getElementById('birdType').value;
    const plantTypeInput = document.getElementById('plantType').value;
    const nameInput = document.getElementById('nameInput').value;
    const adjectiveInput = document.getElementById('adjectiveType').value;
    const nounInput = document.getElementById('nounType').value;

    
    const message = "I once had a " + birdTypeInput + ". One day it flew so high it soared over all the " + plantTypeInput + "s. My " + birdTypeInput + " was named "+ nameInput + ". " + nameInput + " was a " + adjectiveInput + " bird and could carry an entire " + nounInput + ". Too bad he flew away, I am going to miss " + nameInput + ".";
    
    // Display the message in the <p> element
    document.getElementById('madLibOutput').textContent = message;
}
