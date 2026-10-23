function getHTMLDialog(){
    return `<dialog id="fotoDialog" class="foto-dialog"
            role="dialog" aria-modal="true" aria-labelledby="title"
            onclick="closeDialogOnBackground(event)">
                <header class="header-dialog">
                    <h2 id="title" class="title">${carsNames[aktuellIndex]}</h2>
                    <button id="closeButton" class="close" 
                    type="button" aria-label="Fotoansicht schließen" 
                    onclick="closeDialog()">
                        <img src="./assets/icon-button/Close.png" alt="Schließen">
                    </button>
                </header>
                <main class="img-section">
                <img Id="dialogImg" class="dialog-img" src="" alt="Luxua-Fahrzeuge">
                </main>
                <footer class="footer-dialog">
                    <button id="arrowLeft" class="arrow" 
                    type="button" aria-label="Vorheriges Foto">
                        <img src="./assets/icon-button/Arrow-Left.png" alt="Zurück" onclick="event.stopPropagation(); backPicture(aktuellIndex);">
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