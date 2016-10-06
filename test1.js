'use strict';
class Pocemon {
	constructor(name, level) {
		this.name = name;
		this.level = level;
	}
	
	show() {
		console.log('Name:', this.name, 'Level: ', this.level);
	}
}

class PocemonList {
	constructor( ...params) {
		this.list = params;
	}
	add(member) {
		this.list.push(member);
	}
	show(){
		console.log(this.list);
	}
}

var first = new Pocemon('Mike', 0);
var second new Pocemon('Molly', 1);
var second new Pocemon('Anny', 2);
var myList = new PocemonList(first, second);
first.show();
myList.show();