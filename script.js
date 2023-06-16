var i = 0;


function increment() {
    ++i;
    document.getElementById("counter").innerHTML = i;
}

function decrement() {
    i--;
  document.getElementById("counter").innerHTML = i;
}

function reset() {
    i = 0;
    
    document.getElementById("counter").innerHTML = i;
}
