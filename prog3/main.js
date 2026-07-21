class API {
    constructor() {

    }
    async obtenerTitulo() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            if (response.status === 404) {
                console.log('Titulo no encontrado');
                return;
            }
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            return data.title;
        } catch (error) {
            throw new Error(`Error: ${Error}`);
        }
    }
    async buscarUsuario(id) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (response.status === 404) {
                console.log(`Usuario no encontrado: ${id}`);
                return;
            }
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            let data_user = {
                id: data.id,
                name: data.name,
                email: data.email
            };
            data_user = `ID: ${data.id}\nNOMBRE: ${data.name}\nEMAIL: ${data.email}`;
            console.log(data_user)
            return data_user;
        
        } catch (error) {
            console.error(error.message);
        }
    }

    async fetchUrlInvalida(){
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/invalid-url`);

            if (response.status === 404) {
                console.log('Pagina no encontrada (UrlInvalida)');
                return;
            }
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

        } catch (error) {
            console.error(error.message);
        }
        finally{console.log('Proceso finalizado')}
        
    }
}

class Card extends HTMLElement{
    constructor() {
        super();
        this.title = this.getAttribute('title' || 'Sin titulo')
        this.content = this.getAttribute('content' || 'Sin contenido')
        this.render()
    }
    render() {
        this.innerHTML = `
        <style>
        .card{
        width:150px;
        height:190px;
        border: 2px solid black;
        display:flex;
        flex-direction:column}
        </style>
        <div class="card">
        <h2>${this.title}</h2>
        <p>${this.content}<p>
        </div>
        `;
    }
}
customElements.define('card-user',Card)

const lbl_titulo = document.getElementById('titulo')
const api = new API()
let title = await api.obtenerTitulo()
lbl_titulo.innerHTML = title
await api.buscarUsuario(1)
await api.fetchUrlInvalida()

