const divContenedor = document.getElementById("all");
crearClass(divContenedor);

var textoBienvenida = document.createDocumentFragment();
var espacioEscribir = document.createDocumentFragment();
var espacioPublicacion = document.createDocumentFragment();

function bienvenida () {
    let nombre = prompt("¿Como te llamas?").toLocaleUpperCase();
    // let nombre = "MICHAEL";

    let saludo = document.createElement("DIV");
    saludo.setAttribute("id","idSaludo");
    crearClass(saludo);

    let saludoEscrito = document.createElement("DIV");
    saludoEscrito.innerHTML = `Hola ${nombre}<br>¿Que nos vas a contar hoy?`;
    
    let imagenPerfil = document.createElement("IMG");
    imagenPerfil.setAttribute("src",mostrarImagen ());
    imagenPerfil.setAttribute("width","100px");
    crearClass(imagenPerfil);
    
    saludo.appendChild(imagenPerfil);
    saludo.appendChild(saludoEscrito);
    textoBienvenida.appendChild(saludo);
}

function escribir () {
    let redacto = document.createElement("DIV");
    redacto.setAttribute("id","idRedacto");
    crearClass(redacto);
    
    let formulario = document.createElement("FORM");
    formulario.setAttribute("id","idFormulario");
    crearClass(formulario);
    
    let texto = document.createElement("TEXTAREA");
    texto.setAttribute("id","idTexto");
    crearClass(texto);

    let boton = document.createElement("BUTTON");
    boton.setAttribute("id","idBoton");
    boton.setAttribute("onclick","EnviarPublicacion ()");
    crearClass(boton);
    let textboton = "Postear ¡YA!";
    boton.append(textboton);

    formulario.appendChild(texto);
    redacto.appendChild(formulario);
    redacto.appendChild(boton);
    espacioEscribir.appendChild(redacto);
}

function publicacion (post) { 
    let publicaciones = document.createElement("DIV");
    publicaciones.innerText = post;
    publicaciones.setAttribute("id","idPublicacion");
    crearClass(publicaciones);

    zonaPublicaciones.appendChild(publicaciones);
}

function EnviarPublicacion (){
    let texto = document.getElementById("idTexto").value;
    if (texto != ""){
        publicacion (texto);
        document.getElementById("idFormulario").reset();
        console.log(texto);
    }
}

function mostrarImagen () {
    const selc = Math.floor((Math.random())*10);
    console.log(selc);

    if (selc == 0 || selc == 1){
        return "perfiles/perfil_1.jpeg";
    }
    else if (selc == 2 || selc == 3){
        return "perfiles/perfil_2.jpeg";
    }
    else if (selc == 4 || selc == 5){
        return "perfiles/perfil_3.jpeg";
    }
    else if (selc == 6 || selc == 7){
        return "perfiles/perfil_4.jpeg";
    }
    else if (selc == 8 || selc == 9){
        return "perfiles/perfil_5.jpeg";
    }
}

bienvenida ();
escribir ();

var zonaPublicaciones = document.createElement("DIV");
zonaPublicaciones.setAttribute("id","i  dZonaPublic");
crearClass(zonaPublicaciones);
espacioPublicacion.appendChild(zonaPublicaciones);

divContenedor.appendChild(textoBienvenida);
divContenedor.appendChild(espacioEscribir);
divContenedor.appendChild(espacioPublicacion);

//Aplicar Estilos y modificaciones

function    crearClass (element) {
    // element.setAttribute("class","")
    // console.log(element);

    let idElement = element.getAttribute("id")
    // console.log(idElement);

    if (idElement == "all") {
        element.setAttribute("class","w-full h-auto p-10 grid justify-items-center");
    }
    else if (idElement == "idSaludo") {
        element.setAttribute("class","w-full lg:w-3/5 md:w-5/6 flex flex-wrap justify-center items-center space-x-8 py-8");
    }
    else if (idElement == "imagenPerfil") {
        element.setAttribute("class","");
    }
    else if (idElement == "idRedacto") {
        element.setAttribute("class","w-full lg:w-3/5 md:w-5/6  flex justify-center flex-col space-y-8");
    }
    else if (idElement == "idFormulario") {
        element.setAttribute("class","w-auto font-mono");
    }
    else if (idElement == "idTexto") {
        element.setAttribute("class","shadow-md p-5 w-full rounded-md max-h-48 value:font-mono outline-none ");
        element.setAttribute("placeholder","Escribe aqui... (maximo 350 caracteres) ");
        element.setAttribute("maxLength","350");
    }
    else if (idElement == "idBoton") {
        element.setAttribute("class","bg-blue-500 p-4 rounded-lg text-white hover:bg-blue-700");
    }
    else if (idElement == "idZonaPublic") {
        element.setAttribute("class","w-full lg:w-3/5 md:w-5/6 font-mono flex flex-col-reverse");
    }
    else if (idElement == "idPublicacion") {
        element.setAttribute("class","bg-yellow-100 p-5 text-wrap mt-6");
    }
}