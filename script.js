const intro = document.querySelector(".intro");
const startBtn = document.querySelector(".start-btn");
const flower = document.querySelector(".intro-flower");

startBtn.addEventListener("click", () => {
  // Flower zoom in
  flower.style.transform = "scale(1.3)";
  flower.style.opacity = "1";

  // Zoom out after 1s
  setTimeout(() => {
    flower.style.transform = "scale(1)";
    flower.style.opacity = "0";

    // Hide intro and remove
    setTimeout(() => {
      intro.style.opacity = "0";
      intro.style.pointerEvents = "none";
      intro.remove();
    }, 1000);
  }, 1000);
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navbar.classList.remove('active');
          menuIcon.classList.remove('bx-x');
        });
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


document.querySelectorAll('.services-box').forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('active');
  });
});
document.querySelectorAll('.show-img-btn').forEach(button => {
  button.addEventListener('click', () => {
    const imgContainer = button.nextElementSibling;
    imgContainer.classList.toggle('hidden');

    button.textContent = imgContainer.classList.contains('hidden')
      ? 'Show Image'
      : 'Hide Image';
  });
});
// 🌟 Zoom functionality for service images
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".service-img img").forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
const themeToggle = document.getElementById('themeSwitch');

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.checked = true;
}

// Toggle theme
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
