//const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
randomize.addEventListener('click', result);

let storyText = 'Long ago in a distant land, I :antagonist:, the :adjective: :title:, unleashed an unspeakable evil. But a foolish :hero:, wielding :weapon:, stepth forth to oppose me. Before the final blow was struck I tore open a portal in time and flung him into the future, when my evil is law. Now the fool seeks to return to the past and undo the future that is :antagonist:!';
let antagonist = ['Acu','Quautemoc','Attila','Sauron'];
let adjective = ['shapeshifting','terrible','unmatched','ancient', 'unyelding', 'indestructible']
let title = ['master of darkess','scourge of the land','flay of the gods', 'general of the undead', 'Eye-That-Sees-All']
let hero = ['samurai warrior','elven prince','paladin of Pelor','hobbit','mystic enchanter'];
let weapon = ['a magic sword','an enchanted bow','a blessed spear','two bloody axes','a sharp shield', 'his undomitable courage'];

story.textContent = "Click the button above to tell a new story each time!.";

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

function result(){
	let textOut = storyText; 
	
	textOut = textOut.replace(/:antagonist:/g, randomValueFromArray (antagonist));
	textOut = textOut.replace(/:adjective:/,  randomValueFromArray (adjective));
	textOut = textOut.replace(/:title:/, randomValueFromArray (title));
	textOut = textOut.replace(/:hero:/, randomValueFromArray (hero));
	textOut = textOut.replace(/:weapon:/, randomValueFromArray (weapon));
	
	story.textContent = textOut;
}