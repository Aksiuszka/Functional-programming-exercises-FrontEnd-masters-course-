//ex1
function sayHello(name) {
	return `Hello, ${name}`;
}
console.log(sayHello('Zuza'));
//trad
let name = 'Iza';
function greet(name) {
	console.log(`Hej, ${name}`);
}
greet(name);
//recursion
function sum(numbers) {
	if (numbers.length === 1) return numbers[0];
	else return numbers[0] + sum(numbers.slice(1));
}

const cosik = sum([0, 1, 2, 3, 4]);
console.log(cosik);

//fibbonacci

function fibbo(n) {
	if (n === 1) return 1;
	if (n === 0) return 0;
	else return fibbo(n - 2) + fibbo(n - 1);
}
console.log(fibbo(1));
console.log(fibbo(6));

// filter

function filter(predicateFn, array) {
	if (length(array) === 0) return [];
	const firstItem = head(array);
	const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
	return concat(filteredFirst, filter(predicateFn, tail(array)));
}
function isEven(n) {
	return n % 2 === 0;
}
const odds = filter((n) => {
	if (n % 2 !== 0) return true;
	else false;
}, wholes);

const greaterThanFour = filter((el) => {
	return el > 4;
}, wholes);
// map
function map(fn, array) {
	if (length(array) === 0) return [];
	return [fn(head(array))].concat(map(fn, tail(array)));
}
// Concatenate two arrays into a new single array
function concat(array1, array2) {
	return array1.concat(array2);
}
// Return the number of items in an array
function length(array) {
	return array.length;
}
// Return the first item in an array
function head(array) {
	return array[0];
}
// Return the rest of an array after the first item
function tail(array) {
	return array.slice(1);
}
fizzBuzz = map((n) => {
	if (n % 3 === 0) return 'fizz';
	if (n % 5 === 0) return 'buzz';
	else return n;
}, wholes);
function reduce(reducerFn, initialValue, array) {
	if (length(array) === 0) return initialValue;
	const newInitialValue = reducerFn(initialValue, head(array));
	return reduce(reducerFn, newInitialValue, tail(array));
}
sum = reduce(
	(accumulator, value) => {
		return accumulator + value;
	},
	0,
	wholes
);
