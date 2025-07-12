import axios from "axios";

const URL = 'http://localhost:8080/registro';

export const registrarUsuario = (usuario) => axios.post(URL, usuario);