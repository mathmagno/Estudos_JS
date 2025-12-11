//Arrays
const arr = [1,2,3];
console.log(arr);

arr.pop();
arr.push(4);

console.log(arr);

const mapa = new Map<string, number>();

mapa.set("idade", 25)
mapa.set("nota", 9)
mapa.set("pizza", 2)

console.log(mapa.get("idade"))