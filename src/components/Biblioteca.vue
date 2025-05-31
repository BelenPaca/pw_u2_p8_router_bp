<template>
  <div class="container">
    <div>
      <h1>La Casa de los Libros</h1>
    </div>
    <div class="textos">
      <label for="id_titulo">TÍtulo</label>
      <input v-model="nuevoTitulo" id="id_titulo" type="text" />
      <span v-if="mensaje.nombre">{{ mensaje.nombre }}</span>
      <label for="id_autor">Autor</label>
      <input v-model="nuevoAutor" id="id_autor" type="text" />
      <span v-if="mensaje.apellido"> {{ mensaje.apellido }}</span>
      <label for="id_genero">Género</label>
      <input v-model="nuevoGenero" id="id_genero" type="text" />

      <label for="id_ano">Año</label>
      <input v-model="nuevoAno" id="id_ano" type="number" />

      <label for="id_editorial">Editorial</label>
      <input v-model="nuevaEditorial" id="id_editorial" type="text" />
    </div>

    <br />
    <button v-on:click="agregarLibro"><b>Guardar</b></button>

    <div v-show="mensaje" class="mensaje">
      <h3>Libro Guardado Exitosamente</h3>
    </div>

    <ul>
      <li v-for="{ titulo, autor, genero, ano, editorial } in lista" :key="titulo + autor">
        TÍtulo: {{ titulo }} - Autor: {{ autor }} - Género: {{ genero }} -
        Año: {{ ano }} - Editorial: {{ editorial }}
      </li>
    </ul>

    <table border="1">
      <thead>
        <tr>
          <th>Título</th>
          <th>Autor</th>
          <th>Género</th>
          <th>Año</th>
          <th>Editorial</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ titulo, autor, genero, ano, editorial } in lista" :key="titulo + autor">
          <td>{{ titulo }}</td>
          <td>{{ autor }}</td>
          <td>{{ genero }}</td>
          <td>{{ ano }}</td>
          <td>{{ editorial }}</td>
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
      nuevoTitulo: "",
      nuevoAutor: "",
      nuevoGenero: "",
      nuevoAno: null,
      nuevaEditorial: "",
      lista: [
        { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Ficción", ano: 1967, editorial: "Editorial Sudamericana" },
        { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", genero: "Ficción", ano: 1943, editorial: "Reynal & Hitchcock" },
        { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", genero: "Ficción", ano: 1605, editorial: "Francisco de Robles" },
      ],
      mensaje: false,
      mensajeTexto: {
        nombre: null,
        apellido: null,
      }
    };
  },
  methods: {
    agregarLibro() {
      if (this.validarEntradas()) {
        const nuevo = {
          titulo: this.nuevoTitulo,
          autor: this.nuevoAutor,
          genero: this.nuevoGenero,
          ano: this.nuevoAno,
          editorial: this.nuevaEditorial,
        };

        this.lista.push(nuevo);

        this.mensaje = true;

        setTimeout(() => {
          this.mensaje = false;
        }, 3000);

        this.limpiarPagina();
      }
    },

    validarEntradas() {
      this.mensajeTexto.nombre = null;
      this.mensajeTexto.apellido = null;

      let numero = 2;

      if (!this.nuevoTitulo || this.nuevoTitulo.trim() === "") {
        this.mensajeTexto.nombre = "Título es obligatorio";
        numero--;
      }

      if (!this.nuevoAutor || this.nuevoAutor.trim() === "") {
        this.mensajeTexto.apellido = "Autor es obligatorio";
        numero--;
      }

      return numero === 2;
    },

    limpiarPagina() {
      this.nuevoTitulo = "";
      this.nuevoAutor = "";
      this.nuevoGenero = "";
      this.nuevoAno = null;
      this.nuevaEditorial = "";
      this.mensajeTexto.nombre = null;
      this.mensajeTexto.apellido = null;
    }
  }
};
</script>


<style scoped>
.container {
  background: #637b9b;
  border: 1px solid #456960;
  border-radius: 16px;
  max-width: 900px;
  margin: 50px auto;
  padding: 30px;
}

h1 {
  color: #2c1f1f;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 40px;
}

label {
  display: block;
  color: #ffffff;
  text-align: left;
  font-size: 17px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0px 35px;
  padding: 5px;
}

input {
  background: #dce9ff;
  color: #181717;
  width: 90%;
  border-radius: 6px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 6px 10px;
}

button {
  background: #2c3e50;
  color: #fff;
  padding: 10px 15px;
  border-radius: 8px;
  border: #070707 solid 2px;
  font-size: 18px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  margin: 15px;
  width: 130px;
  text-align: center;

}

button:hover {
  background: rgb(72, 135, 164);
  transform: scale(1.05);
}

.mensaje {
  color: white;
  margin: 20px
}

.mensaje h3 {
  margin: 0;
  background-color: transparent;
}

ul {
  list-style: none;
  margin-top: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 0 20px;
}

li {
  background: #f1e4eb;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  color: #333;
  font-size: 14px;

}

table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.95rem;
  background-color: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  margin: 40px auto;
  text-align: center;
}

thead {
  background-color: #2c3e50;
}

thead th {
  color: #ffffff;
  font-weight: 600;
  padding: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

tbody tr {
  transition: background-color 0.3s ease;
}

tbody tr:nth-child(even) {
  background-color: #e3f0fd;
}

tbody tr:hover {
  background-color: #e0ebf5;
  transform: scale(1.01);
  transition: background 0.3s, transform 0.2s;
}

tbody td {
  padding: 14px;
  border-bottom: 1px solid #ddd;
  color: #333;
}
</style>