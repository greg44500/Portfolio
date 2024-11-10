const section = document.querySelector("#formation");
const button = document.querySelector(".button");
console.log(button);
console.log(section);

button.addEventListener("click", handleAnimation); // 'click' en minuscules

function handleAnimation() {
  if (section.classList.contains("animate")) {
    section.classList.remove("animate");
  }else  
     {
        section.classList.add('animate')
    }
  
}

