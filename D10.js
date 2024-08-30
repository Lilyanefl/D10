/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà:
   name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Melanie",
  surname: "Santamaria",
  age: 27,
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me.age);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array 
  chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["Javascript", "Java", "Python"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("C++");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(p1, p2) {
  if (p1 > p2) {
    return p1;
  } else if (p2 > p1) {
    return p2;
  }
}
console.log("Il numero piu grande e " + whoIsBigger(8, 14));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente
   ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(str) {
  let words = str.split(" ");
  let wordsCapitalized = [];
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    let firstLetter = w.charAt(0).toUpperCase();
    let remainingLetters = w.slice(1);
    let completeWord = firstLetter + remainingLetters;
    wordsCapitalized.push(completeWord);
  }
  return wordsCapitalized;
}
console.log(splitMe("mi piace il mango"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, 
  altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(valoreBooleano, stringa) {
  let noFirstChar = stringa.substring(1);
  let noLastChar = stringa.slice(0, -1);
  if (valoreBooleano === true) {
    return noFirstChar;
  } else {
    return noLastChar;
  }
}
console.log(deleteOne(true, "ciao"));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna 
  eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(stringWithNumbers) {
  let stringWithoutNumbers = stringWithNumbers
    .split(" ")
    .filter((char) => isNaN(char))
    .join(" ");
  return stringWithoutNumbers;
}
console.log(onlyLetters("Ho 9 gatti"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro 
  e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(str) {
  let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(str);
}
console.log(isThisAnEmail("janedoe@gmail.com"));
console.log(isThisAnEmail("emailfalsa"));

// utilizzo il pattern dell'oggetto RegExp per confrontare il testo con un pattern

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  let data = new Date();
  data = data.getDay();
  switch (data) {
    case 1:
      data = "Lunedì";
      break;
    case 2:
      data = "Martedì";
      break;
    case 3:
      data = "Mercoledì";
      break;
    case 4:
      data = "Giovedì";
      break;
    case 5:
      data = "Venerdì";
      break;
    case 6:
      data = "Sabato";
      break;
    case 7:
      data = "Domenica";
      break;
  }
  return data;
}

console.log(whatDayIsIt());

// sono sicura ci fosse un modo più veloce ma è la prima cosa che ho pensato

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, 
  e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i 
  valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }

  
*/

function rollTheDices(num) {
  let risultato = {
    sum: 0,
    values: [],
  };
  for (let i = 0; i < num; i++) {
    let roll = dice();
    risultato.values.push(roll);
    risultato.sum += roll;
  }

  return risultato;
}

console.log(rollTheDices(10));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e 
  ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(data) {
  let dataInput = new Date(data);
  let dataDiOggi = new Date();
  let dataDifferenza = dataDiOggi - dataInput;
  let differenzaDateCalc = Math.floor(dataDifferenza / (1000 * 60 * 60 * 24));
  return differenzaDateCalc;
}
let nuovaData = new Date();
console.log(
  "Sono passati " + howManyDays("2024-06-15") + " giorni dalla data fornita"
);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi
   è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
  let dataDiOggi = new Date();
  let giornoCorrente = dataDiOggi.getDate();
  let meseCorrente = dataDiOggi.getMonth() + 1;
  let risultato = giornoCorrente.toString() + "," + meseCorrente.toString();
  let mioCompleanno = "3,4";
  if (risultato === mioCompleanno) {
    return true;
  } else {
    return false;
  }
}

console.log(isTodayMyBirthday());
// Arrays & Oggetti
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; 
  deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(obj, str) {
  obj.forEach((movie) => {
    delete movie[str];
  });
  return obj;
}

moviesRemoved = deleteProp(movies, "Type");
console.log(moviesRemoved);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie() {
  let moviesNew = movies[0];
  movies.forEach((film) => {
    if (parseInt(film.Year) > parseInt(moviesNew.Year)) {
      moviesNew = film;
    }
  });
  return moviesNew;
}
let filmPiuNuovo = newestMovie();
console.log(filmPiuNuovo);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies() {
  return movies.length;
}
let numeroDiFilm = countMovies();
console.log(numeroDiFilm);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con 
  solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears() {
  return movies.map((movie) => parseInt(movie.Year));
}
let titoliDeiFilm = onlyTheYears();
console.log(titoliDeiFilm);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente 
  i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium() {
  return movies.filter(
    (movie) => parseInt(movie.Year) < 2000 && parseInt(movie.Year) > 999
  );
}
let arrayFilmUltimoMillennio = onlyInLastMillennium();
console.log(arrayFilmUltimoMillennio);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli
   anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(film) {
  return film.reduce((acc, curr) => acc + parseInt(curr.Year), 0);
}

console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una 
  stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(str) {
  let nuovoArray;
  nuovoArray = movies.filter((movie) =>
    movie.Title.toUpperCase().includes(str.toUpperCase())
  );
  if (typeof nuovoArray !== "undefined" && nuovoArray.length > 0) {
    return nuovoArray;
  } else {
    return 1;
  }
}
let Controllo = searchByTitle("Aveng");
if (Controllo !== 1) {
  console.log(Controllo);
} else {
  console.log("Non e stato possibile trovare il film richiesto");
}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa
   come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa
   fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(str) {
  let match = [];
  let unmatch = [];
  let obj = {
    match: [],
    unmatch: [],
  };
  str = str.toUpperCase();

  movies.forEach((movie) => {
    let movieUpperCase = movie.Title.toUpperCase();
    if (movieUpperCase.includes(str)) {
      obj.match.push(movie);
    } else {
      obj.unmatch.push(movie);
    }
  });
  return obj;
}

console.log(searchAndDivide("Flies"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e 
  ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(num) {
  let arrayTemp = movies;
  arrayTemp.splice(num, 1);
  return arrayTemp;
}
console.log(removeIndex(2));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function findContainer() {
  let contenitore = document.getElementById("container");
}
findContainer();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function getTds() {
  let dataCell = document.querySelectorAll("td");
  return dataCell;
}
getTds();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto 
  in ogni tag <td> all'interno della pagina.
*/

function changeTds() {
  let dataCell = document.querySelectorAll("td");
  dataCell.forEach((cell) => {
    cell.textContent = "Mango";
  });
}
changeTds();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function changeColor() {
  let links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.style.background = "red";
  });
}

changeColor();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function eleToList() {
  let unorderedList = document.getElementById("myList");
  let listItem = document.createElement("li");
  unorderedList.appendChild(listItem).innerText = "Elemento 5";
}
eleToList();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function removeItems() {
  let unorderedList = document.getElementById("myList");
  while (unorderedList.firstChild) {
    unorderedList.removeChild(unorderedList.lastChild);
  }
}
removeItems();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function trTest() {
  let trs = document.querySelectorAll("tr");
  for (let i = 0; i < trs.length; i++) {
    trs[i].classList.add("test");
  }
}
trTest();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e 
  costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(num) {
  for (let i = 1; i <= num; i++) {
    let rigaInit = "";
    for (let f = 0; f < i; f++) {
      rigaInit += "*";
    }
    console.log(rigaInit);
  }
}

halfTree(5);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce 
  un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(num) {
  for (let i = 1; i <= num; i++) {
    let rigaInit = "";
    for (let f = 0; f < num - i; f++) {
      rigaInit += " ";
    }
    for (let c = 0; c < 2 * i - 1; c++) {
      rigaInit += "*";
    }
    console.log(rigaInit);
  }
}
tree(5);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e 
  ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isItPrime(4));
