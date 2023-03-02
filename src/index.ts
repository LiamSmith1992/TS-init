let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level;


function render(document: string) {
  console.log(document);
}

let numbers: number[] = [];
numbers.forEach(n => n.toExponential)


// tuple set requirements for this variable for what is inside it's array
let user: [number, string] = [1, 'yo']



// enums 
// enum Size { Small = 's' , Medium = 'm', Large = 'l' };
enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);
