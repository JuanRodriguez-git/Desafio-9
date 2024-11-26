//Llamar a los elemntos con los que vamos a trabajar
const producto = document.querySelectorAll(".producto");
const miLista = document.querySelector("#lista");
const botonAgregar = document.querySelectorAll(".agregar");
const botonVaciar = document.querySelector(".vaciar");
const total = document.querySelector(".total-price");

//Inicializamos el total de precio en 0
let precioTotal = 0;

//Ciclo for para recorrer los botones de la tarjeta
for(let i = 0 ; i < botonAgregar.length ; i++){
    //Codigo a ejecutar 
    botonAgregar[i].addEventListener('click', function(){
        //Codigo del evento
        const nombreProducto = producto[i].querySelector("h3").textContent;
        const precioProdcuto = parseFloat(producto[i].querySelector("p").textContent.replace('$',' '));
    
        //creamos los items por cada producto en la lista del carrito. Usamos createElement
        const nuevoItem = document.createElement("li");
        nuevoItem.innerHTML = `${nombreProducto} - $${precioProdcuto}`;
        //elementopadre.appendChild(elementoHijo)
        miLista.appendChild(nuevoItem);

        //Boton eliminar para cada producto (item) de la lista del carrito. 
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "x";
        botonEliminar.classList.add("botonX");
        nuevoItem.appendChild(botonEliminar);
        botonEliminar.addEventListener('click', ()=>{
            miLista.removeChild(nuevoItem);
            precioTotal = precioTotal - precioProdcuto;
            total.textContent = precioTotal

        })

        //Suma total de los precios
        precioTotal += precioProdcuto;
        total.textContent = precioTotal;
    })
}

//EventListener para el boton vaciar. 
botonVaciar.addEventListener('click', function(){
    miLista.innerHTML = " ";
    precioTotal = 0;
    total.textContent = precioTotal;
});

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})