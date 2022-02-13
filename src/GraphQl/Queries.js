import { gql } from "@apollo/client";

export const LEER_RECAUDOS = gql`
query {
    getAllRecaudos {
      nombreCliente
      codigoMaquina
      direccion
      tipoMaquina
      fecha
      contadorInicial
      contadorFinal
      diferencia
      porcentajeCliente
      
    }
  }
`;