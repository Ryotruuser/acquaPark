const sectionComentarios = document.getElementById("galeria__comentarios");
const sectionFotos = document.getElementById("galeria__fotos");
const galeriaFotos = document.getElementsByClassName("galeria__img");
//
const expandirComentariosOff = document.getElementById("galeria__expandir_off");
const expandirComentariosOn = document.getElementById("galeria__expandir_om");

expandir = () => {
    
    if(galeriaFotos[0].classList.length == 1){
        sectionComentarios.style.display = "none";
        sectionFotos.style.width = "100%"
        for (let i = 0; i <= 18; i++) {
            galeriaFotos[i].classList.add("galeria__expandir_foto");
        }
    }else{
        sectionFotos.style.width = "65vw";
        sectionComentarios.style.display = "flex";
        galeriaFotos[0].classList.remove("galeria__expandir_foto");
    }
   
}

// ativarComentario = () => {
//     if(sectionComentarios.style.display == "none"){
//         sectionFotos.style.width = "50%"
//         sectionComentarios.style.display = "block";
//     }else{
//         sectionFotos.style.width = "100%"
//         sectionComentarios.style.display = "none";
//     }

// }