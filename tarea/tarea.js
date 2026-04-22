document.addEventListener("DOMContentLoaded", () => {
    // Variables/Constantes
    const input_box = document.querySelector("#input-box");
    const editable_button = document.querySelector("#editable-button");
    const submit_button = document.querySelector("#submit-button");
    const colores = document.querySelectorAll(".caja-color");
    // Funciones
    function CambiarTexto() {
        editable_button.textContent = input_box.value;
    };

    function CambiarFondo() {
        colores.forEach(color => {
            color.addEventListener("click", () => {
                color.classList.toggle("bg-selection");
            });
        });

    };
    // EventsListeners
    submit_button.addEventListener("click", CambiarTexto);
});