function FizzBuzz() {
    var i;
    var output;
    for (i = 1; i < 256; i++) {        
        if (i%11 == 0) {
            // If i is a multiple of 11, print "Bong" and nothing else

            output = "Bong";
        } else {
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

            if (i%7 == 0) {
                output = output + "Bang";     
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

        // If i is a multiple of 17, reverse the order of any Fizz, Buzz, Bong etc
        // which are printed
        if (i%17 == 0 && output.length >= 8) {
            var j;
            var temp = "";
            for (j = output.length - 4; j >= 0; j -= 4) {
                temp = [temp, output.slice(j, j+4)].join('');                
            }
            output = temp;
        }

        // If none of the above rules have applied, just print i!
        if (output == "") {
            output = i.toString();
        }

        console.log(output);
    }
}

FizzBuzz();