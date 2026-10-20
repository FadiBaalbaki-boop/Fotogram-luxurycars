let carsImgs = [
    "./assets/img/luxurycar1.png","./assets/img/luxurycar2.png", 
    "./assets/img/luxurycar3.png", "./assets/img/luxurycar4.png",
    "./assets/img/luxurycar5.png", "./assets/img/luxurycar6.png", 
    "./assets/img/luxurycar7.png", "./assets/img/luxurycar8.png",
    "./assets/img/luxurycar9.png", "./assets/img/luxurycar10.png", 
    "./assets/img/luxurycar11.png", "./assets/img/luxurycar12.png"
];

let galerieRef = document.getElementById('galerie');
let dialogPopUpRef = document.getElementById('dialogPopUp');

function init(){
    renderGalerie();
    renderDialog();

}

function renderGalerie(){
    let htmlCode = "";
    for (let i = 0; i < carsImgs.length; i++) {
        htmlCode += '<img class="galerie-bild" src="' + carsImgs[i] + '">';  
    }
    galerieRef.innerHTML = htmlCode;
}


function renderDialog(){
    dialogPopUpRef.innerHTML = getHTMLDialog();

}

function getHTMLDialog(){
    return `<dialog id="fotoDialog">
                <header>
                    <h2></h2>
                    <button id="closeButton">
                        <img src="./assets/icon-button/close.png" alt="Schließen">
                    </button>
                </header>
                <section>
                <img Id="dialogImg" src="" alt="Bild">
                </section>
                <footer>
                    <button id="arrowLeft">
                        <img src="./assets/icon-button/Arrow-Left.png" alt="Zurück">
                    </button>
                    <div></div>
                    <button id="arrowRight">
                        <img src="./assets/icon-button/Arrow-Right.png" alt="Vorwärts">
                    </button>
                </footer>
            </dialog>`;
}