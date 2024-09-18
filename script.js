document.addEventListener("DOMContentLoaded", function () {
    const message = document.querySelector('#message p');
    message.style.opacity = 0;
    message.style.transition = "opacity 3s ease-in-out";
    setTimeout(() => {
        message.style.opacity = 1;
    }, 1000);
});
