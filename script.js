document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".portfolio-img");
    
    images.forEach(image => {
        image.addEventListener("click", () => {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `<img src="${image.src}" class="modal-img">`;
            
            modal.addEventListener("click", () => modal.remove());
            document.body.appendChild(modal);
        });
    });
});