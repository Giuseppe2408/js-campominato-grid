// far scegliere al difficoltà all'utente
let inputUtente = document.querySelector('input').value;
let btn = document.querySelector('button');
let grid = document.getElementById('grid');

function easymode() {
    if (inputUtente == 'facile') {
        const node = document.createElement ('div');
        node.className = "square-1"
        return node;
    }
}

let stampa = () => {
    for (let index = 0; index < 100; index++) {
        const divsquare = easymode();
        grid.append(divsquare);
    }
}
// mid mode
function midmode() {
    if (inputUtente == 'medio') {
        const node1 = document.createElement ('div');
        node1.className = "square-2"
        return node1;
    }
}

let stampa1 = () => {
    for (let index = 0; index < 81; index++) {
        const divsquare = midmode();
        grid.append(divsquare);
    }
}

// mid mode
function hardmode() {
    if (inputUtente == 'difficile') {
        const node2 = document.createElement ('div');
        node2.className = "square-3"
        return node2;
    }
}

let stampa2 = () => {
    for (let index = 0; index < 49; index++) {
        const divsquare = hardmode();
        grid.append(divsquare);
    }
}
// usare addevent click
if (inputUtente == 'facile') {
    btn.addEventListener ('click',
    function mode() {
        easymode();
        stampa();
    }
    )
}

else if (inputUtente == 'medio') {
    btn.addEventListener ('click',
    function modeMid() {
        midmode();
        stampa1();
    }
    )
}

else if (inputUtente == 'difficile') {
    btn.addEventListener ('click',
    function modehard() {
        hardmode();
        stampa2();
    }
    )
}

    // se sceglie facile griglia fino a 100 da dividere per 10x10
  
    






// se sceglie 2 griglia fino a 81 9x9
// se sceglie 3 griglia 49 7x7