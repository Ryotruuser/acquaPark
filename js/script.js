const sectionComentarios = document.getElementById("galeria__comentarios");
const sectionFotos = document.getElementById("galeria__fotos");
const galeriaFotos = document.getElementsByClassName("galeria__img");
//
const expandirComentariosOff = document.getElementById("galeria__expandir_off");
const expandirComentariosOn = document.getElementById("galeria__expandir_om");

expandir = () => {
    if(window.innerWidth >= 991){
        if(galeriaFotos[0].classList.length == 1){
            sectionComentarios.style.display = "none";
            sectionFotos.style.width = "100%"
            for (let i = 0; i <= 18; i++) {
                galeriaFotos[i].classList.add("galeria__expandir_foto_largura");
            }
        }else{
            sectionFotos.style.width = "65vw";
            sectionComentarios.style.display = "flex";
            for (let i = 0; i <= 18; i++) {
                galeriaFotos[i].classList.remove("galeria__expandir_foto_largura");
            }
        }
    }else if(window.innerWidth <= 990){
        if(galeriaFotos[0].classList.length == 1){
            sectionComentarios.style.display = "none";
            sectionFotos.style.height = "100%";
            for (let i = 0; i <= 18; i++) {
                galeriaFotos[i].classList.add("galeria__expandir_foto_altura");
            }
        }else{
            sectionFotos.style.width = "100%";
            sectionFotos.style.height = "60%";
            sectionComentarios.style.display = "flex";
            for (let i = 0; i <= 18; i++) {
                galeriaFotos[i].classList.remove("galeria__expandir_foto_altura");
            }
        }
    }

   
}

window.addEventListener("resize", () => {
    if(window.innerWidth <= 990){
        sectionFotos.style.width = "100%";
        for (let i = 0; i <= 18; i++) {
            galeriaFotos[i].classList.remove("galeria__expandir_foto_largura");
        }

    }else if(window.innerWidth >= 991){
        sectionFotos.style.width = "65vw";
        sectionComentarios.style.display = "flex";
        for (let i = 0; i <= 18; i++) {
            galeriaFotos[i].classList.remove("galeria__expandir_foto_altura");
        }
    }
});