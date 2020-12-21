let Personne = function (sonNom, sonPrenom, sonAge, sonSexe) {
    this.nom = sonNom;
    this.prenom = sonPrenom;
    this.age = sonAge;
    this.sexe = sonSexe;
}

let John = new Personne("Doe", "John", 36, "H");
let Harry = new Personne("Potter", "Harry", 21, "H");
let Sandra = new Personne("Lacouverturemegratte", "Sandra", 45, "F");
let Arnold = new Personne("schwarzy", "Arnold", 70, "H");
let Joker = new Personne("Napier", "Jack", 40, "H");

let tableau = [];
tableau.push(John, Harry, Sandra, Arnold, Joker);
console.log(tableau);

for (let x = 0; x < tableau.length; x++) {
    let creaDiv = document.createElement("div");
    creaDiv.innerHTML += tableau[x].nom + " " + tableau[x].prenom + " " + tableau[x].age + " " + tableau[x].sexe + "<br/>";
    document.body.prepend(creaDiv);
}