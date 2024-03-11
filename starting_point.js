function makeSmallBox(text, old = false) {
  let minibox = document.createElement("div");
  minibox.className = "minibox";
  if (old) {
    minibox.classList.add("old");
  } else {
    minibox.classList.add("new");
  }

  let p = document.createElement("p");
  p.append(text);
  minibox.append(p);

  return minibox;
}

function add100() {
  for (let i = 0; i < 100; i++) {
    addSmallBox(true);
  }
}

let container = document.querySelector(".container");
let nextBoxId = 1;

function addSmallBox(old = false) {
  if (!container) {
    console.log("did not find container, quitting");
    return;
  }
  container.append(makeSmallBox(nextBoxId++, old));
}

add100();
