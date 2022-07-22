let arrCarrinho = [];

let produtosVitrine = document.querySelector('.ul_produto')
let produtosCarrinho = document.querySelector('.ul_carrinho')




function insertProducts(objeto,ul){
    
    

    for(let i = 0; i < objeto.length; i++){
        
        let produto = objeto[i]

        let card = createCard(produto)
        ul.appendChild(card)

        
        
    }
   
}
insertProducts(data,produtosVitrine)


function createCard(objeto){

    
       
    let id = objeto.id

    let name = document.createElement('h2'); 
    name.textContent = objeto.nameItem

    let price = document.createElement('strong');
    price.textContent = `R$ ${objeto.value}`

    let img = document.createElement('img');
    img.src = objeto.img // criando elementos 

    let description = document.createElement('p');
    description.textContent = objeto.description

    let tag = document.createElement('span');
    tag.textContent = objeto.tag

    let mainInfo = document.createElement('main');
    mainInfo.className = 'info'

    let li = document.createElement('li');
    li.className = 'card'
    
    let button = document.createElement('div')
    button.className = 'button'

    let addCart = document.createElement('button');
    addCart.className = 'adcionar_carrinho'
    addCart.id = id
    addCart.textContent = objeto.addCart


    
    

    mainInfo.appendChild(tag)
        mainInfo.appendChild(name);
        mainInfo.appendChild(description);
        mainInfo.appendChild(price);
        li.appendChild(img)
        li.appendChild(mainInfo)
        button.appendChild(addCart)
        li.appendChild(button)
         
        
    return li
}

produtosVitrine.addEventListener('click',interceptar)

function interceptar(event){
    let comprar = event.target
    if(comprar.tagName == 'BUTTON'){
        let id = comprar.id

        let vasco = data.find(function(data){
            if(data.id == id){
                return data
            }
                
        })
       
    }
    addCarrinho(data)
}
function addCarrinho(produto){
    arrCarrinho.push(produto)
    insertProductsCarrinho(produto,produtosCarrinho)
}





function createCardCarrinho(objeto){// recebe o data
    let id = objeto.id
    let liCarrinho = document.createElement('li')
    let divCarrinho = document.createElement('div')
    let imgCarrinho = document.createElement('img')
    let nomeCarrinho = document.createElement('h2')
    let precoCarrinho = document.createElement('span')
    let remove = document.createElement('button')
    
    liCarrinho.className= 'li_Carrinho'
    
    
    nomeCarrinho.textContent= objeto.nameItem
    precoCarrinho.textContent = objeto.value
    imgCarrinho.src = objeto.img
    remove.textContent = 'Remover do Carrinho'
    
    
    divCarrinho.appendChild(nomeCarrinho)
    divCarrinho.appendChild(precoCarrinho)
    divCarrinho.appendChild(remove)
    liCarrinho.appendChild(imgCarrinho)
    liCarrinho.appendChild(divCarrinho)
    
    return liCarrinho
}

function insertProductsCarrinho(objeto,ul){
    
    

    for(let i = 0; i < objeto.length; i++){
        
        let produto = objeto[i]

        let card = createCardCarrinho(produto)
        ul.appendChild(card)

        
        
    }
   
}
















/* let ul = document.querySelector('.ul_carrinho')
let liCarrinho = document.createElement('li')
let divCarrinho = document.createElement('div')
let imgCarrinho = document.createElement('img')
let nomeCarrinho = document.createElement('h2')
let precoCarrinho = document.createElement('span')
let remove = document.createElement('button')

liCarrinho.className= 'li_Carrinho'

nomeCarrinho.textContent=arr.name
precoCarrinho.textContent = arr.value
imgCarrinho.src = arr.img
remove.textContent = 'Remover do Carrinho'

divCarrinho.appendChild(nomeCarrinho)
divCarrinho.appendChild(precoCarrinho)
divCarrinho.appendChild(remove)
liCarrinho.appendChild(divCarrinho)
ul.appendChild(li)*/ 























    



