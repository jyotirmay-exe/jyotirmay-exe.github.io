document.addEventListener("DOMContentLoaded", () => {
    const hello = document.getElementById("hello");
    const sthello = "<h3>Hello,</h3> <h1>I am Jyotirmay Kumar Jha<h1>";
    let currentText = "";

    for (let i = 0; i < sthello.length; i++) {
        setTimeout(() => {
            currentText += sthello[i];
            hello.innerHTML = currentText;
        }, 50 * i);
    }
    hello.innerHTML = currentText.substring(0, currentText.length - 10);

    cycleHoverEffect();
});

function toggleMenu() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    if (hamburgerMenu.innerHTML === "☰") {
        hamburgerMenu.innerHTML = "&#10005;";
    } else {
        hamburgerMenu.innerHTML = "&#9776;";
    }
    navLinks.classList.toggle("active");
}


let projects = null;
fetch('projects.json')
  .then(response => {
    return response.json();
  })
  .then(prj => {
    projects = prj;
    preloadImages(projects);
    updateCard();
  })
  .catch(error => {
    console.error('Error fetching the projects:', error);
  });


function preloadImages(projects) {
    projects.forEach(project => {
        const img = new Image();
        img.src = project.screenshot;
    });
}

let i = 0;
function updateCard() {
    const prevIndex = (i - 1 + projects.length) % projects.length;
    const nextIndex = (i + 1) % projects.length;

    const pproject = projects[prevIndex];
    const cproject = projects[i];
    const nproject = projects[nextIndex];

    document.getElementById("proj-name0").textContent = pproject.name;
    document.getElementById("proj-desc0").textContent = pproject.description;
    document.getElementById("proj-ss0").src = pproject.screenshot;

    document.getElementById("proj-name").textContent = cproject.name;
    document.getElementById("proj-desc").textContent = cproject.description;
    document.getElementById("proj-ss").src = cproject.screenshot;

    const tagsContainer = document.querySelector(".tags");
    tagsContainer.innerHTML = "";
    cproject.tags.forEach(tag => {
        const tagDiv = document.createElement("div");
        tagDiv.className = "tag";
        tagDiv.textContent = `#${tag}`;
        tagsContainer.appendChild(tagDiv);
    });

    const buttons = document.querySelectorAll(".ghbutton");
    buttons[0].setAttribute("onclick", `window.open('${cproject.repo}', '_blank')`);
    if (cproject.live) {
        buttons[1].style.display = "inline-block";
        buttons[1].setAttribute("onclick", `window.open('${cproject.live}', '_blank')`);
    } else {
        buttons[1].style.display = "none";
    }

    document.getElementById("proj-name1").textContent = nproject.name;
    document.getElementById("proj-desc1").textContent = nproject.description;
    document.getElementById("proj-ss1").src = nproject.screenshot;
}

function prevProject() {
    i = (i - 1 + projects.length) % projects.length;

    const prevCard = document.querySelector(".ghcardprev");
    const currCard = document.querySelector(".ghcardcurr");
    // const nextCard = document.querySelector(".ghcardnext");

    prevCard.className = "ghcard ghcardprevtsn";
    currCard.className = "ghcard ghcardcurrtsn";
    // nextCard.className = "ghcard ghcardprev";

    setTimeout(() => {
        updateCard();
        prevCard.className = "ghcard ghcardprev";
        currCard.className = "ghcard ghcardcurr";
        // nextCard.className = "ghcard ghcardnext";
    }, 300);
}

function nextProject() {
    i = (i + 1) % projects.length;

    // const prevCard = document.querySelector(".ghcardprev");
    const currCard = document.querySelector(".ghcardcurr");
    const nextCard = document.querySelector(".ghcardnext");

    // prevCard.className = "ghcard ghcardnext";
    currCard.className = "ghcard ghcardcurrtsn";
    nextCard.className = "ghcard ghcardnexttsn";

    setTimeout(() => {
        updateCard();
        // prevCard.className = "ghcard ghcardprev";
        currCard.className = "ghcard ghcardcurr";
        nextCard.className = "ghcard ghcardnext";
    }, 300);
}

function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const skillUnits = document.querySelectorAll('.skillunit');

function cycleHoverEffect() {
    let i = 0;

    setInterval(() => {
        skillUnits[i].classList.remove('hover-effect');
        i = (i + 1) % skillUnits.length;
        skillUnits[i].classList.add('hover-effect');
    }, 150);
}