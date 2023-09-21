function creartienda(contenedorID, min, cantidadTiendas){
//encontrar contenedor por su ID
let elementocontenedor = document.getElementById(contenedorID);

//Loop crear tiendas
for( let conteotiendas = 1; conteotiendas < cantidadTiendas ; conteotiendas++){

    //crear texto de label para llamar a la funcion
    let textoetiqueta = "Tienda " + conteotiendas;

    //crear tiendas con crearparrafotiendas
    let parrafotienda = crearparrafotienda(textoetiqueta, min);

    //Agregar parrafo al contenedor
    elementocontenedor.appendChild(parrafotienda) ;
}



}




function crearparrafotienda(textolabel, valormin){
    // crear etiquetas de parrafo
    let elementoparrafo = document.createElement("p");
    // crear label
    let elementolabel = document.createElement("label");
    elementolabel.innerText = textolabel + ": ";
    
    // conectar con input
    elementolabel.setAttribute("for", textolabel);
    
    
    // crear input
    let elementoinput = document.createElement("input");
    
    
    //establecer atributos de input
    elementoinput.setAttribute("type", "number");
    elementoinput.setAttribute("id", textolabel);
    elementoinput.setAttribute("min", valormin);
    elementoinput.setAttribute("value" , 0);
    
    
    //agregar label e input al parrafo
    elementoparrafo.appendChild(elementolabel);
    elementoparrafo.appendChild(elementoinput);
    
    //devolver parrafo completo
    
    return elementoparrafo;
    }
    
    
    
    
    function extraernumero(elemento){
        
        let texto = elemento.value;
        let numero = Number(texto);
        
        return numero;
        }
        
        
        
        
        
        
        function calcular() {
            let ventas = [];
            let ventamayor = [];
            let ventamenor = 0;
        
            let posicionventas = 0;
            let elementoventas = document.getElementById("tiendas");
        
            for (let item of elementoventas.children) {
                let valorventa = extraernumero(item.children[1]);
                ventas[posicionventas] = valorventa;
                ventamayor[posicionventas] = valorventa;
                posicionventas = posicionventas + 1;
            }
        
            let totalventas = sumartotal(ventas);
            let mayor = calcularmayor(ventamayor);
            let menor = calcularmenor(ventas);
            
            let salida = "Total ventas: " + totalventas + 
                         " / venta mayor " + mayor +
                         " / venta menor: " + menor;
        
            let decir = document.getElementById("salida");
            decir.textContent = salida;
        
            // Encontrar los elementos con los valores mayor y menor y asignar clases
            let elementosTiendas = elementoventas.children;
            for (let i = 0; i < elementosTiendas.length; i++) {
                let valorVenta = extraernumero(elementosTiendas[i].children[1]);
                if (valorVenta === mayor) {
                    elementosTiendas[i].classList.add("venta-mayor");
                } else if (valorVenta === menor) {
                    elementosTiendas[i].classList.add("venta-menor");
                }
            }
        }
       
        
        
    
        
        function calcular() {
            let ventas = [];
            let ventamayor = [];
            let ventamenor = 0;
        
            let posicionventas = 0;
            let elementoventas = document.getElementById("tiendas");
        
            for (let item of elementoventas.children) {
                let valorventa = extraernumero(item.children[1]);
                ventas[posicionventas] = valorventa;
                ventamayor[posicionventas] = valorventa;
                posicionventas = posicionventas + 1;
            }
        
            let totalventas = sumartotal(ventas);
            let mayor = calcularmayor(ventamayor);
            let menor = calcularmenor(ventas);
            
            let salida = "Total ventas: " + totalventas + 
                         " / venta mayor " + mayor +
                         " / venta menor: " + menor;
        
            let decir = document.getElementById("salida");
            decir.textContent = salida;
        
            // Encontrar los elementos con los valores mayor y menor y asignar clases
            let elementosTiendas = elementoventas.children;
            for (let i = 0; i < elementosTiendas.length; i++) {
                let valorVenta = extraernumero(elementosTiendas[i].children[1]);
                if (valorVenta === mayor) {
                    elementosTiendas[i].classList.add("venta-mayor");
                } else if (valorVenta === menor) {
                    elementosTiendas[i].classList.add("venta-menor");
                }
            }
        }
        
       
        
        
        
        
        
            
        
        
        function sumartotal(array){
            let total = 0;
            for(let venta of array){
                total = total + venta;
    
            }
            return total;
        }
        function calcularmayor(array){
     let maximo = array[0];
     for(let venta of array){
        if (venta > maximo){
            maximo = venta;
        }
     }
     return maximo;
        }
        function calcularmenor(array){
            let menor = array[0];
            for(let venta of array){
               if (venta < menor){
                   menor = venta;
               }
            }
            return menor;
        }