document.addEventListener("DOMContentLoaded", () => {
  const introImg = document.querySelector('.intro-img');

  introImg.addEventListener('click', () => {
    introImg.classList.add('clicked');

    // Remove the class after animation finishes (600ms)
    setTimeout(() => {
      introImg.classList.remove('clicked');
    }, 600);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const introImg = document.querySelector('.intro-img');
  const showButtons = document.querySelectorAll('.show-img-btn');

  // Glow effect for intro image
  introImg.addEventListener('click', () => {
    introImg.classList.add('clicked');
    setTimeout(() => introImg.classList.remove('clicked'), 600);
  });

  // Toggle hobby images
  showButtons.forEach(button => {
    button.addEventListener('click', () => {
      const serviceImg = button.nextElementSibling;

      serviceImg.classList.toggle('hidden');
      button.textContent = serviceImg.classList.contains('hidden') 
        ? "Show Image" 
        : "Hide Image";

      // Zoom effect when clicking image
      const img = serviceImg.querySelector("img");
      if (img) {
        img.addEventListener("click", () => {
          const modal = document.createElement("div");
          modal.classList.add("img-modal");

          const modalImg = document.createElement("img");
          modalImg.src = img.src;
          modalImg.alt = img.alt;

          modal.appendChild(modalImg);
          document.body.appendChild(modal);

          // Close on click anywhere
          modal.addEventListener("click", () => {
            modal.remove();
          });
        });
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Set default or remembered theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    toggleBtn.textContent = "🌙"; // Moon for switching to dark
  } else {
    toggleBtn.textContent = "☀️"; // Sun for switching to light
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    const isLight = body.classList.contains("light-mode");
    toggleBtn.textContent = isLight ? "🌙" : "☀️";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
});
