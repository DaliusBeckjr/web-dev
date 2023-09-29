// there are more than one type of loops we can implement into our programs
// there is the for loop as we know and another called the "while loop"
// which is quite similar to the for loop for example:

// regular for loop 
function one_loop() {
    for ( i=0; i<3; i++) {
        console.log(i)
    }
}

// while loop:
function loop_two() {
    let i = 0;
    while (i<3) {
        console.log(i);
        i++;
    }
}