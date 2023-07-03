// Variable declarartion
var sample = "sadfsdv";
let insertvarname;

// ------------------
// Constant variable declaration where the value of the variable can't be changed.
// Javascript is like python in the case where you need not deliberately initialise a variable and directly use in assignment statement.
// Variables can be declared with "var" "let" "const"
notinit = "True"
console.log(notinit)
const sample1 = "asdfvdas"

/*
When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.
*/

// The line 'sample1 = "adfdsa"' would be throwing ERROR as we could not overwrite const variable.

// ------------------
// Simple expressions
// Variable default declaration with value and printing the addition expression.
let a=1, b=12;
console.log(a+b)

// ------------------
// Single line comment --> // 
// Multi line comment:-
/* dskjvkjav
sdkjvndjvnds
vsdkjvbndsjvndsv*/


// Javascript treats the character "$" as a letter. Hence the below statement is valid.
$ = "asddsav"
console.log($)


// For the variables that were declared using let:-
// Variables defined with let cannot be Redeclared
// Variables defined with let must be Declared before use
// Variables defined with let have Block Scope

{
    let myscope = "only insisde this braces"
}
// console.log(myscope) --> would throw ERROR

// ----------------
// Operators in JS
let aa=1, bb=2
c = aa<bb
console.log(c)

// String addition - concatenation
ms1 = "ASDfasdv", ms2 = "dsafdsabbr"
ms3 = ms1+ "111111 " +ms2
console.log(ms3)

// Logical Operators
console.log(ms1 < ms2 && ms1 > ms2 || ms1 > ms1 )
alert("asdfsdv")

// DATA TYPES
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let bool1= true || false

// Object: Kind of like a dictionary
const person = {firstName:"John", lastName:"Doe"};
const my_dict = {"key1" : "vasdv", asdfas : 1}
console.log("MY DICTTTTTTT" , my_dict,(my_dict["asdfas"]+1))
// Array object:
const myarr = ["asdf", 1,"dsf", 2.3]
console.log("My ARRAAAYYYY", myarr[0], myarr)

// Date object:
// Create date object from "Date" class which inputs <yyyy-mm-dd> using the "new" keyword.
const date = new Date("2022-03-25");
const my_date = new Date("year-month")

for (let i=0; i<10; i++)
{
    console.log(i)
}

// FUNCTIONS
// Typical way of declaring and calling a function
sample_fun();
function sample_fun()
{
    console.log("inside the sample function")
}
sample_fun();

// Function Expression - The difference from above method is that the function can be called only after the expression.
let my_fun = function() {
    console.log("I am in a funciton expression")
}
my_fun();

// ARROW functions are simplified syntaxes for writing functions based on the usecase we can select if we would want it or not. In the below example if the function "hello" is called the default value of "Hello World" would be printed. Anatomy --> <functionname> = (<parameters>) => <return statement>
hello = () => console.log("Hello World!");
hello();

// DEclaring an arrow function and returning value of Object type
const person1 = (firstName, lastName) => ({ first: firstName,
last: lastName
    });
    console.log(person1("Flad", "Hanson"));
    
// Now wrt development
// There are two types of functions to use to call APIs
// Sync:-
fetch("https://api.randomuser.me/?nat=US&results=1")
      .then(res => res.json())
      .then(json => json.results)
// The logic is to wait until there is response and "then" move to next func and "then" move to the next. The operations to be performed are basically chained together using ".then".

// Async/Await:-

const my_async_fun = async () => {
    try{
        let response = await fetch("https://api.randomuser.me/?nat=US&results=1")
        let results = await response.json()
        console.log(results)
    }
    catch(error)
    {
        console.error(error)
    }
}
my_async_fun();

// The part where "fetch" runs has a promise to be resolved. so we need to wait until it is resolved to then assign the o/p to the variable. Similarly for res.json as well.

// -------------
// Classes and Objects in JS
class My_New_Class {
    constructor(id,name) {
        this.id = id
        this.name = name
    }
    print() {
        console.log("------------------------------")
        console.log(this.id,this.name)
    }
}
new_obj = new My_New_Class(1,"Vijay")
new_obj.print();

// ------------------------------
// FUNCTIONAL Programming
console.log("------------------------------")
fun_array = ["value1", (value) => console.log(value)]
fun_array[1](fun_array[0])
// In the above code I have defined a function and stred it in an array and can refer to it as per the array index. Functions can be stored to a variable.


// JSX - THis is a language that is a combination of javascript and XML( the HTML kind of lang). JSX is used in react for better reasons.


// ------------------------------------
/* Below mentioned Code is a sample react code to make use of JS, render components on UI */

function singlecomp (valuetoprint) {
  return(<h1> sample value here {valuetoprint} </h1>)
}
export function Menu (dataprops) {
  // write logic code here and populate the return part which has the JSX code to render.
  // Creating an array that creates a list of components that has to be rendered.
  my_comp_array = []
  // Looping through to create components and store in my_comp_array
  for (let i =0; i<5; i++ )
  {
      // This calls the functional component 'singlecomp' for every value of i and the whole component is pushed to the array.
      my_comp_array.push(singlecomp(i))
  }
  return(
    <div>
    // The array of components are rendered when referred asper below code.
    {my_comp_array}
    </div>  )
}

export function App(props) {
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      // THe menu component is being called here.
      <Menu/>
    </div>
  );
}

// Log to console
console.log('Hello console')




