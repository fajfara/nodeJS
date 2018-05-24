/*

function sayHi(){
    console.log('hi');
}

sayHi();

// function expression
var sayBye = function() {
    console.log('bye');
}

sayBye();

*/

// Exporting functions, variables

// add the stuff.js to the main file
/*
var stuff = require('./stuff');
var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('Mary');
var jimi = new Person('jimi');

var people = [james, mary, jimi];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg) 
    });
});

james.emit('speak', 'Hey dudes i like guitar');
jimi.emit('speak', 'I want food');



console.log(stuff.counter(['anze', 'james', 'ryan']));
console.log(stuff.adder(10,3232));
console.log(stuff.pi);
*/










