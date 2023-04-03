document.querySelector('.menu-btn').addEventListener('click',() => {
    document.querySelector('.nav-menu').classList.toggle('show')
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.gallery', {delay: 70});
ScrollReveal().reveal('.banner1', {delay: 70});
ScrollReveal().reveal('.banner2', {delay: 70});

document.addEventListener("mousemove", function(e) {
    var customCursor = document.getElementById("custom-cursor");
    customCursor.style.left = e.clientX + "px";
    customCursor.style.top = e.clientY + "px";
  });