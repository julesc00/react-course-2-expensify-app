const person = {
  name: "Julio",
  age: 44,
  location: {
    city: "Tepatitlan",
    state: "Jalisco",
    zipcode: 47600
  }
};

const { name, age } = person;

const { city, state, zipcode } = person.location;

console.log(`${name} is ${age} years old.`);

console.log(`${city}  is in the state of ${state} with zipcode ${zipcode}.`);

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    // name: "Penguin"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);

// const estudianteUno = {
//   nombre: "Pepito",
//   edad: 17,
//   tel: 3781234567,
//   domicilio: {
//     calle: "La Vida",
//     colonia: "La Verija",
//     ciudad: "Tejeringo el Chico",
//     estado: "Jalisco",
//     pais: "Mexico",
//     codigoPostal: 47000
//   }
// }

// const { nombre, edad, tel } = estudianteUno;

// const { calle, ciudad, colonia, estado, codigoPostal } = estudianteUno.domicilio;

// console.log(`${nombre} vive en calle ${calle}, en la colonia ${colonia}, en la ciudad de ${ciudad}, ${estado}, con código postal ${codigoPostal}.`);

const domicilio = [
  "Pantaleón Leal 194",
  "Colonia Centro",
  "Tepatitlán de Morelos",
  "Jalisco",
  "47600"
];

const [, , ciudad = "Quebec", estado] = domicilio;

console.log(`Usted está en ${ciudad}, ${estado}.`);

const item = ["Coffee (hot)", "$2.00", "2.50", "2.75"];

const [coffee, ,clientPrice] = item;

console.log(`Your ${coffee} is $${clientPrice}`);

