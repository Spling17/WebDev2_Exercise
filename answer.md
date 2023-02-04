# Javascript Test

<small>Just a quick test to test your javascript understanding.</small>
___

## 1) What is ES6?

```bash
//Write your answer here:
ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015
```

## 2) Name 3 examples of ES6 features

```bash
//Write your answer here:
1. let and const keywords
2. Arrow Functions
3. Template Literals
```

## 3) What is the difference between let and const?

```bash
//Write your answer here:
"const" is a signal that the identifier won't be reassigned. "let" is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it's defined in, which is not always the entire containing function
```

## 4) How do you access object values? Give 3 examples

```bash
//Write your answer here:
1. Dot property accessor: object. property.
2. Square brackets property accessor: object['property']
3. Object destructuring: const { property } = object.
```

## 5) What does setInterval and setTimeout do?

```bash
//Write your answer here:
"The setInterval() function" is commonly used to set a delay for functions that are executed again and again, such as animations. You can cancel the interval using clearInterval(). If you wish to have your function called once after the specified delay, use setTimeout() 

"setTimeout" is the global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

```

## 6) What are promises?

```bash
//Write your answer here:
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
```

## 7) Convert this async function to async/await

```bash
async function getQuote(){
  try {
    const quote = await getQuote();
    console.log(quote)
  } catch(error) {
    console.error(error)
  }
}
```

## 8) Convert this code to arrow function

```bash
const greeting = (firstname, lastname) => `Hi ${firstname} ${lastname}`;
```

## 9) Explain what a callback function is

```bash
//Write your answer here:
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
```

## 10) What does the functions pop and push do to an array?

```bash
//Write your answer here:
"The pop() method" in JavaScript removes an item from the end of an array, whereas "the push() method" adds an item to the end of an array. The returning value of the pop() method is the item that is removed from the array. The returning value of the push() method is the number of elements in the array after the new element has been added.
```

## 11) What is the expected answer to this code?

```bash
let string1 = "";
let object1 = {a:1, b:2, c:3};

for(const property1 in object1){
    string1 += object1[property1]
}

console.log(string1);

//Write your answer here:
answer is "123"

```

## 12) What data type would Array.map() and Array.filter() return?

```bash
//Write your answer here:
"The map() method" creates a new array populated with the results of calling a provided function on every element in the calling array. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.

"The filter() method" creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. If no elements pass the test, an empty array will be returned.
```

## 13) What data type would Array.includes() and Array.some() return?

```bash
//Write your answer here:
"The includes() method" determines whether an array includes a certain value among its entries, returning true or false as appropriate. A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).

"The some() method" tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
```

## 14) Write down the 4 main methods of rest api

```bash
//Write your answer here:
1. GET
2. POST
3. PUT
4. DELETE
```

## 15) What is the difference between JSON and a JavaScript object?

```bash
//Write your answer here:
JSON cannot contain functions. JavaScript objects can contain functions. JSON can be created and used by other programming languages. JavaScript objects can only be used in JavaScript
```