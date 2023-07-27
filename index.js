// 1. Crea una lista de contactos con datos predefinidos, cada contacto debe contener la siguiente información como objetos: { id, nombres, apellidos, teléfono, ubicaciones, ciudad, dirección }.
let ID = 0;
const listaContactos = [
  {
    id: ID,
    nombres: "Diego",
    apellidos: "Lopez",
    telefono: 3122878866,
    ubicacion: {
      ciudad: "Toluviejo",
      direccion: "Cll. 4 # 3-55",
    },
  },
];

// 2. Crea una función para añadir un nuevo contacto a una lista
const agregarContacto = (
  nombres,
  apellidos,
  telefono = 0,
  ciudad = "NA",
  direccion = "NA"
) => {
  const contacto = {
    id: ++ID,
    nombres,
    apellidos,
    telefono,
    ubicacion: {
      ciudad,
      direccion,
    },
  };
  listaContactos.push(contacto);
};

// 3. Crea una función para actualizar un contacto de la lista
const actualizarContacto = (
  id,
  nombresUpdate,
  apellidosUpdate,
  telefonoUpdate,
  ciudadUpdate,
  direccionUpdate
) => {
  let index = listaContactos.findIndex((c) => c.id === id);
  const {
    nombres,
    apellidos,
    telefono,
    ubicacion: { ciudad, direccion },
  } = listaContactos[index];
  listaContactos[index].nombres = nombresUpdate || nombres;
  listaContactos[index].apellidos = apellidosUpdate || apellidos;
  listaContactos[index].telefono = telefonoUpdate || telefono;
  listaContactos[index].ubicacion.ciudad = ciudadUpdate || ciudad;
  listaContactos[index].ubicacion.direccion = direccionUpdate || direccion;
};

// 4. Crea una función para borrar un contacto existente de la lista
const eliminarContacto = (id) => {
  if (!isNaN(id)) {
    let index = listaContactos.findIndex((c) => c.id === id);
    if (index >= 0) listaContactos.splice(index, 1);
    else console.log(`ID ${id} no válido`);
  } else console.log(`ID "${id}" del contacto a eliminar no es existe`);
};

// 5. Crea una función para imprimir en consola los contactos presentes en la lista
const listarContactos = () => {
  for (let i = 0; i < listaContactos.length; i++) {
    const {
      id,
      nombres,
      apellidos,
      telefono,
      ubicacion: { ciudad, direccion },
    } = listaContactos[i];
    console.log(
      `${
        i + 1
      }. ID: ${id} - Nombre completo: ${nombres} ${apellidos} - Teléfono: ${telefono} - Dirección: ${direccion}, ${ciudad}`
    );
  }
  console.log("\n");
};

listarContactos();
agregarContacto("Juan", "Perez", 32566993, "San Luis", "Dg. 5 cra. 8-12");
listarContactos();
agregarContacto("Daniel", "Jimenez");
listarContactos();
actualizarContacto(2, "", "", 88888888, "Barranquilla", "");
listarContactos();
eliminarContacto(0);
// eliminarContacto(-1);
// eliminarContacto("tg");
listarContactos();
