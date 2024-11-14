// Variabile per tenere traccia della risposta dell'utente
let clickCount = 0;

// Quando l'utente invia la risposta
document.getElementById("submitAnswer").addEventListener("click", function(event) {
    event.preventDefault();  // Previene il comportamento predefinito di invio del form

    // Ottieni la risposta inserita dall'utente
    var userAnswer = document.getElementById("fixAnswer").value.trim().toLowerCase();

    // Risposta corretta (sincronizzare l'accesso alla risorsa condivisa)
    var correctAnswer = "usa un mutex o lock";

    // Se la risposta è corretta, mostra il bottone "Sblocca la porta"
    if (userAnswer.includes("mutex") || userAnswer.includes("lock")) {
        document.getElementById("result").innerHTML = "Risposta corretta! Hai risolto la race condition.";
        document.getElementById("result").classList.remove("error");
        document.getElementById("result").classList.add("success");
        document.getElementById("goToNextLevelLink").classList.remove("hidden"); // Mostra il link per il prossimo livello
    } else {
        // Risposta sbagliata
        document.getElementById("result").innerHTML = "Ops! La risposta non è corretta. Prova a pensare a come sincronizzare i processi.";
        document.getElementById("result").classList.add("error");
        document.getElementById("result").classList.remove("success");
    }
});
