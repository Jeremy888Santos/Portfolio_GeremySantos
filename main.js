const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

// Event listener para o botão do menu
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");// Adiciona ou remove a classe "open" no menu de navegação

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line" // Altera o ícone do botão do menu dependendo se o menu está aberto ou fechado
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});
// Opções de revelação ao fazer scroll
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

//header container
// Animação de revelação na seção do cabeçalho
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_content .section_description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_content .header_btn", {
    ...scrollRevealOption,
    delay: 1000,
});

//about container
// Animação na seção "sobre"
ScrollReveal().reveal(".about_content .section_header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".about_content .section_description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about_content .about_btn", {
    ...scrollRevealOption,
    delay: 1000,
});

//service container
ScrollReveal().reveal(".service_card", {
    ...scrollRevealOption,
    interval: 500,
});

//portfolio container
ScrollReveal().reveal(".portfolio_card",{
    duration:1000,
    interval:500,
});


