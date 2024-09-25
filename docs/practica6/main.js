const d = document;
const $listaCarrito = d.querySelector("#lista-carrito");
const $totalCarrito = d.querySelector("#total-carrito");
const $btnCompra = d.querySelector("#btn-compra");
const $mensajeCompra = d.querySelector("#mensaje-compra");
const $carrito = d.querySelector("#carrito");

let productIDs = [];

//add and remove items
d.addEventListener("click", function(e) {
    if (!e.target.matches(".AddButton")){
        return false;
    }
    
    
    const $product = e.target.parentElement;
    
    let id = $product.getAttribute("data-id");
    let name = $product.getAttribute("data-nombre");
    let price = parseFloat($product.getAttribute("data-precio"));
    
    let subtotal = 0;
    //let = isInArray = false;

    for (const element of productIDs) {
        console.log(element)
    }

    if (!productIDs.includes(id)){
        
        productIDs.push(id);
        
        //console.log(productIDs);
        
        const $itemcart = d.createElement("li");
        $itemcart.innerHTML = `<div class="Item${id}" data-quant="1">
        <h3>${name} - $${price}</h3>
        <div>Cantidad: 
        <div class="ProductQuantity${id}"> 1 </div>
        <button class="ModifyButton" data-behaviour="down" data-id="${id}" >-</button>
        <button class="ModifyButton" data-behaviour="up" data-id="${id}">+</button>
        <div class="ProductSubtotal${id}">Subtotal:${price}</div>
        <button class="EraseButton" data-behaviour="up" data-id="${id}">Quitar del Carrito</button>
        </div>
        `;
        
        $listaCarrito.appendChild($itemcart);
    } else {

        let $itemquant = d.querySelector(".Item"+id);
        let $itemquantdisplay = d.querySelector(".ProductQuantity"+id);
        let $itemsubtotal = d.querySelector(".ProductSubtotal"+id);
        let quant = parseFloat($itemquant.getAttribute("data-quant"));
        quant++;
        
        $itemsubtotal.innerText = "Subtotal: $" + quant * price;

        $itemquantdisplay.innerText = quant;
        $itemquant.setAttribute("data-quant",quant)

        console.log(price);
    }

    let total = parseFloat($totalCarrito.innerText);

    //console.log(total)

    $totalCarrito.innerText = (total + price).toFixed(2);
    
        
    
});

$listaCarrito.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        const $item = e.target;
        $item.remove();
        
        let price = parseFloat($item.innerText.split("- $")[1]);

        let total = parseFloat($totalCarrito.innerText);
        
        $totalCarrito.innerText = (total - price).toFixed(2);
        
    }
})

$btnCompra.addEventListener("click", function(e) {
    if($listaCarrito.children.length > 0){
        $mensajeCompra.classList.remove("hidden");
    } else {
        alert("Pon Articulos en tu carrito >:(");
    }
});