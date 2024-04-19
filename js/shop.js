let cart = JSON.parse(localStorage.getItem("Cart")) || []
function addToCart(id){
    const Item = elements.find((element=>element.id===id))
    cart.push({
        ...Item,
        numberOfUnits:1
    })
    localStorage.setItem("Cart",JSON.stringify(cart))
}


fetch("js/products.json")
.then(res => res.json())
.then((data)=>{
    elements=data;
}).then(()=>{
    elements.forEach((card)=>{
        let allCards=document.querySelector("#products")
        let div=document.createElement("div");
        div.classList.add("col-md-4");
        allCards.appendChild(div);
        div.innerHTML=`
        <div class="image">
            <img src="${card.image}">
            <button onclick="addToCart('${card.id}')"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
        <h2>${card.name}</h2>
        <p>$${card.price}</p>
        `
    })
})

