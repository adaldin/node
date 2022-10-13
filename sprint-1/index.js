// N1
function greeting(name) {
  console.log(name);
}

greeting("Maria");

// N2
function templateGreeting(name) {
  console.log(`Hello ${name}!`);
}
templateGreeting("Ana");

function fromTemplate() {
  return 30;
}
console.log(`La edad de María es ${fromTemplate()} años.`);

// N3
const fcArr = [
  count(),
  count(),
  count(),
  count(),
  count(),
  count(),
  count(),
  count(),
  count(),
  count(),
];

function count() {
  let count;
  for (let i = 0; i <= 9; i++) {
    if (i === 9) {
      console.log(i, `\n--`);
    } else {
      console.log(i);
    }
  }
}

function checkFcArr() {
  for (let i = 0; i <= fcArr.length; i++) {
    fcArr[i];
  }
}

let anonymous = function (name) {
  console.log(`Hello ${name}, I'm spying you!`);
};

anonymous("Manel");
