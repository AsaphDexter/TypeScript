/*TypeScript Enums
An enum is a special "class" that represents a group of constants(unchangeable variables).

Enums come in two flavors string and numeric.Lets start with numeric.

Numeric Enums - Default
By default, enums will initialize the first value to 0 and add 1 to each additional value:*/
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
var currentDirection = CardinalDirections.North;
// North is the first value so it logs '0'
console.log(currentDirection);
