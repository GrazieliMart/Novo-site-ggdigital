
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var scrollButton = document.querySelector('.scroll-to-top');
  // Mostrar o botão quando o usuário rolar até o meio da página
  if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// Função para animar a rolagem até o topo da página
document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
