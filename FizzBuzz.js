function FizzBuzz() {
    var i;
    var output;
    for (i = 1; i < 106; i++) {
        // If i is a multiple of only 7 (not 3 or 5), output "Bang".
        // If it is also a multiple of 3 and/or 5 then append "Bang" to 
        // whatever output would have been produced 
        if (i%7 == 0) {
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
        // If i is not a multiple of 7, the usual FizzBuzz rules apply    
        } else {
            if (i%3 == 0 && i%5 == 0) {
                output = "FizzBuzz";
            } else if (i%3 == 0) {
                output = "Fizz";
            } else if (i%5 == 0) {
                output = "Buzz";
            } else {
                output = i.toString();
            }
        }
        console.log(output);
    }
}

FizzBuzz();