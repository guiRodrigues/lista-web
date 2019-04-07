const cadastrar = document.getElementById('cadastrar')
let total = 0
let count = 0

cadastrar.addEventListener('click', ()=>{
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const amount = document.getElementById('amount').value

    // Tratamento de erro
    if (!name || !price || !amount || amount<1){
        alert('Os dados inseridos não são válidos!')
        return
    }
    
    // Totaal
    count++
    total = parseFloat(total) + parseFloat(price) * parseFloat(amount)
    document.getElementById('result').innerHTML = `R$ ${parseFloat(total).toFixed(2)}`

    // Compelento da quantidade
    const complemento = amount==1 ? 'unidade' : 'unidades'

    // Nome muito grande
    let newName = name
    if (name.length >= 13)
        newName = name.substring(0, 12) + '...'

    console.log(amount, complemento)

    const element = `
        <div class="produto">
            <p><span class="id">${count}</span>${newName} <span class="separate">|</span> R$${parseFloat(price).toFixed(2)} <span class="separate">|</span> ${amount} ${complemento} <span class="total"> Subtotal: <span class="color">R$${(parseFloat(price) * parseFloat(amount)).toFixed(2)}</span></span></p>
        </div>
    `

    const newElement = document.createElement("div");
    newElement.setAttribute("class", "some");
    document.getElementById("someTest").appendChild(newElement);
    newElement.innerHTML = element;
})