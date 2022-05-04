const Btn = document.getElementById("btn");
const answer = document.querySelector(".answer");
Btn.onclick = () => {
  answer.classList.toggle("visible");
};
