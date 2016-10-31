'use strict';
class Pokemon {
	constructor(...params) {

		if (params.length == 1 ) {
			params = params[0];
			if (typeof params === "object") {
				this.name = params.name;
				this.level = params.level;
			}
			else console.log('Wrong Pokemon params');
		}
		else if ( params.length == 2){
			this.name = params[0];
			this.level = params[1];
		}
		else console.log('Wrong Pokemon params');

	}
	
	show() {
		console.log(`Name: ${this.name}, Level: ${this.level}`);
	}

}

class PokemonList extends Array {

	add(obj) {
		
		this.push(new Pokemon(obj));
	}

	show(){

		console.log(`Number of pocemons in the list: ${this.length}`);
		this.forEach(item => {

			console.log(item);
		});
		//console.log('List of pocemons is:',this.list);

	}

	max() {
		
		if (this.length == 0){ return 'List is empty';}
		if (this.length == 1){ return this[0];}
		var maxVal = this[0];
		this.forEach(item => {if (maxVal.level < item.level) {
			maxVal = this[i];
		}});

		return maxVal;
	}
	valueOf() {
		if (this.length == 0){ return null;}

		return this.max().level;
	}
}

const pocemonsA = [
	{name: 'Molly', level: 1},
	{name: 'Mike', level: 0},
	{name: 'Anny', level: 2}
];

const pocemonsB = [
	{name: 'Gun', level: 12},
	{name: 'Noni', level: 10},
	{name: 'Anzor', level: 7},
	{name: 'Sumo', level: 9}
];
var x = new Pokemon('Ivan', 9000);
x.show();


const lostList = pocemonsA.map(value => new Pokemon(value));

console.log('lostList:', lostList);
const lost =new PokemonList(...lostList);
console.log('New');
const list =new PokemonList();

list.add(new Pokemon('Poky', 1));
list.show();
console.log('Lost pocemones list');
lost.show();

var found = new PokemonList();
pocemonsB.forEach((value, index, pocemonsB) => found.add(value));
console.log('Found pocemones list');
found.show();
console.log(`The value is ${found.valueOf()}`);


var pocemoneTransfer = function (list1, list2, index) {
	//list1 - where you transfer {found}
	//list2 - from whwrw you transfer (lost)
	//index - index of pocemone from list2
	list1.add(list2[index]);
	list2.splice(index, 1);
}
console.log('Transfer pocemone with index 2 from lost to found');
pocemoneTransfer(found, lost, 2);
console.log('Found pocemones list');
found.show();
console.log('Lost pocemones list');
lost.show();
console.log('Maximum level of found is', found.max());
console.log(lost.valueOf());
console.log(found.valueOf());


