// Try playing around with modifying properties and adding ones to see what happens
/*const car: { type: string, model: string, year: number } = {
    type: "Honda",
    model: "Element",
    year: 2009
};

console.log(car);

Type Inference
TypeScript can infer the types of properties based on their values.


const car = {
    type: "Honda",
};
car.type = "Ford"; // no error
car.type = 2; // Error: Type 'number' is not assignable to type 'string'.


Optional Properties
Optional properties are properties that don't have to be defined in the object definition.

Example without an optional property
const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
    type: "Toyota",
};
car.mileage = 2000;

const car: { type: string, mileage?: number } = { // no error
    type: "Honda"
};
car.mileage = 2000;

Index Signatures
Index signatures can be used for objects without a defined list of properties.*/

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.