class MiBoton extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
        <style>

        .mi-boton{
        color:white;
        background: linear-gradient( #ff0000, #8f0000);
        padding: 5px;
        border: 1px solid black;
        border-radius: 4px;
        transition: all 0.5s ease}

        .mi-boton:hover{
        transform: translateY(-5px);}
        
        </style>

        <button class="mi-boton">
        ¡Soy un botón personalizado!
        </button>`;
    }
}

customElements.define("mi-boton", MiBoton)

class TarjetaUsuario extends HTMLElement {

  connectedCallback() {
    // getAttribute() lee el valor de un atributo HTML
    //    variable                   atributo de la etiqueta
    const nombre = this.getAttribute('nombre') || 'Usuario'; // Parametros o atributos para la equiqueta HTML tarjeta-usuario
    const rol    = this.getAttribute('rol')    || 'Sin rol';
    const avatar = this.getAttribute('avatar') || '👤';

    this.innerHTML = `<div>Nombre: ${nombre}, Rol: ${rol}, Avatar: ${avatar}</div>`;
  }
}

customElements.define('tarjeta-usuario', TarjetaUsuario);
