// far scegliere al difficoltà all'utente
let inputUtente = document.querySelector('input');
let btn = document.querySelector('button');
let grid = document.getElementById('grid');
// usare addevent click
btn.addEventListener ('click',

    // se sceglie facile griglia fino a 100 da dividere per 10x10
    function easymode() {
        if (inputUtente == 'facile') {
            const node = document.createElement ('div');
            node.className = "square-1"
            return node;
        }
    }

    const stampa = () => {
        for (let index = 0; index < 100; index++) {
            const divsquare = easymode();
            grid.append(divsquare);
        }
    }
    
    stampa();




)

// se sceglie 2 griglia fino a 81 9x9
// se sceglie 3 griglia 49 7x7