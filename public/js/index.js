function abrir() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
  setTimeout(() => {
      popup.classList.add('show');
  }, 10);
  document.getElementById('content').classList.add('blur-background');
}

function fechar() {
  const popup = document.getElementById('popup');
  popup.classList.remove('show');
  setTimeout(() => {
      popup.style.display = 'none';
      document.getElementById('content').classList.remove('blur-background');
  }, 500); // Tempo deve coincidir com o tempo de transição no CSS
}

function login() {
  window.location.href = "login.html";
}

function direcionarPlanos() {
  window.location.href = "planos.html"
}

function abrirContato() {
  contato.style.display = 'flex';
  window.location.href = '#contato';
  // window.location.replace('localhost:5500//index.html/#contato');
}