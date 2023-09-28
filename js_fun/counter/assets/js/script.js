

let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
    count += 1
    console.log(count);
    countEl.innerHTML = count
}