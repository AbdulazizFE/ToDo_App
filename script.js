const button = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector("form");
const container = document.getElementById("container");

container.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove();
      break;

    case "icon-angry2 icon":
      eo.target.classList.add("dn");
      const heart = `<span class ="icon-heart"> </span>`;

      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.add("finish");

      eo.target.parentElement.innerHTML += heart;
      break;

    case "icon-heart":
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.remove("finish");

      eo.target.classList.add("dn");

      const addAngry = `
            <span class="icon-angry2 icon"></span>
            
            `;

      eo.target.parentElement.innerHTML += addAngry;
      break;
  }
});

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `
    
    
    <div class="task">

        <p class="task-text"> ${input.value} </p>

    <div>
        <span class="icon-trash icon"></span>
        <span class="icon-angry2 icon"></span>
    </div>

    </div>



    
    `;

  container.innerHTML += task;

  input.value = "";
});
