function countup() {
    for(var i=0; i<3; i++) {
        console.log(i);
    }
    // output: 0, 1, 2 didn't display 3 but counted 0-2 in decending order
}

function countdown() {
    for(var i=10; i>0; i--) {
        console.log(i);
    }
    // output: countdown from 10 to 1 
}

for(var i=12; i>3; i-=2) {
    console.log(i);
}
// this will print 12, 10, 8, 6, 4


for(var i=0.25; i<3; i+=0.5) {
    console.log(i);
}
// this will print 0.25, 0.75, 1.25, 1.75, 2.25, 2.75


console.log(countdown());