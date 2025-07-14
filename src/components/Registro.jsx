import Swal from "sweetalert2";
import { registrarUsuario } from "../services/registro";
import { useState } from "react";

export default function Registro() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    contrasena: "",
  });
  //Manejo el cambio en el formulario de registro
  // Utiliza el hook useState para manejar el estado del usuario
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      await registrarUsuario(usuario);
      Swal.fire({
        title: "Registro exitoso",
        text: "Usuario registrado correctamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then(() => {
        setUsuario({
          nombre: "",
          email: "",
          contrasena  : "",
        });
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response?.data?.contrasena|| "No se pudo registrar el usuario",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };
  return (
    <div class="container">
      <h2>Registro usuarios </h2>
      <div className="car shadow">
        <div className="card-body">
          <p className="card-text">
            Por favor, complete el formulario para registrarse.
          </p>
          <form onSubmit={manejarEnvio}>
            <div className="form-group">
              <div className="row">
                <div class="col-lg-12 mb-3">
                  <label htmlFor="nombre" class="form-label">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={usuario.nombre}
                    onChange={manejarCambio}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={usuario.email}
                    onChange={manejarCambio}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="email" className="form-label">
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="contrasena"
                    name="contrasena"
                    value={usuario.contrasena}
                    onChange={manejarCambio}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary mt-3">
                    Registrar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
