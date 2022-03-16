const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".contenido");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        //* Agregar y remover tab
        tabs.forEach(tab => tab.classList.remove("activeTab"))
        tab.classList.add("activeTab");

        //* Mostrar contenido correspondiente
        contents.forEach(content => content.classList.remove("activeContenido"));

        contents[index].classList.add("activeContenido");
    });
});