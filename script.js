// =====================================
// LOOK CREATE - SCRIPT.JS
// =====================================

// Page load hone par message
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Look Create! ✨");

    // Current year automatically show karega
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
});


// =====================================
// DRESS / LOOK SELECT
// =====================================

function showMessage(dressName) {
    alert("You selected: " + dressName + " 👗✨");
}


// =====================================
// CATEGORY SELECT
// =====================================

function chooseLook(category) {
    alert(
        "Great choice! 🌸\n" +
        "You selected: " + category + " Look."
    );
}


// =====================================
// CONTACT FORM
// =====================================

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name");

    if (name && name.value.trim() !== "") {
        alert(
            "Thank you, " +
            name.value +
            "! 💖\nYour message has been received."
        );

        event.target.reset();
    } else {
        alert("Please enter your name.");
    }
}


// =====================================
// MOBILE MENU
// =====================================

function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("active");
    }
}


// =====================================
// SEARCH LOOK
// =====================================

function searchLook() {
    const searchBox = document.getElementById("searchBox");

    if (!searchBox) return;

    const searchText = searchBox.value.toLowerCase().trim();

    if (searchText === "") {
        alert("Please enter a look name.");
        return;
    }

    alert(
        "Searching for: " +
        searchText +
        " 🔍✨"
    );
}


// =====================================
// BACK TO TOP
// =====================================

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
