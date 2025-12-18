/*
 * Variable names must be camelCase, it's can be start with:
 *  $, _, Characters
 * Valid Variable Names:
 *  userName, numberGroup5, $kindOfOptional, _intervalValue
 *
 * InValid Variable Names:
 *  Snake_Case, start with - (Dashes), or Whitespace in name
 *  and don't use reserved keywords
 * */
const defaultResult = 0;
let currentResult = defaultResult;

// do mathematical operaitors
currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
