
const person = {
    name: prompt("Zadej své jméno"),
    age: Number (prompt("Zadej svůj věk")),
    window: prompt("V jakém jazyce chceš komunikovat?")
  }



  document.body.innerHTML = "<P>Jméno: " + person.name + ", věk: " + person.age + ", mluví v jazyce: " + person.window + "</p>"