const themeBtn = document.getElementById("themeBtn");


let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "  Light Mode";
}


themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "  Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "  Dark Mode";
        localStorage.setItem("theme", "light");
    }

});

document.getElementById("year").textContent =
    new Date().getFullYear();



const profilePhoto = document.getElementById("profile-photo");
const photoFallback = document.getElementById("photo-fallback");

function showProfilePhoto() {
    profilePhoto.classList.add("loaded");
    photoFallback.style.display = "none";
}

function showInitials() {
    profilePhoto.classList.remove("loaded");
    photoFallback.style.display = "block";
}

profilePhoto.addEventListener("load", showProfilePhoto);
profilePhoto.addEventListener("error", showInitials);


if (profilePhoto.complete) {
    if (profilePhoto.naturalWidth > 0) {
        showProfilePhoto();
    } else {
        showInitials();
    }
}


const skills = document.querySelectorAll(".skill");

skills.forEach((skill, index) => {
    skill.style.animation = `float 3s ease-in-out infinite`;

    skill.style.animationDelay = `${index * 0.3}s`;
});

