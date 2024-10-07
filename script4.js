const knihaA = {
    nazev: "Kniha A",
    autor: "Jaromír Velký",
    pocetStran: 250,
    cena: 320,
    naSklade: true
}

const knihaB = {
    nazev: "Kniha B",
    autor: "Mariana Dlouhá",
    pocetStran: 623,
    cena: 850,
    naSklade: true
}


document.body.innerHTML += "<P>Kniha: " + knihaA.nazev + ", autor: " + knihaA.autor + ", počet stran: " + knihaA.pocetStran + "</p>"
document.body.innerHTML += "<P>Kniha: " + knihaB.nazev + ", autor: " + knihaB.autor + ", počet stran: " + knihaB.pocetStran + "</p>"