// ===== Navbar Toggle =====
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

// ===== Cart Functionality =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartButtons = document.querySelectorAll('.cart');

cartButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const product = button.closest('.pro');
    const name = product.querySelector('h5').innerText;
    const price = product.querySelector('h4').innerText;
    const img = product.querySelector('img').src;

    const item = { name, price, img };

    const exists = cart.some(p => p.name === name);
    if (!exists) {
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${name} added to cart!`);
    } else {
      alert(`${name} is already in your cart.`);
    }
  });
});

// ===== Newsletter Subscribe =====
const newsletterBtn = document.querySelector('#newsletter button');
if (newsletterBtn) {
  newsletterBtn.addEventListener('click', () => {
    const input = document.querySelector('#newsletter input');
    if (!input.value.trim()) {
      alert('Please enter your email.');
    } else {
      alert(`Thank you for subscribing, ${input.value.trim()}!`);
      input.value = '';
    }
  });
}
