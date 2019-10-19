//String:

//- .repeat(times: number): string - Writes to console your string n times // 'test'.repeat(5)

String.prototype.repeat = function(number) {
  var result = "";
  for (var i = 0; i < number; i++) {
    result += this;
  }
  return result;
};
console.log("new".repeat(5));

//- .replaceAt(substring: string, replacer: string): string - replaces a given substring by replacer if substring is present

var str = "Some string";
String.prototype.replaceAt = function(substring, replacer) {
  if (this.includes(substring)) {
    return this.replace(substring, replacer);
  } else {
    console.log("doesn't exist");
  }
};
console.log(str.replaceAt("str", "new"));

//- .countSymbols(symbol: string): number - return amount of symbols in a given string // 'test'.countSymbols('t')

String.prototype.countSymbols = function(symbol) {
  return this.split(symbol).length - 1;
};

console.log("test".countSymbols("t"));

//- .repeatSubstring(substring: string, times): string - Returns a given substring if is present with multiplication by times

String.prototype.repeatSubstring = function(substring, times) {
  var result = "";
  if (this.includes(substring)) {
    for (var i = 0; i < times; i++) {
      result += substring;
    }

    return this.replace(substring, result);
  } else {
    console.log("doesn't exist");
  }
};

console.log("string".repeatSubstring("in", 5));

//- .hasVowels(string: string): boolean - Returns true if string has vowels

String.prototype.hasVowels = function() {
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < this.length; i++) {
    if (vowels.indexOf(this[i].toLowerCase()) != -1) {
      console.log(this[i]);
      return true;
    }
  }
  return false;
};

console.log("some string".hasVowels());

//- .hasСonsonants(string: string): boolean - Returns true if string has consonants

String.prototype.hasСonsonants = function() {
  var consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  for (var i = 0; i < this.length; i++) {
    if (consonants.indexOf(this[i].toLowerCase()) != -1) {
      return true;
    }
  }
  return false;
};

console.log("test".hasСonsonants());

//- .normalize(string: string): string - Returns a given substring in a lower case

String.prototype.normalize = function(substring) {
  if (this.includes(substring)) {
    return this.replace(substring, substring.toLowerCase());
  } else {
    console.log("doesn't exist");
  }
};

console.log("tESt".normalize("ES"));

console.log("Array");
// Array
// - .hasNumber(number: Array<number>): boolean - Returns true if a given array has a number from arguments
var arr = [1, 3, 6, 8, 12];

Array.prototype.hasNumber = function(number) {
  return this.some(a => a == number);
};

console.log(arr.hasNumber(6));
// - .getOdd(): Array<number> - Returns a new array with only odd numbers

Array.prototype.getOdd = function() {
  return this.filter(a => a % 2 == 0);
};

console.log(arr.getOdd());

// - .getEven(): Array<number> - Returns a new array with only even numbers

Array.prototype.getEven = function() {
  return this.filter(a => a % 2 != 0);
};

console.log(arr.getEven());

// - .concatenate(Array<number>, ...): Array<number> - Returns a new array from all given arrays in arguments

Array.prototype.concatenate = function(...numbers) {
  return [...this, ...numbers];
};

console.log(arr.concatenate(4, 5, 6, 7, 7));

// - .concatenateUnique(Array<number | string>, ...): Array<number | string> - Returns a new array from all given arrays in arguments with unique records

Array.prototype.concatenateUnique = function(...numbers) {
  var arr1 = [...this, ...numbers];
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    if (!result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
};

console.log(arr.concatenateUnique(4, 5, 6, 7, 7, 4));

// Object
console.log("Object");
// - .getKeys(): Array<string> - returns an array of objects keys (don't use Objects.keys() :))

const object1 = {
  a: "string",
  b: 42,
  c: false
};

Object.prototype.getKeys = function() {
  var result = [];
  for (var i in this) {
    result.push(i);
  }
  return result;
};

console.log(object1.getKeys());
// - .getValues(): Array<any> - returns an array of values

Object.prototype.getValues = function() {
  var result = [];
  for (var i in this) {
    result.push(this[i]);
  }
  return result;
};

console.log(object1.getValues());

// - .getKeyValuePair(key: string): string - returns a key"value pair in the next format "[key] : value"

Object.prototype.getKeyValuePair = function(key) {
  return this[key];
};

console.log(object1.getKeyValuePair("a"));

// - .createShallowCopy(sourceObj: object): object - returns "shallow" copy of provided object. The references of the first level must be copied, if there are references deeped, provide a link, not a copy.

Object.prototype.createShallowCopy = function() {
  var copyObj = Object.assign({}, this);
};

console.log(object1.createShallowCopy());

// - .createDeepCopy(sourceObj: object): object - returns a deep copy of provided object. Assume that field may contain other references, they also must be deep copied. Do not use Object.assign() method.

// - .createFlatObject(providedObj: object): object - returns a new object with "flat" structure - all field deeper than 1 level must be moved to the first level. If you have fields with the same names rename them using name of the parent as prefix:
// ```
// 	{
// 		field1: {
// 			name: 'User1',
// 			age: 20
// 		},
// 		field2: {
// 			name: 'User2',
// 			age: 22
// 		},
// 		field3: {
// 			name: 'User3',
// 			age: 24
// 		}
// 	}
// 	=>
// 	{
// 		field1_name: 'User1',
// 		field1_age: 20
// 		...
// 	}
// ```

// - .getPropertyValue(obj: object): any - returns a value of provided key name. In case if you have duplicated results (see example above), return an array of values. Throw an exception in case if you don't have any results.
