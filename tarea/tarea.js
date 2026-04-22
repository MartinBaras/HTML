document.addEventListener("DOMContentLoaded", () => {
    const input_box = document.querySelector("#input-box");
    const editable_button = document.querySelector("#editable-button");
    const submit_button = document.querySelector("#submit-button");
    const colores = document.querySelectorAll(".caja-color");
    let color_viejo;
    let color_nuevo;

    function CambiarTexto() {
        editable_button.textContent = input_box.value;
    }

    function SeleccionarColor() {
        colores.forEach(color => {
            color.addEventListener("click", () => {
                colores.forEach(c => c.classList.remove("border-selection"));
                color.classList.add("border-selection");
            });
        });
    }
    function CambiarColor() {
        color_viejo=editable_button.classList[2]
        colores.forEach(color => {
            if (color.classList.contains("border-selection")){
                color_nuevo=color.classList[1]
                if (color_viejo!==color_nuevo){
                    editable_button.classList.remove(color_viejo);
                    editable_button.classList.add(color_nuevo);
                };
            };
        });
    }

    submit_button.addEventListener("click",()=>{
        CambiarTexto();
        CambiarColor();
    });

    SeleccionarColor();
});