import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Titulos from './Titulos';
import Formulario from './Fromulario';
import Cards from './Cards';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="root">
    <Titulos type="h1" text="ADMINISTRADOR DE PACIENTES"></Titulos>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <h2>Crear mi Cita</h2>
            <form><label>Nombre Mascota</label><input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota"value="" />
                     <label>Nombre Dueño</label>
                     <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value="" />
                      <label>Fecha</label><input type="date" name="fecha"
                     class="u-full-width" value="" />
                     <label>hora</label><input type="time" name="hora" class="u-full-width"
                     value="" />
                     <label>Sintomas</label><textarea name="sintomas" class="u-full-width"></textarea><button type="submit"
                      class="u-full-width button-primary">Agregar Cita</button></form>
          </div>
          <div class="one-half column">
            <h2>Administra tus citas</h2>
            <div class="cita">
              <p>Mascota: <span>Nina</span></p>
              <p>Dueño: <span>Martin</span></p>
              <p>Fecha: <span>2021-08-05</span></p>
              <p>Hora: <span>08:20</span></p>
              <p>Sintomas: <span>Le duele la pierna</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
            <div class="cita">
              <p>Mascota: <span>Sifon</span></p>
              <p>Dueño: <span>Flecha</span></p>
              <p>Fecha: <span>2023-08-05</span></p>
              <p>Hora: <span>09:24</span></p>
              <p>Sintomas: <span>Duerme mucho</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
            <div class="cita">
              <p>Mascota: <span>Floki</span></p>
              <p>Dueño: <span>Ari</span></p>
              <p>Fecha: <span>2023-08-05</span></p>
              <p>Hora: <span>16:15</span></p>
              <p>Sintomas: <span>No está comiendo</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <App />
    <Titulos />
    <Formulario />
    <Cards />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
