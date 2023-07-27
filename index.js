// 1. Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
const listaContactos = ["Diego Lopez"];

// 2. Crea una función para añadir un nuevo contacto a una lista
const agregarContacto = (nombres) => {
  listaContactos.push(nombres);
};

// 3. Crea una función para borrar un contacto existente de la lista
const eliminarContacto = (contacto) => {
  let index = listaContactos.indexOf(contacto);
  if (index >= 0) listaContactos.splice(index, 1);
  else
    console.log(
      `El contacto a eliminar "${contacto}" no se encuentra registrado \n`
    );
};

// 4. Crea una función para imprimir en consola los contactos presentes en la lista
const listarContactos = () => {
  for (let i = 0; i < listaContactos.length; i++) {
    console.log(`${i + 1}. ${listaContactos[i]}`);
  }
  console.log("\n");
};

listarContactos();
agregarContacto("Juan Perez");
listarContactos();
agregarContacto("Daniel Jimenez");
listarContactos();
eliminarContacto("Diego Lopez");
// eliminarContacto("Diego Lopes");
listarContactos();
