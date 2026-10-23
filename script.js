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
let dialogImgRef;
let dialogElementRef;
let titleElementRef;
let imgCounterRef;

function init(){
    renderDialog();
    renderGalerie();
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

    dialogImgRef = document.getElementById('dialogImg');
    dialogElementRef = document.getElementById('fotoDialog');
    titleElementRef = document.getElementById('title');
    imgCounterRef = document.getElementById('imgCounter');
}


function openDialog(index){
    aktuellIndex = index;

    dialogImgRef.setAttribute("src", carsImgs[index]);
    titleElementRef.textContent = carsNames[aktuellIndex];
    imgCounterRef.textContent = `${aktuellIndex + 1} / ${carsImgs.length}`;

    dialogElementRef.showModal();
}


function nextPicture(index){
    aktuellIndex = index + 1;
    if(aktuellIndex >= carsImgs.length){
        aktuellIndex = 0;
    }

    dialogImgRef.setAttribute("src", carsImgs[aktuellIndex]);
    imgCounterRef.textContent = `${aktuellIndex + 1}  /  ${carsImgs.length}`;
    titleElementRef.textContent = carsNames[aktuellIndex];
}


function backPicture(index){
    aktuellIndex = index -1;

    if(aktuellIndex < 0){
        aktuellIndex = carsImgs.length - 1;
    }

    dialogImgRef.setAttribute("src", carsImgs[aktuellIndex]);
    imgCounterRef.textContent = `${aktuellIndex + 1}  /  ${carsImgs.length}`;
    titleElementRef.textContent = carsNames[aktuellIndex];
}


function closeDialog(){
    dialogElementRef.close();
}


function closeDialogOnBackground(event){
    if (event.target.id === "fotoDialog"){
        closeDialog();
    }
}

