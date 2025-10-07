// ===== CART FUNCTIONALITY =====
const cartBtn = document.getElementById("cart-btn");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");

cartBtn.addEventListener("click", () => {
  cartSidebar.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
});

function addToCart(item) {
  let li = document.createElement("li");
  li.textContent = item + " added to cart!";
  cartItems.appendChild(li);
}
  
// ===== SCROLL REVEAL =====
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el, i) => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      setTimeout(() => {
        el.classList.add("active");
      }, i * 150); // stagger effect
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


let index = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

function changeSlide() {
  index++;
  if (index > 3) index = 0;
  
  slides.style.transform = `translateX(${-index * 100}%)`;
  
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Auto slide
setInterval(changeSlide, 1700);

// Dot click
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    slides.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle menu on hamburger click
menuToggle.addEventListener("click", (e) => {
    navLinks.classList.toggle("show");
    e.stopPropagation(); // Prevent event from bubbling to document
});

// Close menu if clicked outside
document.addEventListener("click", (e) => {
    if (navLinks.classList.contains("show") && !navLinks.contains(e.target) && e.target !== menuToggle) {
        navLinks.classList.remove("show");
    }
});
