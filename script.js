// Objeto com galerias de imagens
let galleries = {
  1: {
    images: [
      "img/Mz2.jpg",
      "img/Mz3.jpg",
      "img/Mz4.jpg",
      "img/Mz5.jpg",
      "img/Mz6.jpg",
      "img/Mz7.jpg",
      "img/Mz8.jpg",
      "img/Mz9.jpg",
    ],
    currentIndex: 0,
  },
  2: {
    images: [
      "img/Mk2.jpg",
      "img/Mk3.jpg",
      "img/Mk4.jpg",
      "img/Mk5.jpg",
    ],
    currentIndex: 0,
  },
  3: {
    images: [
      "img/Mm2.jpg",
      "img/Mm3.jpg",
      "img/Mm4.jpg",
      
      ],
      currentIndex: 0,
  },
    4: {
    images: [
      "img/Tt2.jpg",
      "img/Tt3.jpg",
      "img/Tt4.jpg",
      "img/Tt5.jpg",
      
      ],
      currentIndex: 0,
  },
    5: {
    images: [
      "img/Uu2.jpg",
      "img/Uu3.jpg",
      "img/Uu4.jpg",
      "img/Uu5.jpg",
      ],
      currentIndex: 0,
  },
  6: {
    images: [
      "img/Pp2.jpg",
      "img/Pp3.jpg",
      ],
      currentIndex: 0,
  },
  7: {
    images: [
      "img/Xx2.jpg",
      "img/Xx3.jpg",
      "img/Xx4.jpg",
      "img/Xx5.jpg",
      ],
      currentIndex: 0,
  },
  8: {
    images: [
      "img/Rr2.jpg",
      "img/Rr3.jpg",
      "img/Rr4.jpg",
      "img/Rr5.jpg",
      ],
      currentIndex: 0,
  },
  9: {
    images: [
      "img/Oo2.jpg",
      "img/Oo3.jpg",
      "img/Oo4.jpg",
      "img/Oo5.jpg",
      ],
      currentIndex: 0,
  },
  // Continue para os outros produtos
};

// Função para mudar a imagem no carrossel
function changeImage(galleryId, direction) {
  let gallery = galleries[galleryId];
  gallery.currentIndex += direction;

  if (gallery.currentIndex < 0) {
    gallery.currentIndex = gallery.images.length - 1; // Volta para o último
  } else if (gallery.currentIndex >= gallery.images.length) {
    gallery.currentIndex = 0; // Volta para o primeiro
  }

  // Atualiza a imagem exibida no carrossel
  document.getElementById(`productImage${galleryId}`).src =
    gallery.images[gallery.currentIndex];
}

// Inicializa os carrosséis
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function showNextText() {
  carouselItems[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add("active");
}

function initCarousel() {
  if (carouselItems.length > 0) {
    carouselItems[currentIndex].classList.add("active");
    setInterval(showNextText, 3000);
  }
}





// Seleção dos elementos
const sideMenu = document.getElementById("sideMenu");
const openMenuBtn = document.getElementById("openMenu");
const closeMenuBtn = document.getElementById("closeMenu");
const menuBackdrop = document.getElementById("menuBackdrop");
const registerModal = document.getElementById("registerModal");
const openRegisterBtn = document.getElementById("openRegister");
const closeRegisterBtn = document.getElementById("closeRegister");

// Abrir o menu
openMenuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
  menuBackdrop.classList.add("active");
});

// Fechar o menu ao clicar no "X"
closeMenuBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  menuBackdrop.classList.remove("active");
});

// Fechar o menu ao clicar fora
menuBackdrop.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  menuBackdrop.classList.remove("active");
});

// Abrir o modal de cadastro ao clicar em "Cadastrar"
openRegisterBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Impede o comportamento padrão do link
  registerModal.classList.remove("hidden");
});

// Fechar o modal ao clicar no "X"
closeRegisterBtn.addEventListener("click", () => {
  registerModal.classList.add("hidden");
});

// Fechar o modal ao clicar fora
registerModal.addEventListener("click", (e) => {
  if (e.target === registerModal) {
    registerModal.classList.add("hidden");
  }
});

  window.onload = function() {
    const welcomePopup = document.getElementById("welcomePopupMago");
    const closePopup = document.getElementById("closePopupMago");

    // Exibir o popup ao carregar a página
    welcomePopup.style.display = "flex";

    // Fechar o popup ao clicar no X
    closePopup.onclick = function() {
        welcomePopup.style.display = "none";
    }
}