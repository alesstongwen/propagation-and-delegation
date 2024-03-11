// your solution here
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  container.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "p") {
      event.target.innerText = Number(event.target.innerText) * 2;
    } else {
      const clickedBox = event.target.closest(".minibox");
      if (clickedBox) {
        if (clickedBox.classList.contains("old")) {
          clickedBox.remove();
        } else if (clickedBox.classList.contains("new")) {
          clickedBox.classList.remove("new");
          clickedBox.classList.add("old");
        }
      } else if (event.target === container) {
        addSmallBox();
      }
    }
  });
});
