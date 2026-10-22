let carsImgs = [
    "./assets/img/luxurycar1.png","./assets/img/luxurycar2.png", 
    "./assets/img/luxurycar3.png", "./assets/img/luxurycar4.png",
    "./assets/img/luxurycar5.png", "./assets/img/luxurycar6.png", 
    "./assets/img/luxurycar7.png", "./assets/img/luxurycar8.png",
    "./assets/img/luxurycar9.png", "./assets/img/luxurycar10.png", 
    "./assets/img/luxurycar11.png", "./assets/img/luxurycar12.png"
];

const carsNames = [
    "Lamborghini green", "Porsche magic bluelight",
     "Lexus orange", "Porsche oldtimer", "Porsche modern",
    "Lexus blue sport", "Lexus black sport", "Ford sport Gold edition", 
    "Porsche caprio black", "Mercedes-Benz fast and furios", "Lamborghini sand magic",
     "Porsche silver edition" ];

let galerieRef = document.getElementById('galerie');
let dialogPopUpRef = document.getElementById('dialogPopUp');
let aktuellIndex = 0;

function init(){
    renderDialog();
    renderGalerie();
    console.log(document.getElementById("title"));
    

}

function renderGalerie(){
    galerieRef.innerHTML = "";
    for (let i = 0; i < carsImgs.length; i++) {
        galerieRef.innerHTML += `<button type="button" class="button-galerie"  onclick="openDialog(${i})">
        <img
        class="galerie-bild"
        src="${carsImgs[i]}"
        alt="${carsNames[i]}"
        >
        </button>`;  
    }
    
}


function renderDialog(){
    dialogPopUpRef.innerHTML = getHTMLDialog();
    console.log(dialogPopUpRef.innerHTML);

}


function openDialog(index){
    let dialogImgRef = document.getElementById('dialogImg');
    aktuellIndex = index;

    let dialogElement = document.getElementById('fotoDialog');
    dialogImgRef.setAttribute("src", carsImgs[index]);

    let titleElement = document.getElementById('title');
    titleElement.textContent = carsNames[aktuellIndex];

    dialogElement.showModal();
}

function nextPicture(index){
    aktuellIndex = index + 1;
    if(aktuellIndex >= carsImgs.length){
        aktuellIndex = 0;
    }
    let dialogImgRef = document.getElementById('dialogImg');
    dialogImgRef.setAttribute("src", carsImgs[aktuellIndex]);

    let imgCounterRef = document.getElementById('imgCounter');
    imgCounterRef.textContent = `${aktuellIndex + 1}  /  ${carsImgs.length}`;

     let titleElement = document.getElementById('title');
    titleElement.textContent = carsNames[aktuellIndex];
}

function closeDialog(){
    let dialogElement = document.getElementById('fotoDialog');
    dialogElement.close();
}

function getHTMLDialog(){
    return `<dialog id="fotoDialog" class="foto-dialog"
            role="dialog" aria-modal="true" aria-labelledby="title">
                <header class="header-dialog">
                    <h2 id="title" class="title">${carsNames[aktuellIndex]}</h2>
                    <button id="closeButton" class="close" 
                    type="button" aria-label="Fotoansicht schließen" 
                    onclick="closeDialog()">
                        <img src="./assets/icon-button/Close.png" alt="Schließen">
                    </button>
                </header>
                <section class="img-section">
                <img Id="dialogImg" class="dialog-img" src="" alt="Luxua-Fahrzeuge">
                </section>
                <footer class="footer">
                    <button id="arrowLeft" class="arrow" 
                    type="button" aria-label="Vorheriges Foto">
                        <img src="./assets/icon-button/Arrow-Left.png" alt="Zurück">
                    </button>
                    <p id="imgCounter" class="counter" 
                    aria-live="polite" aria-atomic="true">1 / 12</p>
                    <button id="arrowRight" class="arrow" 
                    type="button" aria-label="Nächstes Foto" onclick= "event.stopPropagation(); nextPicture(aktuellIndex);">
                        <img src="./assets/icon-button/Arrow-Right.png" alt="Vorwärts">
                    </button>
                </footer>
            </dialog>`;
}