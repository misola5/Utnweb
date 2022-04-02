var mimain = document.querySelector ("main");
var headbar = document.querySelector ("header");
var home = document.querySelector("#ini")
var footbar = document.querySelector ("#contac");
var rightbar = document.querySelector ("#barraderecha")

function cargacontenido (urlfile, lugar) {

    var solicitud = new XMLHttpRequest()

    solicitud.open ("GET", urlfile, true)
    solicitud.send()
    solicitud.addEventListener ("loadend", function(){
        if (solicitud.status == 200) {
            var contenido = solicitud.response;
            lugar.innerHTML = contenido
        }
    })
}

cargacontenido ("ajax/inicio.html", mimain)

home.addEventListener("click", function(evento){
    evento.preventDefault()
    console.log ("index")
    cargacontenido ("ajax/inicio.html", mimain)
})

headbar.addEventListener ("click", function(evento) {
    evento.preventDefault()
    console.log ("header")
    if (evento.target.nodeName == "A"){
        var urlfile = evento.target.href;
        cargacontenido (urlfile, mimain)
    }
}
)

footbar.addEventListener ("click", function(evento){
    evento.preventDefault()
    console.log ("footer")
    if (evento.target.nodeName == "A"){
        var urlfile = evento.target.href;
        cargacontenido (urlfile, mimain)
    }
})


mimain.addEventListener ("click", function(evento){
   // evento.preventDefault()
    console.log ("noir")
     if (evento.target.classList.contains("noir")){
         evento.preventDefault()
        var urlfile = evento.target.href;
        cargacontenido (urlfile, mimain)
    } 
    })

mimain.addEventListener ("click", function (evento){
   // evento.preventDefault()
            switch (evento.target.id) {
            case "carrito":
                console.log ("carrito")
                cargacontenido ("ajax/carrito.html", mimain)
            case "dog": 
                console.log ("perro")
                var perro = document.querySelector("#alimentoperro")
                perro.classList.toggle ("alimento")
            break;
            case "cat": 
                console.log ("gato")
                var gato = document.querySelector("#alimentogato")
                gato.classList.toggle ("alimento")
            break;
            case "other": 
                console.log ("otros")
                var otro = document.querySelector("#otroalimento")
                otro.classList.toggle ("alimento")
            break;
            case "belt":
                console.log ("correa")
                var belt = document.querySelector ("#correa")
                belt.classList.toggle ("accesorio")
            break
            case "necklace":
                console.log ("collar")
                var necklace = document.querySelector ("#collar")
                necklace.classList.toggle ("accesorio")
            break
            case "bath":
                console.log ("baño")
                var necklace = document.querySelector ("#sanitario")
                necklace.classList.toggle ("accesorio")
            break
            case "play":
                console.log ("juguetes")
                var necklace = document.querySelector ("#juguetes")
                necklace.classList.toggle ("juguetes")
            break
            default:
                if (evento.target.nodeName == "A"){
                var urlfile = evento.target.href;
                cargacontenido (urlfile, mimain)}
            break
        }
        
    })

   


