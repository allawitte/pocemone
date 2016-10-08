'use strict';
class Pocemon {
	constructor(pocemon) {
		this.name = pocemon.name;
		this.level = pocemon.level;
	}
	
	show() {
		console.log('Name:', this.name, 'Level: ', this.level);
	}
	valueOf() {
		return this.level;
	}
}

class PocemonList {
	constructor(params = []) {
		console.log('params:', params);
		this.list = params;
	}
	add(obj) {
		
		this.list.push(new Pocemon(obj));		
	}
	delete(index) {
		if(index < 0 || index >= this.list.length) {
			console.log('Pocemone with index ${index} do not exist');
			}
		else this.list.splice(index, 1);
	}
	show(){
		console.log('List of pocemones is:',this.list);
		console.log('Number of pocemones in the list:', this.list.length);
	}
	get(index) {
		if(index < 0 || index >= this.list.length) {
			console.log('Pocemone with index ${index} do not exist');
			}
			else return this.list[index];
		
	}
	max() {
		
		if (this.list.length == 0){ return 'List is empty';}
		if (this.list.length == 1){ return this.list[0];}
		var maxVal = this.list[0];
		for (let i = 1; i < this.list.length; i++) {
			if (maxVal.valueOf() < this.list[i].valueOf()) {
				maxVal = this.list[i];
			}
		}
		return maxVal;
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


const lostList = pocemonsA.map(value => new Pocemon(value));
console.log('lostList:', lostList);
const lost =new PocemonList(lostList);
console.log('Lost pocemones list');
lost.show();

var found = new PocemonList();
pocemonsB.forEach((value, index, pocemonsB) => found.add(value));
console.log('Found pocemones list');
found.show();


var pocemoneTransfer = function (list1, list2, index) {
	//list1 - where you transfer {found}
	//list2 - from whwrw you transfer (lost)
	//index - index of pocemone from list2
	list1.add(list2.get(index));
	list2.delete(index);
}
console.log('Transfer pocemone with index 2 from lost to found');
pocemoneTransfer(found, lost, 2);
console.log('Found pocemones list');
found.show();
console.log('Lost pocemones list');
lost.show();
console.log('Maximum level of found is', found.max());