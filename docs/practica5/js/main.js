let products = [
    { nombre: "Camiseta", precio: 15, stock: 10 },
    { nombre: "Pantalones", precio: 25, stock: 8 },
    { nombre: "Zapatos", precio: 50, stock: 5 },
    { nombre: "Sombrero", precio: 10, stock: 20 }
];

let cart = [];


function addToCart(name,quanitity){
    let productexists = false;
    for (let productname of products) {
        if(productname.nombre === name) {
            productexists = true;
            if(productname.stock >= quanitity) {
                cart.push({
                    nombre: productname.nombre,
                    cantidad : quanitity,
                    precio : productname.precio
                })
                productname.stock -= quanitity;
                console.info(`${quanitity} ${productname.nombre}(s) agregado(s) al carrito.`)
            } else {
                console.error(`No hay suficiente stock de ${name}.`);
            }
            return;
        } 
    }
    if (productexists == false){
        console.error(`No existe un producto con el nombre "${name}".`);
    }
}

function calculateTotal(){
    let total = 0;
    for (let product of cart) {
        total += product.precio * product.cantidad
    }
    console.log(total)
    applyDiscount(total)
    return total;
}

function applyDiscount(sum){
    if(sum > 100){
        let newtotal = sum * 0.90
        console.log(`New total is ${newtotal}`)
    } else {
        console.log("Total too low for discount")
    }
}

function processPurchase(){
    console.log("Processing purchase") 
    setTimeout(() => {
        console.log("In 3...") 
    }, 2000);
    setTimeout(() => {
        console.log("2...") 
    }, 4000);
    setTimeout(() => {
        console.log("1...") 
    }, 6000);
    setTimeout(() => {
        calculateTotal();
    }, 8000);
    
}

function clearCart(){
    cart.splice(0,cart.length);
    console.log(cart);
}

addToCart("Pantalones",3);

addToCart("Pantalones",3);

addToCart("Pantalones",30);

addToCart("Pirinolas",30);

addToCart("Zapatos",3);

addToCart("Camiseta",5);

addToCart("Sombrero",4);

//calculateTotal();

console.log(cart)

processPurchase();

setTimeout(() => {
    clearCart();
}, 10000);




