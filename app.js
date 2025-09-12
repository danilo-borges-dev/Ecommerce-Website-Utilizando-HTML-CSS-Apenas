/**
 * Seleciona o elemento <header> do documento.
 * O header receberá a classe "sticky" sempre que o usuário rolar a página
 * para baixo (scrollY > 0).
 */
const header = document.querySelector("header");

/**
 * Adiciona um listener para o evento de scroll da janela.
 *
 * @event scroll
 * @param {Event} event - O evento de scroll disparado pela janela.
 *
 * @description
 * Alterna a classe "sticky" no elemento <header> quando a rolagem vertical
 * da janela for maior que zero. Isso permite aplicar estilos fixos (ex:
 * header fixo no topo).
 */
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

/**
 * Seleciona o ícone do menu (hambúrguer).
 * @type {HTMLElement}
 */
let menu = document.querySelector("#menu-icon");

/**
 * Seleciona o menu de navegação.
 * @type {HTMLElement}
 */
let navMenu = document.querySelector(".nav-menu");

/**
 * Função de clique no ícone do menu.
 *
 * @event click
 * @description
 * Alterna as classes de estilo do menu:
 * - "bx-x": muda o ícone (ex: de hambúrguer para X).
 * - "open": abre ou fecha o menu de navegação.
 */
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navMenu.classList.toggle("open");
};
