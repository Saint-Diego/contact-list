// 1. Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
const listaContactos = [
  {
    nombres: "Diego Lopez",
  },
];

// 2. Crea una función para añadir un nuevo contacto a una lista
const agregarContacto = (nombres) => {
  const contacto = {
    nombres,
  };
  listaContactos.push(contacto);
};

// 3. Crea una función para borrar un contacto existente de la lista
const eliminarContacto = (contacto) => {
  let index = listaContactos.findIndex((c) => c.nombres === contacto);
  if (index >= 0) listaContactos.splice(index, 1);
};

// 4. Crea una función para imprimir en consola los contactos presentes en la lista
const listarContactos = () => {
  for (let i = 1; i <= listaContactos.length; i++) {
    console.log(`${i}. ${listaContactos[i - 1].nombres}`);
  }
  console.log("\n");
};

listarContactos();
agregarContacto("Juan Perez");
listarContactos();
agregarContacto("Daniel Jimenez");
listarContactos();
eliminarContacto("Diego Lopez");
listarContactos();
