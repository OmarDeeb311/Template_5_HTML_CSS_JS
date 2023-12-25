//! Toggle mega-menu
let toggleLink = document.querySelector("nav .toggle a");
let toggleIcon = document.querySelector("nav .toggle a i");
let listItem = document.querySelector("nav .toggle ");
let menu = document.querySelector("nav .mega-menu");

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggleLink.classList.remove("hover");
    listItem.classList.remove("hover");
  } else if (e.target == toggleLink || e.target == toggleIcon) {
    menu.classList.toggle("active");
    toggleLink.classList.toggle("hover");
    listItem.classList.toggle("hover");
  }
});

//! Fill Skills Width On Scroll
let htmlProgress = document.querySelector(
  ".skills .group .skill:first-child .scroll span"
);
let cssProgress = document.querySelector(
  ".skills .group .skill:nth-child(2) .scroll span"
);
let jsProgress = document.querySelector(
  ".skills .group .skill:nth-child(3) .scroll span"
);
let reactProgress = document.querySelector(
  ".skills .group .skill:last-child .scroll span"
);

document.onscroll = () => {
  if (scrollY > 7200) {
    htmlProgress.style.width = htmlProgress.getAttribute("data-width");
    cssProgress.style.width = cssProgress.getAttribute("data-width");
    jsProgress.style.width = jsProgress.getAttribute("data-width");
    reactProgress.style.width = reactProgress.getAttribute("data-width");
  }
};

//! Start Count Down for Event
let days = document.querySelector(
  ".events .units .unit:first-child span:first-child"
);
let hours = document.querySelector(
  ".events .units .unit:nth-child(2) span:first-child"
);
let minutes = document.querySelector(
  ".events .units .unit:nth-child(3) span:first-child"
);
let seconds = document.querySelector(
  ".events .units .unit:last-child span:first-child"
);

let date = new Date();
days.innerHTML = date.getDate();
hours.innerHTML = date.getHours();
minutes.innerHTML = date.getMinutes();
seconds.innerHTML = date.getSeconds();

//! Incearse Number On Scroll
let clientsDiv = document.querySelector(".stats .row .col:first-child h2");
let projectsDiv = document.querySelector(".stats .row .col:nth-child(2) h2");
let countraiesDiv = document.querySelector(".stats .row .col:nth-child(3) h2");
let moneyDiv = document.querySelector(".stats .row .col:last-child h2");

let clientsNumber = clientsDiv.getAttribute("data-number");
let projectsNumber = projectsDiv.getAttribute("data-number");
let countraiesNumber = countraiesDiv.getAttribute("data-number");
let moneyNumber = moneyDiv.getAttribute("data-number");

function startCounter(number, div) {
  let counter = 0;
  let count = setInterval(() => {
    if (counter < parseInt(number)) {
      counter++;
      div.innerHTML = counter;
    } else {
      clearInterval(count);
    }
  }, 2000 / number);
}
let started = false;
document.addEventListener("scroll", () => {
  if (scrollY > 11000 && !started) {
    started = true;
    startCounter(clientsNumber, clientsDiv);
    startCounter(projectsNumber, projectsDiv);
    startCounter(countraiesNumber, countraiesDiv);
    startCounter(moneyNumber, moneyDiv);
  }
});
