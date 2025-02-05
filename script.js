let p = document.querySelector('p')
let input = document.querySelector('input')
let botao = document.querySelector('button')

const contacts = [
    { name: 'Rodolfo', number: '(19) 94343-3434' },
    { name: 'Paulo', number: '(19) 93443-3434' },
    { name: 'Aline', number: '(19) 94566-3434' },
    { name: 'Maria', number: '(19) 94343-3476' },
]

botao.addEventListener('click', () => {

    const valorInput = input.value

    for (const contact of contacts) {
        if (valorInput.toLowerCase() === contact.name.toLowerCase()) {
            p.innerHTML = `Contato Encontrado Nome: ${contact.name} Tel: ${contact.number}`

            break
        } else {
            p.innerHTML = 'Contato não encontrado'
        }
    }
})