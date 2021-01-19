function FizzBuzz() {
    var i;
    var output;
    for (i = 1; i < 201; i++) {        
        if (i%11 == 0) {
            // If i is a multiple of 11, print "Bong" and nothing else

            output = "Bong";
        } else if (i%7 == 0) {
            // If i is a multiple of only 7 (not 3 or 5), output "Bang".
            // If it is also a multiple of 3 and/or 5 then append "Bang" to 
            // whatever output would have been produced 

            if (i%3 == 0 && i%5 == 0) {
                output = "FizzBuzz";
            } else if (i%3 == 0) {
                output = "Fizz";
            } else if (i%5 == 0) {
                output = "Buzz";
            } else {
                output = "";
            }
            output = output + "Bang";          
        } else {
            // If i is not a multiple of 7, the usual FizzBuzz rules apply  

            if (i%3 == 0 && i%5 == 0) {
                output = "FizzBuzz";
            } else if (i%3 == 0) {
                output = "Fizz";
            } else if (i%5 == 0) {
                output = "Buzz";
            } 
        }

        // If i is a multiple of 13, print Fezz instead of the number
        // If a multiple of the others as well, add Fezz before first instance of 'B'
        // or at the end if there are none.
        if (i%13 == 0) {
            if (output == "") {
                output = "Fezz";
            } else if (output.includes("B")) {
                var pos = output.indexOf("B");
                output = [output.slice(0, pos), "Fezz", output.slice(pos)].join('');                
            } else {
                output = output + "Fezz";
            }
        }

        if (output == "") {
            output = i.toString();
        }

        console.log(output);
    }
}

FizzBuzz();