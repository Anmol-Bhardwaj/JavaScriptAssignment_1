// Your pre-defined arrays based on the categories
const newNouns1 = ["Joey Tribbani", "Ross Geller", "Monica Geller", "Phoebe Buffay", "Chandler Bing", "Rachel Green"];
const newAdjectives = ["charming", "hilarious", "quirky", "lovable", "adventurous"];
const newSettings = ["at the Central Park", "at the Empire State Building", "at the Statue of Liberty", "at the Times Square", "at the Brooklyn Bridge"];
const newNouns2 = ["Ted Mosby", "Robin Scherbostsky", "Marshel Erikson", "Lily Auldrin", "Barney Stinson"];
const newVerbs = ["danced with", "joked with", "flirted with", "argued with", "cooked for"];

// Variables to store chosen words
let newChosenNoun1 = '';
let newChosenVerb = '';
let newChosenAdjective = '';
let newChosenNoun2 = '';
let newChosenSetting = '';

// Function to get a random element from an array
function getNewRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Event listener functions for buttons
document.getElementById('noun1-btn').addEventListener('click', function() {
    newChosenNoun1 = getNewRandomElement(newNouns1);
    document.getElementById('chosenNoun1').textContent = newChosenNoun1;
});

document.getElementById('verb-btn').addEventListener('click', function() {
    newChosenVerb = getNewRandomElement(newVerbs);
    document.getElementById('chosenVerb').textContent = newChosenVerb;
});

document.getElementById('adjective-btn').addEventListener('click', function() {
    newChosenAdjective = getNewRandomElement(newAdjectives);
    document.getElementById('chosenAdjective').textContent = newChosenAdjective;
});

document.getElementById('noun2-btn').addEventListener('click', function() {
    newChosenNoun2 = getNewRandomElement(newNouns2);
    document.getElementById('chosenNoun2').textContent = newChosenNoun2;
});

document.getElementById('setting-btn').addEventListener('click', function() {
    newChosenSetting = getNewRandomElement(newSettings);
    document.getElementById('chosenSetting').textContent = newChosenSetting;
});


// for student number
document.getElementById('mystudentnumber').addEventListener('click', function() {
    studentnumber = getNewRandomElement(mystudentnumber);
    document.getElementById('studentnumber').textContent = 200554109;
});


// Function to show the current story
function showNewStory() {
    let story = `${newChosenNoun1} ${newChosenVerb} ${newChosenAdjective} ${newChosenNoun2} ${newChosenSetting}.`;
    document.getElementById('story').textContent = story;
}

// Function to generate and show a random story
function generateNewRandomStory() {
    newChosenNoun1 = getNewRandomElement(newNouns1);
    newChosenVerb = getNewRandomElement(newVerbs);
    newChosenAdjective = getNewRandomElement(newAdjectives);
    newChosenNoun2 = getNewRandomElement(newNouns2);
    newChosenSetting = getNewRandomElement(newSettings);
    showNewStory();
}

// Function to reset the story and clear previous selections
function resetNewStory() {
    newChosenNoun1 = '';
    newChosenVerb = '';
    newChosenAdjective = '';
    newChosenNoun2 = '';
    newChosenSetting = '';
    document.getElementById('chosenNoun1').textContent = '';
    document.getElementById('chosenVerb').textContent = '';
    document.getElementById('chosenAdjective').textContent = '';
    document.getElementById('chosenNoun2').textContent = '';
    document.getElementById('chosenSetting').textContent = '';
    document.getElementById('story').textContent = '';
}

// Attach event listeners to final buttons
document.getElementById('playback-btn').addEventListener('click', showNewStory);
document.getElementById('random-btn').addEventListener('click', generateNewRandomStory);
document.getElementById('reset-btn').addEventListener('click', resetNewStory);
