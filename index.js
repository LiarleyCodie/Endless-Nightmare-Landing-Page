const h3 = {
  element: document.getElementById("h3"),
  text: ['the ', 'horror game', ' of the year'],
  init() {
    const defaultContent = this.element.innerText;
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

h3.init();