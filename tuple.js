// define our tuple
/*let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

console.log(ourTuple);*/
/*As you can see we have a number, boolean and a string.
But what happens if we try to set them in the wrong order:*/
// define our tuple
/*let ourTuple: [number, boolean, string];

// initialize incorrectly throws an error
ourTuple = [false, 'Coding God was mistaken', 5];

console.log(ourTuple);

Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.

Readonly Tuple
A good practice is to make your tuple readonly.

Tuples only have strongly defined types for the initial values:*/
/*// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);

You see the new valueTuples only have strongly defined types for the initial values:*/
// define our readonly tuple
/*const ourReadonlyTuple: readonly [number, boolean, string] = [44, true, 'The Real Coding God'];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');*/
/*Named Tuples
Named tuples allow us to provide context for our values at each index.*/
/*const graph: [x: number, y: number] = [55.2, 41.3];

Named tuples provide more context for what our index values represent.

Destructuring Tuples
Since tuples are arrays we can also destructure them.
*/
var graph = [55.2, 41.3];
var a = graph[0], b = graph[1];
console.log(a);
console.log(b);
