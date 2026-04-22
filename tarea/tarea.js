document.addEventListener("DOMContentLoaded", () => {
    const input_box = document.querySelector("#input-box");
    const editable_button = document.querySelector("#editable-button");
    const submit_button = document.querySelector("#submit-button");
    const colores = document.querySelectorAll(".caja-color");

    function CambiarTexto() {
        editable_button.textContent = input_box.value;
    }

    function CambiarFondo() {
        colores.forEach(color => {
            color.addEventListener("click", () => {
                colores.forEach(c => c.classList.remove("bg-selection"));
                color.classList.add("bg-selection");
            });
        });
    }

    submit_button.addEventListener("click", CambiarTexto);
    CambiarFondo();
});