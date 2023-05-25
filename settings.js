/*

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
*/
let check = document.getElementById("check");

check.addEventListener("change", () => {
    localStorage.setItem("theme-mode",check.checked)
    console.log(check.checked);
    loadTheme();
})

//document.documentElement.classList.contains("dark")
function toggleDark() {
    let local = JSON.parse(localStorage.getItem("theme-mode"));
    if (local) {
        document.documentElement.classList.remove("dark");
        document.querySelector(".icons").name = "moon-outline";
        
    } else {
        document.documentElement.classList.add("dark");
        document.querySelector(".icons").name = "sunny-outline";
    }
}

function loadTheme() {
    let local = JSON.parse(localStorage.getItem("theme-mode"));
    if (local) {
        document.documentElement.classList.remove("dark");
        document.querySelector(".icons").name = "moon-outline";
    } else {
        document.documentElement.classList.add("dark");
        document.querySelector(".icons").name = "sunny-outline";
    }
}

loadTheme();


var menu = document.getElementById("menu");
var side = document.getElementById("sidebar");
var close = document.getElementById("close");

menu.onclick = function() {
    
    side.classList.toggle("open");
    //close.name = "close-outline";
    
   
}

   


document.onclick = function(e) {
    if (!menu.contains(e.target) && !side.contains(e.target)) {
        side.classList.remove("open");
        
    }
}



let loader = document.getElementById("preloader");

window.addEventListener("load", () => {
    //loader.classList.add("loaded-none");
    loader.style.display = "none";
})