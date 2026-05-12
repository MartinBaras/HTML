class MiBoton extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = '<button>Mi boton</button>';
    }
}

customElements.define('mi-boton', MiBoton);

class PanelAislado extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
        <style>
        
        :host{
            display:block;
            border: 2px solid black;
            border-radius: 10px;
            }
        p{
            color:red;
            }
            </style>
        <p>asd</p>`
    }
}

customElements.define('panel-aislado', PanelAislado);

class TarjetaInfo extends HTMLElement{
    connectedCallback(){
        const shadow = this.attachShadow({mode="open"})
        const template = document.getElementById("tpl-tarjeta");

        shadow.appendChild(template.contentEditable.cloneNode(true))
    }
}
customElements.define("tpl-tarjeta", TarjetaInfo);
const tpltarjeta=document.createElement("tpl-tarjeta");
document.body.appendChild(tpltarjeta);

