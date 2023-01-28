//função do botão ADD:

const botaoAdicionar = document.querySelector(".botao-adicionar");
let valores = document.querySelector("#valores");
var opcoes = document.querySelector("#opcoes");
let listaValores = [];

var selecao = "Bubble Sort"
opcoes.addEventListener("change", () => {
    selecao = opcoes.value;
})

function adicionar() {
    let entrada = document.querySelector("#valor").value;
    item = `<li>${entrada}</li>`;
    valores.insertAdjacentHTML('afterbegin', item);

    const itemValores = document.getElementsByTagName("li");
    for (contador = 0; contador < itemValores.length; contador++) {
        itemValores[contador].classList.add("item-valores");
    };

    listaValores.push(parseInt(entrada));
}

botaoAdicionar.addEventListener("click", adicionar);

//-----------------------------------------

function swap(item1, item2) {
    [listaValores[item1], listaValores[item2]] = [listaValores[item2], listaValores[item1]];
}

//função de bubble-sort:
const botaoOrdenar = document.querySelector(".botao-ordenar");

function bubbleSort() {
    for (let j = listaValores.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (listaValores[i] > listaValores[i + 1]) {
                swap(i, i + 1);
            };
        };
    };
}

//função de Selection-sort:
function selectionSort(vetor) {
    let menor;

    for (let i = 0; i < vetor.length - 1; i++) {
        menor = i;
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j;
            }
        }
        if (i != menor) {
            swap(i, menor);
        }
    }
    return vetor;
}

//função de Quick-sort:
function quickSort(vetor) {
    if (vetor.length === 0) return [];
    if (vetor.length === 1) return vetor;

    var pivot = vetor[0]
    var inicio = vetor.filter(n => n < pivot);
    var igual = vetor.filter(n => n === pivot);
    var fim = vetor.filter(n => n > pivot);

    return quickSort(inicio).concat(igual).concat(quickSort(fim));
}

botaoOrdenar.addEventListener("click", () => {
    if (selecao === "Bubble Sort") {
        bubbleSort();
        trocaItemLi();
        console.log(`A lista foi ordenada pela função ${selecao}`);
    }

    else if (selecao === "Selection Sort") {
        selectionSort(listaValores);
        trocaItemLi();
        console.log(`A lista foi ordenada pela função ${selecao}`);
    }

    else if (selecao === "Quick Sort") {
        listaValores = quickSort(listaValores);
        trocaItemLi();
        console.log(`A lista foi ordenada pela função ${selecao}`);
    }

    else if (selecao === "") {
        alert("Selecione uma opção de ordenação!");
    }
})

function trocaItemLi() {
    let itemValores = document.querySelectorAll(".item-valores");
    for (let i in itemValores) {
        itemValores[i].textContent = listaValores[i];
        i++;
    };
};


//função do botão MISTURAR:

const botaoMisturar = document.querySelector(".botao-misturar");

function shuffle(vetor) {
    for (let i = vetor.length - 1; i > 0; i--) {
        const j = parseInt(Math.random() * (i + 1));
        swap(i, j);
    }
    return vetor;
};

botaoMisturar.addEventListener("click", () => {
    shuffle(listaValores)
    trocaItemLi();
});