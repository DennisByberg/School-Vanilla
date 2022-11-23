// What will be in console.log()?

var greeting = "Good bye world!";
{
  let greeting = "Hello World";
}
console.log(greeting);

/* Answer ~> 
"Good bye world!" because the text only changes inside the code block and not outside...
*/
