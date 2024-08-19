let contenido = document.getElementById("contenido");


function onClick(){
    contenido.innerHTML = `
    <div id="spinnerContainer">
        <img id="spinner" src="./public/assets/boquita_logo.png" width="100px" height="100px" alt="">
        <p>Cargando...</p>
    </div>
    `
    setTimeout(function(){
        contenido.innerHTML = `
        <div id="spinnerContainer">
            <img id="enano-bostero" src="./public/assets/enano-bostero.jpg">
            <h3>Gracias por ver, saludos!</h3>
            <audio id="daleBocaDale" src="./public/assets/audio/Dale dale boca.mp3"></audio>
        </div>
        `
        const audio = new Audio("./public/assets/audio/Dale dale boca.mp3");
        audio.play();
    }, 1500);
}

