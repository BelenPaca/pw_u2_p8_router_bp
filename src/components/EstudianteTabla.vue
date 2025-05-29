<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>Estudiante Guardado</h1>
    </div>
    <div class="textos">
      <label for="id_nombre">Nombre</label>
      <input v-model="nuevoNombre" id="id_nombre" type="text" />

      <label for="id_apellido">Apellido</label>
      <input v-model="nuevoApellido" id="id_apellido" type="text" />

      <label for="id_genero">Género</label>
      <input v-model="nuevoGenero" id="id_genero" type="text" />

      <label for="id_edad">Edad</label>
      <input v-model="nuevaEdad" id="id_edad" type="number" />

      <label for="id_correo">Correo</label>
      <input v-model="nuevoCorreo" id="id_correo" type="email" />
    </div>

    <br />
    <button v-on:click="agregarEstudiante"><b>Agregar</b></button>

    <ul>
      <li v-for="{ nombre, apellido, genero, edad, correo } in lista" :key="nombre + apellido">
        Nombre: {{ nombre }} - Apellido: {{ apellido }} - Género: {{ genero }} -
        Edad: {{ edad }} - Correo: {{ correo }}
      </li>
    </ul>

    <table border="1">
      <thead>

        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Genero</th>
          <th>Edad</th>
          <th>Correo</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ nombre, apellido, genero, edad, correo } in lista" :key="nombre + apellido">

          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
          <td>{{ genero }}</td>
          <td>{{ edad }}</td>
          <td>{{ correo }}</td>
          <td><button>Ver</button></td>
        </tr>


      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: "",
      nuevoApellido: "",
      nuevoGenero: "",
      nuevaEdad: null,
      nuevoCorreo: "",
      lista: [
        { nombre: "Belen", apellido: "Paca", genero: "F", edad: 20, correo: "belen@gmail.com" },
        { nombre: "Josefina", apellido: "Perez", genero: "F", edad: 22, correo: "josefina@gmail.com" },
        { nombre: "Andy", apellido: "Cueva", genero: "M", edad: 23, correo: "andy@gmail.com" },
        { nombre: "Paul", apellido: "Freire", genero: "M", edad: 24, correo: "paul@gmail.com" },
        { nombre: "Camila", apellido: "Serrano", genero: "F", edad: 25, correo: "camila@gmail.com" },
        { nombre: "Carla", apellido: "Lopez", genero: "F", edad: 26, correo: "carla@gmail.com" },
        { nombre: "Anahis", apellido: "Silva", genero: "F", edad: 27, correo: "anahis@gmail.com" },
      ],
      mostrar: false,
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        genero: this.nuevoGenero,
        edad: this.nuevaEdad,
        correo: this.nuevoCorreo,
      };
      // this.lista.unshift(nuevo);
      this.lista.push(nuevo);
      this.mostrar = true;
      this.nombre = null;

      setTimeout(() => {
        this.mostrar = false;
      }, 3000); //3 segundos 

    },

  },
};
</script>

<style scoped>
.container {
  background: #aea0cc;
  border: 1px solid;
  border-radius: 12px;
  max-width: 900px;
  margin: 50px auto;
  padding: 30px;

}

label {
  display: block;
  color: #333;
  text-align: left;
  margin: 0px 35px;
  padding: 5px;
}

input {
  background: #b4c4db;
  color: #181717;
  width: 90%;
  border-radius: 6px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  padding: 6px 10px;


}

button {
  background: rgb(168, 105, 115);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  margin: 15px;
  width: 100px;

}

ul {
  list-style: none;
  margin-top: 30px;
}

li {
  background: #f1e4eb;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  color: #333;
  font-size: 15px;

}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 0.95rem;
  background-color: #b48fbb;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  margin: 40px auto;
}

thead {
  background-color: #f4f6f8;
}

thead th {
  text-align: left;
  padding: 15px;
  color: #333;
  font-weight: 600;
  border-bottom: 2px solid #e3e6ea;
  text-align: center;

}

tbody tr {
  transition: background-color 0.2s;
}

tbody tr:nth-child(even) {
  background-color: #f9fafb;
}

tbody tr:hover {
  background-color: #eef3f9;
}

tbody td {
  padding: 15px;
  border-bottom: 1px solid #e3e6ea;
  color: #444;
}
</style>