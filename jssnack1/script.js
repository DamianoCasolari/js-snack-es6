const cars = [ 
    {
        brand : "ww",
        model : "golf",
        fuel : "benzina"
    },
    {
        brand : "ww",
        model : "polo",
        fuel : "benzina"
    },
    {
        brand : "seat",
        model : "leon",
        fuel : "metano"
    },
    {
        brand : "seat",
        model : "ibiza",
        fuel : "metano"
    },
    {
        brand : "audi",
        model : "A3",
        fuel : "benzina"
    },
    {
        brand : "audi",
        model : "A5",
        fuel : "diesel"
    },
    {
        brand : "suzuki",
        model : "jimny",
        fuel : "benzina"
    },
    {
        brand : "ford",
        model : "focus",
        fuel : "diesel"
    },
    {
        brand : "ford",
        model : "fiesta",
        fuel : "gpl"
    },
    {
        brand : "lamborghini",
        model : "huracane",
        fuel : "elettrica"
    },
];


const col1El = document.querySelector(".col1")
const col2El = document.querySelector(".col2")
const col3El = document.querySelector(".col3")

const arrayBenzina = cars.filter(car =>  car.fuel == "benzina" )
console.log(arrayBenzina);
col1El.innerHTML = arrayBenzina;

const arrayDiesel = cars.filter(car =>  car.fuel == "diesel" )
console.log(arrayDiesel);
col2El.innerHTML = arrayDiesel;

const arrayOtherCars = cars.filter(car => car.fuel != "diesel" && car.fuel != "benzina")
console.log(arrayOtherCars);
col3El.innerHTML = arrayOtherCars;



// Snack 1
// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: brand, modello e fuel (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.
