import { Animal, Dog, Cat, Mouse } from './class.js'

const app = document.getElementById("app");
const button = document.querySelector("button");
button.addEventListener("click", function(e){
  e.preventDefault;
  button.style.display = "none"
  app.innerHTML = `
    <div class="section dogSection">
      <p>🐶</p>
      <input type="text" placeholder="what's my name?">
    </div>
    <div class="section catSection">
      <p>🐱</p>
      <input type="text" placeholder="what's my name?">
    </div>
    <div class="section mouseSection">
      <p>🐭</p>
      <input type="text" placeholder="what's my name?">
    </div>
  `
})

