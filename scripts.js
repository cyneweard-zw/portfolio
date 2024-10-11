window.onscroll = function() { stickyNav(); };

let nav = document.getElementById("nav");
let sticky = nav.offsetTop;

// Initial load animation when the page is ready
window.onload = function() {
    nav.style.transition = "top 1s ease-out, width 1s ease-out";
    nav.style.top = "5%";
    setTimeout(function() {
        nav.style.width = "60%";
        nav.style.left = "50%";
        nav.style.transform = "translateX(-50%)";
        // Let CSS manage background-color, border-radius, and border-color here
    }, 1000);
};

function stickyNav() {
    if (window.pageYOffset > sticky && nav.style.top !== "0px") {
        nav.style.transition = "top 0.3s ease, width 0.3s ease, border-color 0.3s ease, background-color 0.3s ease";
        nav.style.top = "0";
        nav.style.left = "50%";
        nav.style.transform = "translateX(-50%)";

        // Expand to full width, remove border-radius, border color, and make background transparent
        setTimeout(function() {
            nav.style.width = "100%";
            nav.style.borderRadius = "0"; // Remove border-radius when full width
            nav.style.borderColor = "transparent"; // Make the border transparent at full width
            nav.style.backgroundColor = "transparent"; // Make the background transparent at full width
            nav.style.transform = "translateX(-50%)"; 
        }, 300);
    } else if (window.pageYOffset <= 0 && nav.style.top !== "5%") {
        nav.style.transition = "width 0.3s ease, border-color 0.3s ease, background-color 0.3s ease";
        nav.style.width = "60%";
        nav.style.left = "50%";
        nav.style.transform = "translateX(-50%)";

        // Revert border-radius, border-color, and background-color to CSS values
        nav.style.borderRadius = ""; // Clears inline style to allow CSS value
        nav.style.borderColor = ""; // Clears inline style to allow CSS value
        nav.style.backgroundColor = ""; // Clears inline style to allow CSS value

        setTimeout(function() {
            nav.style.transition = "top 0.3s ease";
            nav.style.top = "5%";
        }, 300);
    }
}

// Logo animation on hover
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.querySelector("#logo").onmouseover = event => {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.dataset.value
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
};
