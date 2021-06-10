// Write a program to find a largest number among two integer values without using >< symbols and inbuilt functions like Max or Min.
// Example: Input a=1 b=2 Output: The largest number is 2

function getLargest(a, b) {
    return a-b;
}
const a = 10;
const b = -10;
const res = (getLargest(a, b)).toString();
if(res.includes('-'))
    console.log(`The largest number is ${b}`)
else
    console.log(`The largest number is ${a}`)