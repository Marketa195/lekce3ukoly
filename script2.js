const sazba = Number (prompt("Zadej svoji hodinovou sazbu v Kč")) 
const pocetHodin = Number (prompt("Zadej kolik hodin pracuješ denně")) 
const pocetDniVMesici = Number (prompt("Zadej kolik dní pracuješ v měsíci")) 

const hrubaMzda = sazba * pocetHodin * pocetDniVMesici

document.body.innerHTML = "Vaše hrubá mzda je " + hrubaMzda + " Kč."