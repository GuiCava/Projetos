function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-menu button');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  const imagens = document.querySelectorAll('.js-imagens img');

  if (tabMenu.length && tabContent.length && imagens.length) {
      tabContent[0].classList.add('ativo');
      imagens[0].classList.add('ativo');

      function activeTab(index) {
          tabContent.forEach((section) => section.classList.remove('ativo'));
          imagens.forEach((img) => img.classList.remove('ativo'));

          tabContent[index].classList.add('ativo');
          imagens[index].classList.add('ativo');
      }

      tabMenu.forEach((itemMenu, index) => {
          itemMenu.addEventListener('click', () => {
              activeTab(index);
          });
      });
  }
}

initTabNav();
