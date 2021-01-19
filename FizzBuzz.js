function FizzBuzz(maxNum) {

    // This line won't currently work - placeholder
    // Don't know how to read in console input yet!
    var maxNum = console.prompt("Please enter the maximum number you would like to print to: ");

    // Only bother if the user enters an integer
    if (maxNum.isInteger()) {

        var i;    
        for (i = 1; i < maxNum + 1; i++) {  
            var output = [];
            
            if (i%11 == 0) {
                // If i is a multiple of 11, print "Bong" and nothing else

                output.push("Bong");
            } else {
                // If i is a multiple of 3, output Fizz 
                // Divisible by 5, output Buzz
                // Both, FizzBuzz

                if (i%3 == 0 && i%5 == 0) {
                    output.push("Fizz");
                    output.push("Buzz");
                } else if (i%3 == 0) {
                    output.push("Fizz");
                } else if (i%5 == 0) {
                    output.push("Buzz");
                } 

                // If i is a multiple of only 7 (not 3 or 5), output "Bang".
                // If it is also a multiple of 3 and/or 5 then append "Bang" to 
                // whatever output would have been produced 

                if (i%7 == 0) {
                    output.push("Bang");     
                }     
            } 

            // If i is a multiple of 13, print Fezz instead of the number
            // If a multiple of the others as well, add Fezz before first instance of 'B'
            // or at the end if there are none.

            if (i%13 == 0) {
                // Find first element which contains B
                const ind = output.findIndex(element => element.includes("B"));

                // If it exists, put Fezz before it. Otherwise, output is either empty or
                // just doesn't contain words beginning with B. So append Fezz to the end
                if (ind != null) {
                    output.splice(ind, 0, "Fezz");
                } else {
                    output.push("Fezz");
                }
            }

            // If i is a multiple of 17, reverse the order of any Fizz, Buzz, Bong etc
            // which are printed

            if (i%17 == 0) {
                output.reverse();
            }

            // If none of the above rules have applied, just print i!
            if (output.length == 0) {
                output.push(i);
            }

            console.log(output.join(''));
        }
    }    
}

FizzBuzz();