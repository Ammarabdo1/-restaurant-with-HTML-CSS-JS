const allProducts = document.querySelector("tbody");
let cart = JSON.parse(localStorage.getItem("Cart")) || [];

function addProducts() {
  allProducts.innerHTML = "";
  cart.forEach((item) => {
    allProducts.innerHTML += `
        <tr>
            <td><img src="${item.image}" width="80px" alt=""></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td><a href="#tbody" onclick="removeFormCart('${item.id}')"><i class="fa-solid fa-trash"></i></a></td>
        </tr>
        
        `;
  });
}
addProducts();

function removeFormCart(id){
    cart=cart.filter(cart=>cart.id!=id);
    localStorage.setItem("Cart",JSON.stringify(cart))
    addProducts();
}
