class MiBoton extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <style>

        .mi-boton{
        display      : inline-block;
        color        : white;
        background   : linear-gradient( #ff0000, #8f0000);
        padding      : 5px;
        border       : 1px solid black;
        border-radius: 4px;
        transition   : all 0.5s ease}

        .mi-boton:hover{
        transform: translateY(-5px);}
        
        </style>

        <button class = "mi-boton">
        ¡Soy un botón personalizado!
        </button>`;
  }
}

customElements.define("mi-boton", MiBoton)

class TarjetaUsuario extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    // getAttribute() lee el valor de un atributo HTML
    //    variable                   atributo de la etiqueta
    const nombre = this.getAttribute('nombre') || 'Usuario';  // Parametros o atributos para la equiqueta HTML tarjeta-usuario
    const rol    = this.getAttribute('rol')    || 'Sin rol';
    const avatar = this.getAttribute('avatar') || '👤';

    shadow.innerHTML = `<style>
    *,*:before,*:after{box-sizing: border-box;padding: 0;margin:0;}
    .card{
    width           : 200px;
    height          : 312px;
    border          : 1px solid red;
    border-radius   : 8px;
    background-color: orange;
    display         : flex;
    flex-direction  : column;
    overflow        : hidden;
    }
    .card-upside{width:100%;height:75%;background-color: aquamarine;border-bottom: 1px solid red}
    .card-downside{width:100%;height:25%;background-color: #f6e47c;}
    .card-text{font-family: "Arial";}
    </style>
    
    <div class="card">
      <div class="card-upside"><p class="card-text">Avatar: ${avatar}</p></div>
      <div class="card-downside"><p class="card-text">Nombre: ${nombre}<br>Rol: ${rol}</p></div>
    </div>`;
  }
}

customElements.define('tarjeta-usuario', TarjetaUsuario);
