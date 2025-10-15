document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out, I will get back to you soon!');
  this.reset();
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('header');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});