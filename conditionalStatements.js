// Objective 
// In this challenge, we're getting started with conditional statements. Check out the Tutorial tab for learning materials and an instructional video!

// Task 
// Given an integer, , perform the following conditional actions:

// If  is odd, print Weird
// If  is even and in the inclusive range of  to , print Not Weird
// If  is even and in the inclusive range of  to , print Weird
// If  is even and greater than , print Not Weird
// Complete the stub code provided in your editor to print whether or not  is weird.

// Input Format

// A single line containing a positive integer, .

// Constraints

// Output Format

// Print Weird if the number is weird; otherwise, print Not Weird.

// Sample Input 0

function main() {
    const N = parseInt(readLine(), 10);
    if (N % 2 == 0) {
        if (N >= 2 && N <= 5) {
            console.log("Not Weird");
        } else if (N > 20) {
            console.log("Not Weird");
        } else {
            if (N >= 6 && N <= 20) {
                console.log("Weird");
            }
        }

    } else {
        console.log("Weird");

    }
}

//another short answer I could have done 
/*Given an integer, , perform the following conditional actions:

    If n is odd, print Weird
    If n is even and in the inclusive range of 2 to 5, print Not Weird
    If n is even and in the inclusive range of 6 to 20, print Weird
    If n is even and greater than 20, print Not Weird
*/

function main() {
    var N = parseInt(readLine());
    
    if (N%2 != 0 || (N > 5 && N < 21))
        console.log("Weird");
    else
        console.log("Not Weird")

}