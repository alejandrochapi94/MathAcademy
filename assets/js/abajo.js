function deslizarHaciaAbajo() {
  window.scrollTo({
    top: window.scrollY + 400,
    behavior: 'smooth'
  });
  window.location.hash = '';
}