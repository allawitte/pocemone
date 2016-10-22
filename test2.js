class Pocemon {
 constructor(pocemon) {
  this.name = pocemon.name;
  this.level = pocemon.level;
 }
}

class PocemonList {
 constructor(params = []) {
  console.log('params:', params);
  this.list = params;
 }
}

const pocemonsA = [
 {name: 'Molly', level: 1},
 {name: 'Mike', level: 0},
 {name: 'Anny', level: 2}
];

const lostList = pocemonsA.map(value => new Pocemon(value));

const lost = new PocemonList(lostList);
const found = new PocemonList();