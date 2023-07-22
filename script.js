        const musica = document.querySelector(".musica")
        let inputRange = document.querySelector(".input-range")

        function produzirAudio(){
            if(musica.paused){
                musica.play()
            }
            else{
                musica.pause()
            }
        }

        inputRange.min = 0 
        inputRange.max = musica.duration 

        musica.ontimeupdate = function (){
            inputRange.value = musica.currentTime
        }

        inputRange.oninput = function (){
            musica.currentTime = inputRange.value 

        }

// menu - lista de musicas

const menuBar = document.querySelector(".fa-bars")
let listaMusica = document.querySelector(".item-lista")

menuBar.addEventListener("click", ()=>{
    if(listaMusica.style.display == "none"){
        listaMusica.style.display = "block"
    }
    else{
        listaMusica.style.display = "none"
    }
})