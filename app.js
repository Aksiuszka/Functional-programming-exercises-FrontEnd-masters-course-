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
function sum (numbers) {
    if (numbers.length === 1) return numbers[0];
    else return numbers[0] + sum(numbers.slice(1));
  }
  
  const cosik = sum([0,1,2,3,4]);
  console.log(cosik)

  //fibbonacci

  function fibbo(n){
      if(n===1) return 1;
      if(n===0) return 0;
      else return fibbo(n-2) + fibbo(n-1);
  }
  console.log(fibbo(1));
  console.log(fibbo(6));