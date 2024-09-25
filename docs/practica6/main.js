const d = document;
const $listaCarrito = d.querySelector("#lista-carrito");
const $totalCarrito = d.querySelector("#total-carrito");
const $btnCompra = d.querySelector("#btn-compra");
const $mensajeCompra = d.querySelector("#mensaje-compra");
const $carrito = d.querySelector("#carrito");
const $loader = d.querySelector('#loader');

let productIDs = [];

//add items
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
        <button class="ModifyButton" data-behaviour="down" data-id="${id}" data-precio="${price}" >-</button>
        <button class="ModifyButton" data-behaviour="up" data-id="${id}" data-precio="${price}">+</button>
        <div class="ProductSubtotal${id}">Subtotal: $${price}</div>
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

//add or remove quantity
d.addEventListener("click", function(e) {
    if (!e.target.matches(".ModifyButton")){
        return false;
    }
    
    

    const $button = e.target;
    
    let id = $button.getAttribute("data-id");
    
    console.log(id);

    let $item = d.querySelector(".Item"+id);
    let $itemquantdisplay = d.querySelector(".ProductQuantity"+id);
    let $itemsubtotal = d.querySelector(".ProductSubtotal"+id);


    let price = parseFloat($button.getAttribute("data-precio"));
    let quant = parseFloat($item.getAttribute("data-quant"));

    console.log(price)

    let $value = $button.getAttribute("data-behaviour");

    if($value === "up"){
        quant++;
        
        $itemsubtotal.innerText = "Subtotal: $" + quant * price;

        $itemquantdisplay.innerText = quant;
        $item.setAttribute("data-quant",quant)

        let total = parseFloat($totalCarrito.innerText);

        $totalCarrito.innerText = (total + price).toFixed(2);
    } else if ($value === "down"){
        quant--;
        
        $itemsubtotal.innerText = "Subtotal: $" + quant * price;

        $itemquantdisplay.innerText = quant;
        $item.setAttribute("data-quant",quant)

        let total = parseFloat($totalCarrito.innerText);
        

        $totalCarrito.innerText = (total - price).toFixed(2);

        if (quant == 0){
            eliminate(id);
        }
    }

    
    /*
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
    
    */
    
});



d.addEventListener("click", function(e) {
    if (!e.target.matches(".EraseButton")){
        return false;
    }
    
    

    const $button = e.target;
    
    let id = $button.getAttribute("data-id");
    
    console.log(id);

    let $itemsubtotal = d.querySelector(".ProductSubtotal"+id);

    let subtotalmoney = parseFloat($itemsubtotal.innerText.split("$")[1])

    let total = parseFloat($totalCarrito.innerText);

    $totalCarrito.innerText = (total - subtotalmoney).toFixed(2);

    eliminate(id);


    /*
    let $item = d.querySelector(".Item"+id);
    let $itemquantdisplay = d.querySelector(".ProductQuantity"+id);
    let $itemsubtotal = d.querySelector(".ProductSubtotal"+id);


    let price = parseFloat($button.getAttribute("data-precio"));
    let quant = parseFloat($item.getAttribute("data-quant"));

    console.log(price)

    let $value = $button.getAttribute("data-behaviour");

    if($value === "up"){
        quant++;
        
        $itemsubtotal.innerText = "Subtotal: $" + quant * price;

        $itemquantdisplay.innerText = quant;
        $item.setAttribute("data-quant",quant)

        let total = parseFloat($totalCarrito.innerText);

        $totalCarrito.innerText = (total + price).toFixed(2);
    } else if ($value === "down"){
        quant--;
        
        $itemsubtotal.innerText = "Subtotal: $" + quant * price;

        $itemquantdisplay.innerText = quant;
        $item.setAttribute("data-quant",quant)

        let total = parseFloat($totalCarrito.innerText);
        

        $totalCarrito.innerText = (total - price).toFixed(2);

        if (quant == 0){
            eliminate(id);
        }
    }

    
    /*
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
    
    */
    
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

        $loader.classList.remove("hidden");
        setTimeout(() => {
            $mensajeCompra.classList.remove("hidden");
            $loader.classList.add("hidden");
        }, 5000);
    } else {
        alert("Pon Articulos en tu carrito >:(");
    }
});




function eliminate(id){
    let $item = d.querySelector(".Item"+id);
    const $product = $item.parentElement;
    removeItemOnce(productIDs,id);
    $product.remove();
    console.log(productIDs);
}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }