// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9 incluso)
// Prezzo calcolato in base all'esercizio visto in precedenza
// Categoria selezionata dall'utente


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).



// salvataggio dello stato genera in una variabile
var genera = document.getElementById('genera');

// funzione alla pressione del tasto genera
genera.addEventListener("click", function() {

    var nome = document.getElementById('nome').value;
    // console.log(nome);

    var km = parseInt(document.getElementById('km').value);
    // console.log(km);

    var age = document.getElementById('age').value;
    // console.log(age);

    // check dei campi se validi
    if (nome != '' && !isNaN(km) && km != null && km != undefined  && age != 'none') {
        var pricePerKm = 0.21;
    
        // calcolo del prezzo finale prima dell'applicazione degli sconti
        var totale = km * pricePerKm;
        var sconto = 'Nessuno sconto';
        // console.log(totale);
    
        // check se necessari sconti a seconda della fascia d'età
        if(age == 'minorenne'){
            totale = totale * 0.8;
            // console.log(totale);
            sconto = 'Sconto Minorenne';
    
        }
        else if(age == 'over65'){
            totale = totale * 0.6;
            // console.log(totale);
            sconto = 'Sconto Over 65';
        }
    
        // approssimazione ad un massimo di due cifre dopo la virgola
        totale = totale.toFixed(2);
    
        // creazione del numero del treno
        // Codice treno (numero casuale tra 90000 e 100000 escluso)
        var trainCode = Math.floor(Math.random() * 10000) + 90000;
        // console.log(trainCode);
    
        // creazione del numero della carrozza
        // Numero carrozza (numero casuale tra 1 e 9 incluso)
        var trainCarNum = Math.floor(Math.random() * 9) + 1;
        // console.log(trainCarNum);
    
    
        document.getElementById('o-nome').innerHTML = nome;
        document.getElementById('o-sconto').innerHTML = sconto;
        document.getElementById('o-trainCar').innerHTML = trainCarNum;
        document.getElementById('o-train').innerHTML = trainCode;
        document.getElementById('o-price').innerHTML = totale + '€';
    
        // mostra sezione biglietto
        document.getElementById("ticket-title").className = "uppercase d-block";
        document.getElementById("ticket").className = "bottom d-block";
    } else {
        if (nome == ''){
            alert('Inserire un nome valido');
        }
        if (isNaN(km) || km == null || km == undefined){
            alert('Inserire un kilometraggio valido in numero')
        }
        if(age == 'none'){
            alert('Selezionare la fascia d\'età');
        }
    }

});


// salvataggio dello stato annulla in una variabile
var annulla = document.getElementById('annulla');

// funzione alla pressione del tasto annulla
annulla.addEventListener("click", function() {

    // rimozione dei dati dai campi di input
    document.getElementById('nome').value = '';
    document.getElementById('km').value = '';
    document.getElementById('age').value = 'none';

    // nascondi sezione del biglietto
    document.getElementById("ticket-title").className = "d-none";
    document.getElementById("ticket").className = "d-none";
});