const h3 = {
  element: document.getElementById("h3"),
  text: ['the ', 'horror game', ' of the year'],
  init() {
    let currentLetterId = 0;

    this.element.innerText = "";
    this.text.map((text, id) => {
      [...text].map(char => {
        const letter = document.createElement("span");
        letter.innerText = char;
        if (char != ' ') {
          letter.style.display = "inline-block";
        }
        
        if (id == 1) {
          letter.style.color = "var(--orange)";
        }

        letter.style.visibility = "visible";
        letter.style.animationDelay = `${20 * currentLetterId}ms`
        letter.style.animationPlayState = "running";

        this.element.appendChild(letter);
        currentLetterId++;
      })
    })
  }
}

const h1 = {
  element: document.getElementById("h1"),
  text: "Endless Nightmare",
  init() {
    // let currentLetterId = 0;
    
    [...this.text].map((char, id) => {
      const letter = document.createElement("span");
      letter.innerText = char;
      letter.style.display = "inline-block";

      if (char == ' ') {
        const breakRow = document.createElement("br");
        this.element.appendChild(breakRow);
      }

      letter.style.animationDelay = `${50*id}ms`;
      letter.style.visibility = "visible";
      letter.style.animationPlayState = "running";

      char != ' ' && this.element.appendChild(letter);
    })
  }
}

const p = {
  element: document.getElementById("paragraph"),
  text: "You need to find the way out or your night will never end!",
  animations: ["fallRotatingRightDownLetter", "fallRotatingRightUpLetter", "fallRotatingDownLetter", "fallRotatingUpLetter"],
  init() {
    [...this.text].map((char, id) => {
      const letter = document.createElement("span");
      letter.innerText = char;

      if (char != ' ') {
        letter.style.display = "inline-block";
      }

      letter.style.animationName = `${this.animations[Math.round(Math.random() * this.animations.length)]}`;
      letter.style.animationDelay = `${20 * id}ms`
      letter.style.visibility = "visible";
      letter.style.animationPlayState = "running";

      this.element.appendChild(letter);
    })
  }
}

const buttons = {
  elements: document.querySelectorAll(".button"),
  init() {
    this.elements.forEach((button, id) => {
      button.style.animation = `fallDownLetter 1s ${150 * id}ms ease backwards`
      button.style.visibility = "visible";
    })
  }
}

h3.init();
h1.init();
p.init();
buttons.init();