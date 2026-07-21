class API {
    constructor() {

    }
    async fetchRequest(url) {
        try {
            const response = await fetch(url)
            if (response.status===404) {
                console.log('Usuario no encontrado')
                return
            }
            else if(!response.ok){throw new Error(`Error: ${Error}, Status: ${response.status}`)
                return
            }
            const data = await response.json()
            return data
        }
        catch (error) { throw new Error(`Status: ${response.status}`) }
    }
    async obtenerTitulo() {
        const results = await this.fetchRequest('https://jsonplaceholder.typicode.com/posts/1')
        const title = results.title
        return title
    }
    async buscarUsuario(id) {
        let results = await this.fetchRequest(`https://jsonplaceholder.typicode.com/users/${id}`)
        let data_user = {
            'id': results.id,
            'name': results.name,
            'email': results.email
        }
        data_user = `ID: ${data_user.id}\nNOMBRE: ${data_user.name}\nEMAIL: ${data_user.email}`
        return data_user}
    async urlInvalida(){
        let results = await this.fetchRequest('https://jsonplaceholder.typicode.com/invalid-url')
        console.log(`E: ${results}`)
    }

}

const lbl_titulo = document.getElementById('titulo')
const api = new API()
let results = await api.obtenerTitulo()
lbl_titulo.innerHTML = results
results = await api.buscarUsuario(1)
console.log(results)
api.urlInvalida()

