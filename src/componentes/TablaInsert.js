import React from "react";
import Maps from "../componentes/Maps"

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,

} from "reactstrap";


import image from '../imagenes/pin ball1.png'




// const data = [
//   { id: 1, fecha: "12/20/2020", nombreCliente: "Wilmer", codigoMaquina: "002", direccion: "Loa Quindos", tipoMaquina: "Pin ball", contadorInicial: "124", contadorFinal: "12", diferencia: "123", porcentajeCliente: "40%", totalCliente: "12123" },
//   { id: 2, fecha: "12/20/2020", nombreCliente: "Mauricio", codigoMaquina: "002", direccion: "Loa Quindos", tipoMaquina: "Pin ball", contadorInicial: "124", contadorFinal: "12", diferencia: "123", porcentajeCliente: "40%", totalCliente: "12123" },
//   { id: 3, fecha: "12/20/2020", nombreCliente: "Anguito", codigoMaquina: "002", direccion: "Loa Quindos", tipoMaquina: "Pin ball", contadorInicial: "124", contadorFinal: "12", diferencia: "123", porcentajeCliente: "40%", totalCliente: "12123" },
//   { id: 4, fecha: "12/20/2020", nombreCliente: "Marcela", codigoMaquina: "002", direccion: "Loa Quindos", tipoMaquina: "Pin ball", contadorInicial: "124", contadorFinal: "12", diferencia: "123", porcentajeCliente: "40%", totalCliente: "12123" },
//   { id: 5, fecha: "12/20/2020", nombreCliente: "Naruto", codigoMaquina: "002", direccion: "Loa Quindos", tipoMaquina: "Pin ball", contadorInicial: "124", contadorFinal: "12", diferencia: "123", porcentajeCliente: "40%", totalCliente: "12123" },
//   { id: 6, fecha: "12/20/2020", nombreCliente: "Tto", codigoMaquina: "002", direccion: "Loa Quindos", tipoMaquina: "Pin ball", contadorInicial: "124", contadorFinal: "12", diferencia: "123", porcentajeCliente: "40%", totalCliente: "12123" },
//   { id: 7, fecha: "12/20/2020", nombreCliente: "Fredy", codigoMaquina: "002", direccion: "Loa Quindos", tipoMaquina: "Pin ball", contadorInicial: "124", contadorFinal: "12", diferencia: "123", porcentajeCliente: "40%", totalCliente: "12123" },
//   { id: 8, fecha: "12/20/2020", nombreCliente: "Mayerly", codigoMaquina: "002", direccion: "Loa Quindos", tipoMaquina: "Pin ball", contadorInicial: "124", contadorFinal: "12", diferencia: "123", porcentajeCliente: "40%", totalCliente: "12123" },


// ];

let data = [];

const divStyle = {

  display: 'block',
  marginTop: 150,
  width: 300

};

const divStyle2 = {

  display: 'block',
  marginLeft: 1,
  margingRigth: 1
};
// Componente de clase
class RegistroUsuario extends React.Component {

  constructor(props) {
    super(props);
    data = props.props;
    console.log("esta es la data",data);
   
  }

  
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    modalRegistroExitoso: false,
    form: {
      id: "",
      fecha: "",
      nombreCliente: "",
      codigoMaquina: "",
      direccion: "",
      tipoMaquina: "",
      contadorInicial: "",
      contadorFinal: "",
      diferencia: "",
      porcentajeCliente: "",
      totalCliente: ""
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  
  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].fecha = dato.fecha;
        arreglo[contador].nombreCliente = dato.nombreCliente;
        arreglo[contador].codigoMaquina = dato.codigoMaquina;
        arreglo[contador].direccion = dato.direccion;
        arreglo[contador].tipoMaquina = dato.tipoMaquina;
        arreglo[contador].contadorInicial = dato.contadorInicial;
        arreglo[contador].contadorFinal = dato.contadorFinal;
        arreglo[contador].diferencia = dato.diferencia;
        arreglo[contador].porcentajeCliente = dato.porcentajeCliente;
        arreglo[contador].totalCliente = dato.totalCliente;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista, modalRegistroExitoso:true });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };



  render() {

    return (
      <>
        <Container >
          <div className="Estilo-Tabla">

            <div>
              <img
                width="110px"
                src={image}
              />
            </div>
            <div>
              <p className="parrafo "><strong>Nombre Cliente : </strong>&nbsp; Mayerly Roa </p>
              <p className="parrafo "><strong>Codigo : </strong>&nbsp; 0001 </p>
              <p className="parrafo "><strong>Direccion : </strong>&nbsp; Los Quindos </p>
              <p className="parrafo "><strong>Tipo de Maquina: </strong>&nbsp; Pin ball</p>

            </div>
            <div >
              <Maps />
            </div>
          </div>
          <div className="divBoton-crear-Recaudo">
            <Button className="botonRecaudo" color="primary"
              onClick={() => this.mostrarModalInsertar()}>Crear Recaudo</Button>
          </div>
          <Table  >
            <thead  >
              <tr >
                <th>ID</th>
                <th>Fecha</th>
                <th>Contador Inicial</th>
                <th>Contador Final</th>
                <th>Diferencia</th>
                <th>Porcentaje Cliente</th>
                <th>Total Cliente</th>
                <th>Accion</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.fecha}</td>
                  <td>{dato.contadorInicial}</td>
                  <td>{dato.contadorFinal}</td>
                  <td>{dato.diferencia}</td>
                  <td>{dato.porcentajeCliente}</td>
                  <td>{dato.totalCliente}</td>

                  <td style={divStyle2}>
                    <Button
                      color="primary"
                      className="botonEditar"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button

                      color="danger"
                      className="botonEliminar"
                      onClick={() => this.eliminar(dato)}


                    >Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <Modal style={divStyle} isOpen={this.state.modalActualizar}>

          <ModalHeader  >
            <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody >
            <FormGroup>
              <span>
                Id:
              </span>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Fecha:
              </label>
              <input
                className="form-control"
                name="fecha"
                type="date"
                onChange={this.handleChange}
                value={this.state.form.fecha}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Contador Inicial:
              </label>
              <input
                className="form-control"
                name="contadorInicial"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.contadorInicial}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Contador Final:
              </label>
              <input
                className="form-control"
                name="contadorFinal"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.contadorFinal}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Diferencia:
              </label>
              <input
                className="form-control"
                name="diferencia"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.diferencia}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Porcentaje Cliente:
              </label>
              <input
                className="form-control"
                name="porcentajeCliente"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.porcentajeCliente}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Total Cliente:
              </label>
              <input
                className="form-control"
                name="totalCliente"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.totalCliente}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal style={divStyle} isOpen={this.state.modalInsertar}>
          <ModalHeader  >
            <div ><h3>Insertar recaudo</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length + 1}
              />
            </FormGroup>


            <FormGroup>
              <label>
                Fecha:
              </label>
              <input
                className="form-control"
                name="fecha"
                type="date"
                onChange={this.handleChange}

              />
            </FormGroup>

            <FormGroup>
              <label>
                Contador Inicial:
              </label>
              <input
                className="form-control"
                name="contadorInicial"
                type="text"
                onChange={this.handleChange}

              />
            </FormGroup>

            <FormGroup>
              <label>
                Contador Final:
              </label>
              <input
                className="form-control"
                name="contadorFinal"
                type="text"
                onChange={this.handleChange}

              />
            </FormGroup>
            <FormGroup>
              <label>
                Diferencia:
              </label>
              <input
                className="form-control"
                name="diferencia"
                type="text"
                onChange={this.handleChange}

              />
            </FormGroup>
            <FormGroup>
              <label>
                Porcentaje Cliente:
              </label>
              <input
                className="form-control"
                name="porcentajeCliente"
                type="text"
                onChange={this.handleChange}

              />
            </FormGroup>
            <FormGroup>
              <label>
                Total Cliente:
              </label>
              <input
                className="form-control"
                name="totalCliente"
                type="text"
                onChange={this.handleChange}

              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal
        style={divStyle}
         isOpen={this.state.modalRegistroExitoso}
        >
          <ModalHeader >
            Respuesta
          </ModalHeader>
          <ModalBody>
           El registro fue exitoso
          </ModalBody> 
          <ModalFooter>
            <Button
              color="primary"

              onClick={()=>{this.setState({modalRegistroExitoso:false})}}
                         >
              Ok
            </Button>
            {' '}
           
          </ModalFooter>
        </Modal>

      </>
    );
  }
}
export default RegistroUsuario;