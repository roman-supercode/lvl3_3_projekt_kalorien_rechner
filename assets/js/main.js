// Grundumsatz bei Männern (Kalorien je Tag)
// 664,7 + (13,7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6,8 * Alter in Jahren) = Grundumsatz
// Grundumsatz bei Frauen (Kalorien je Tag)
// 655,1 + (9,6 * Körpergewicht in kg) + (1,8 * Körpergröße in cm) – (4,7 * Alter in Jahren) = Grundumsatz

// ! Das Ergebnis wird in Kilokalorien ausgegeben.

const calcCalories = () => {
    // Körpergröße
    const bodySize = document.getElementById("bodySize").value;
    // Alter
    const age = document.getElementById("age").value;
    // Gewicht
    const weight = document.getElementById("weight").value;
    // Prüft, ob weiblich oder männlich
    const bodyTypeFemale = document.getElementById("female").checked;
    const bodyTypeMale = document.getElementById("male").checked;
    // PAL=Physical Activity Level
    const activity = document.getElementById("activity").value;

    // Input validation
    if (!bodySize || !age || !weight) {
        alert("Bitte die Felder ausfüllen!");
    }

    let calcGrundumsatz; // Platzhalter zur Berechnung von Grundumsatz
    let calcGesamtumsatz;   // Platzhalter zur Berechnung vonGesamtumsatz
    let calcGrundKilojoule; // Platzhalter zur Berechnung calcGrundKilojoule
    let calcGesamtKilojoule; // Platzhalter zur Berechnung calcGesamtKilojoule

    if (bodyTypeFemale) {
        calcGrundumsatz = 655.1 + (9.6 * weight) + (1.8 * bodySize) - (4.7 * age);
        calcGesamtumsatz = activity * calcGrundumsatz;
        calcGrundKilojoule = calcGrundumsatz * 4.1868;
        calcGesamtKilojoule = calcGesamtumsatz * 4.1868;
    } else {
        calcGrundumsatz = 664.7 + (13.7 * weight) + (5 * bodySize) - (6.8 * age);
        calcGesamtumsatz = activity * calcGrundumsatz;
        calcGrundKilojoule = calcGrundumsatz * 4.1868;
        calcGesamtKilojoule = calcGesamtumsatz * 4.1868;
        console.log(calcGrundumsatz, calcGesamtumsatz);
    }

    // Ergebnis Ausgabe
    const resultGrund = document.getElementById("resultGrundumsatz").innerHTML = (new Intl.NumberFormat('de-DE').format(calcGrundumsatz.toFixed(0)));
    const resultGesamt = document.getElementById("resultGesamtumsatz").innerHTML = (new Intl.NumberFormat('de-DE').format(calcGesamtumsatz.toFixed(0)));
    // Ausgabe in Kilojoule
    const resultKJ = document.getElementById("resultGrKJ").innerHTML = (new Intl.NumberFormat('de-DE').format(calcGrundKilojoule.toFixed(0)));
    const resultKilojoule = document.getElementById("resultGeKJ").innerHTML = (new Intl.NumberFormat('de-DE').format(calcGesamtKilojoule.toFixed(0)));
};

const submitCalc = document.getElementById("calcCalories");
submitCalc.addEventListener("click", calcCalories);

