// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9 incluso)
// Prezzo calcolato in base all'esercizio visto in precedenza
// Categoria selezionata dall'utente


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).



// funzione alla pressione del tasto genera
var genera = document.getElementById('genera');

genera.addEventListener("click", function() {

    var nome = document.getElementById('nome').value;
    console.log(nome);
    var km = parseInt(document.getElementById('km').value);
    console.log(km);
    var age = document.getElementById('age').value;
    console.log(age);
    var pricePerKm = 0.21;

    // calcolo del prezzo finale prima dell'applicazione degli sconti
    var totale = km * pricePerKm;
    console.log(totale);

    // check se necessari sconti a seconda della fascia d'età
    if(age == 'minorenne'){
        totale = totale * 0.8;
        console.log(totale);
    }
    else if(age == 'over65'){
        totale = totale * 0.6;
        console.log(totale);
    }

    // creazione del numero del treno
    // Codice treno (numero casuale tra 90000 e 100000 escluso)
    var trainCode = Math.floor(Math.random() * 10000) + 90000;
    console.log(trainCode);

    // creazione del numero della carrozza
    // Numero carrozza (numero casuale tra 1 e 9 incluso)
    var trainCarNum = Math.floor(Math.random() * 9) + 1;
    console.log(trainCarNum);
});