var mycar = {
	model : 'mustang',
	color : 'red',
	year : 1900
};

console.log(mycar.color);
//Objects are also called as associative arrays
console.log(mycar['model']);

//Any Javascript key will be converted to a string
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj);

function showProperties(obj, objName){
	var result = '';
	for(var i in obj){
		if(obj.hasOwnProperty(i)){
			result += objName + '.'+i+ ' = '+obj[i]+'\n';
		}
	}
	return result;
}
console.log('\n\n\n');
console.log(showProperties(myObj, 'Karthick'));

// Animal properties and method encapsulation
var Animal = {
  type: 'Direwolf', // Default value of properties
  displayType: function() {  // Method which will display type of Animal
    console.log(this.type);
  },
  add: function(a, b){
  	console.log(a+b);
  }
};

// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Werewolf';
fish.displayType(); // Output:Fishes
fish.add(500, 6000);

var d = Date.prototype;
Object.defineProperty(d, 'year', {
  get: function() { return this.getFullYear(); },
  set: function(y) { this.setFullYear(y); }
});

var now = new Date();
console.log(now.year); // 2000
now.year = 2001; // 987617605170
console.log(now);

/* JavaScript objects are a reference type. 
Two distinct objects are never equal, even if they have the same properties.*/

// Two variables, two distinct objects with the same properties
var fruit = {name: 'apple'};
var fruitbear = {name: 'apple'};

fruit == fruitbear; // return false
fruit === fruitbear; // return false
// Two variables, a single object
var fruit = {name: 'apple'};
var fruitbear = fruit;  // assign fruit object reference to fruitbear

// here fruit and fruitbear are pointing to same object
fruit == fruitbear; // return true
fruit === fruitbear; // return true
fruit.name = 'grape';
console.log(fruitbear);    // yields { name: "grape" } instead of { name: "apple" }

/*JavaScript remains prototype-based).

When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain.*/