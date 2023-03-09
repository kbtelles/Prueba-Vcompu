 /* ************************************************************************************************************ */
 //BASE DE DATOS:
 let contenido = [
    {
        Título: " - Git Clone",
        Descripción: "<br> Se utiliza para apuntar a un repositorio existente y clonar o copiar dicho repositorio en un nuevo directorio, en otra ubicación."
    },
    {
        Título: "- Git add",
        Descripción: "<br> Sirve para añadir un cambio del directorio de trabajo en el entorno de ensayo. "
    },
    {
        Título: "- Git Status",
        Descripción: "<br> Permite mostrar los diferentes estados de los archivos en tu directorio de trabajo y área de ensayo."
    },
    {
        Título: "- Git Commit",
        Descripción: "<br> Se utiliza para crear un comentario en el historial de los repositorios."    
    }
 ]
 /* ************************************************************************************************************ */

 //MÉTODO PARA CAJA 1:
function metodo1 (){
    let caja1 = document.querySelector(".caja1");

    caja1.innerHTML= (contenido[0].Título  +  contenido[0].Descripción);
}
metodo1();

 /* ************************************************************************************************************ */

 //MÉTODO PARA CAJA 2:
 function metodo2 (){
    let caja2 = document.querySelector(".caja2");

    caja2.innerHTML= (contenido[1].Título  +  contenido[1].Descripción);
}
metodo2();

 /* ************************************************************************************************************ */

 //MÉTODO PARA CAJA 3:
 function metodo3 (){
    let caja3 = document.querySelector(".caja3");

    caja3.innerHTML= (contenido[2].Título  +  contenido[2].Descripción);
}
metodo3();

 /* ************************************************************************************************************ */

 //MÉTODO PARA CAJA 4:
 function metodo4 (){
    let caja4 = document.querySelector(".caja4");

    caja4.innerHTML= (contenido[3].Título  +  contenido[3].Descripción);
}
metodo4();

 /* ************************************************************************************************************ */