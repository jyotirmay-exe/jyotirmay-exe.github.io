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
    updateCard();
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

// let lastScrollTop = 0;
// document.addEventListener("scroll", () => {
//     const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
//     const navLinks = document.querySelector(".nav-links");
//     const headRibbon = document.querySelector(".head-ribbon");

//     if (currentScroll > lastScrollTop) {
//         headRibbon.classList.add("hidden");
//         navLinks.classList.remove("active");
//     } else {
//         headRibbon.classList.remove("hidden");
//     }

//     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
// });

const projects = [
    {
        name: "Flask Chat Hub",
        description: "A real-time socket-based chat application built with Flask.",
        repo: "https://github.com/jyotirmay-exe/flask-chatHUB",
        live: "https://flask-chatHUB.onrender.com",
        screenshot: "/img/chathub.png",
        tags: ["python", "flask", "socket.io"]
    },
    {
        name: "Sorting Visualizer",
        description: "Interactive sorting algorithm visualizer built with JavaScript.",
        repo: "https://github.com/jyotirmay-exe/sorting-visualizer",
        live: "https://web-sorting-visualizer.netlify.app/",
        screenshot: "/img/sort.png",
        tags: ["html/css", "javascript", "dsa"]
    },
    {
        name: "HangMan Game",
        description: "Web HangMan game built using HTML, CSS & JS.",
        repo: "https://github.com/jyotirmay-exe/HangMan",
        live: "https://simple-web-hangman.netlify.app/",
        screenshot: "/img/hangman.png",
        tags: ["html/css", "javascript", "hangman"]
    },
    {
        name: "b3-plugin-disCOD",
        description: "A B3 plugin for Call of Duty 4 Discord Bot 'disCOD'.",
        repo: "https://github.com/jyotirmay-exe/b3-plugin-disCOD",
        live: null,
        screenshot: "/img/discod.png",
        tags: ["python", "mysql", "big-brother-bot"]
    },
    {
        name: "COD4 RCON",
        description: "Python Remote CLI RCON client for Call of Duty 4 servers.",
        repo: "https://github.com/jyotirmay-exe/py-cod4_rcon",
        live: null,
        screenshot: "/img/rcon.png",
        tags: ["python", "cod4", "sockets", "udp"]
    },
];

let i = 0;

function updateCard() {
    const cproject = projects[i];
    const pproject = projects[i - 1 < 0 ? projects.length - 1 : i - 1];
    const nproject = projects[i + 1 > projects.length - 1 ? 0 : i + 1];

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
    updateCard();
}

function nextProject() {
    i = (i + 1) % projects.length;
    updateCard();
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