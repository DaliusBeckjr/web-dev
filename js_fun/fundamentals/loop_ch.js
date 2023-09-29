// Using a loop write code that will console.log all of the odd values from 1 up to 20.
function odds(start, end) {
    for (i=start; i<end; i+=2) {
        console.log(i);
    }
}

// console.log(odds(1,20));

// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly 
// divisible by 3 from 100 down to 0.
function multiple_of_three() {
    for (let i=100; i>0; i--) {
        if (i%3 == 0) {
            console.log(i);
        }
    }
}

// console.log(multiple_of_three());

// print the sequence
// Using a loop write code that will console.log the values in this 
// sequence 4, 2.5, 1, -0.5, -2, -3.5.

function sequence() {
    for (let i=5.5; i> -5; i-=1.5) {
        console.log(i);
    }
}

// console.log(sequence());