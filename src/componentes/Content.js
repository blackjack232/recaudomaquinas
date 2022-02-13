import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Box from '@mui/material/Box';
import TablaInsert from '../componentes/TablaInsert';
import TablaInsert2 from '../componentes/TablaInsert2';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import imagenPinBall from '../imagenes/pin ball1.png';
import imagenPicachu from '../imagenes/picachu.png'
import imagenBilletes from '../imagenes/billetes.png'
import { useQuery } from '@apollo/client';
import { LEER_RECAUDOS } from "../GraphQl/Queries";


export default function Content(props) {

  const [propiedad, setPropiedad] = useState();
  const [objetoRick, setobjetoRick] = useState();
  const [estado, setEstado] = useState(1);
  const [arregloImagenesPinBall, setArregloImagenesPinBall] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [arregloImagenesPicachu, setarregloImagenesPicachu] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const [arregloImagenesBilletes, setarregloImagenesBilletes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [recaudos, setRecaudos] = useState({});
  const { loading, data, error } = useQuery(LEER_RECAUDOS);
  let data1 = data;



  // const divStyle = {
  //   boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.1)",
  //   padding: 10,
  //   marginTop : 10
  // };

  const imprimirTabla = (item) => {

    //setPropiedad(1);
    if (item === 0) {
      setEstado(0);
    }

    // console.log(item);
  }

  const apiRick = () => {
    // Make a request for a user with a given ID
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        let res = response;
        setobjetoRick(res.data.results);
        // console.log(objetoRick);
        // console.log(res.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed

      });
  }




  const traerData = () => {
    let data1 = data;
    setRecaudos(data1);
    // console.log('recaudos', recaudos);
    setEstado(false);
  }


  useEffect(() => {
    apiRick();
    traerData();
    setPropiedad(props.props);
    setEstado(1)


  }, [props, data])
  return (
    <>
      {propiedad === 0 ? (
        <Box component="main" sx={{ flex: 1, py: 2, px: 1, bgcolor: '#eaeff1' }}>
          <Paper sx={{ maxWidth: 1100, margin: 'auto', overflow: 'hidden' }}>
            <AppBar
              position="static"
              color="default"
              elevation={0}
              sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
              <Toolbar>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <SearchIcon color="inherit" sx={{ display: 'block' }} />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      fullWidth
                      placeholder="Buscar por codigo de Maquina"
                      InputProps={{
                        disableUnderline: true,
                        sx: { fontSize: 'default' },
                      }}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }}
                      onClick={() => setEstado(0)}>
                      Buscar Maquina por Codigo
                    </Button>
                    <Tooltip title="Reload">
                      <IconButton>
                        <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                      </IconButton>
                    </Tooltip>

                  </Grid>
                </Grid>
              </Toolbar>

            </AppBar>
            <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
              {estado == 1 ? (

                <div className="col-12 p-5 row">

                  {arregloImagenesPinBall.map((item, i) => (

                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" style={{ display: 'flex', marginTop: '50px' }} >
                      <div className="Estilo-Card">
                        <img src={imagenPinBall} alt={"tags"} width="80" />
                        <div className="card-body" >
                          <h4 className="card-text">Codigo: 00{i + 1} </h4>
                          <p className="card-text">Tipo : Pinball </p>

                          <a onClick={() => imprimirTabla(i)} target="_blank" className="btn btn-primary btn-block" style={{ display: 'flex' }} >
                            Ver Maquina
                          </a>

                        </div>
                      </div>
                    </div>
                  )
                  )}


                  {arregloImagenesPicachu.map((item, i) => (

                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" style={{ display: 'flex', marginTop: '50px' }} >
                      <div className="Estilo-Card">
                        <img src={imagenPicachu} alt={"tags"} width="150" />
                        <div className="card-body">
                          <h4 className="card-text">Codigo: 00{i + 1} </h4>
                          <p className="card-text">Tipo : Picachu </p>

                          <a onClick={() => imprimirTabla(i)} target="_blank" className="btn btn-primary btn-block" style={{ display: 'flex' }} >
                            Ver Maquina
                          </a>

                        </div>
                      </div>



                    </div>
                  )
                  )}

                  {arregloImagenesBilletes.map((item, i) => (

                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" style={{ display: 'flex', marginTop: '50px' }} >
                      <div className="Estilo-Card">
                        <img src={imagenBilletes} alt={"tags"} width="80" />
                        <div className="card-body">
                          <h4 className="card-text">Codigo: 00{i + 1} </h4>
                          <p className="card-text">Tipo : Picachu </p>

                          <a onClick={() => imprimirTabla(i)} target="_blank" className="btn btn-primary btn-block" style={{ display: 'flex' }}>
                            Ver Maquina
                          </a>

                        </div>
                      </div>



                    </div>
                  )
                  )}


                </div>

              )
                :
                (
                  <div>

                    <TablaInsert props={recaudos.getAllRecaudos} />

                  </div>
                )}
            </Typography>
          </Paper>
        </Box>
      ) : propiedad === 1 ? (

        <Box component="main" sx={{ flex: 1, py: 2, px: 1, bgcolor: '#eaeff1' }}>

          <Paper sx={{ maxWidth: 1100, margin: 'auto', overflow: 'hidden' }}>
            <AppBar
              position="static"
              color="default"
              elevation={0}
              sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
              <Toolbar>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <SearchIcon color="inherit" sx={{ display: 'block' }} />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      fullWidth
                      placeholder="Buscar por codigo de Maquina"
                      InputProps={{
                        disableUnderline: true,
                        sx: { fontSize: 'default' },
                      }}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }}>
                      Buscar Maquina
                    </Button>
                    <Tooltip title="Reload">
                      <IconButton>
                        <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">

              <div className="col-12 p-5 row">

                {arregloImagenesPinBall.map((item, i) => (

                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" style={{ display: 'flex', marginTop: '50px' }} >
                    <div className="Estilo-Card">
                      <img src={imagenPinBall} alt={"tags"} width="80" />
                      <div className="card-body" >
                        <h4 className="card-text">Codigo: 00{i + 1} </h4>
                        <p className="card-text">Tipo : Pinball </p>

                        <a onClick={() => imprimirTabla(i)} target="_blank" className="btn btn-primary btn-block" style={{ display: 'flex' }} >
                          Ver Maquina
                        </a>

                      </div>
                    </div>
                  </div>
                )
                )}
                </div>
            </Typography>
          </Paper>
        </Box>
      ) : propiedad === 2 ? (

        <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>

          <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
            <AppBar
              position="static"
              color="default"
              elevation={0}
              sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
              <Toolbar>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <SearchIcon color="inherit" sx={{ display: 'block' }} />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      fullWidth
                      placeholder="Buscar por E-mail"
                      InputProps={{
                        disableUnderline: true,
                        sx: { fontSize: 'default' },
                      }}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }}>
                      Agregar Recaudo
                    </Button>
                    <Tooltip title="Reload">
                      <IconButton>
                        <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
              Recaudo-----
            </Typography>
          </Paper>
        </Box>

      ) : (
        // <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>

        //   <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
        //     <AppBar
        //       position="static"
        //       color="default"
        //       elevation={0}
        //       sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
        //     >
        //       <Toolbar>
        //         <Grid container spacing={2} alignItems="center">
        //           <Grid item>
        //             <SearchIcon color="inherit" sx={{ display: 'block' }} />
        //           </Grid>
        //           <Grid item xs>
        //             <TextField
        //               fullWidth
        //               placeholder="Buscar por E-mail"
        //               InputProps={{
        //                 disableUnderline: true,
        //                 sx: { fontSize: 'default' },
        //               }}
        //               variant="standard"
        //             />
        //           </Grid>
        //           <Grid item>
        //             <Button variant="contained" sx={{ mr: 1 }}>
        //               Agregar Otros
        //             </Button>
        //             <Tooltip title="Reload">
        //               <IconButton>
        //                 <RefreshIcon color="inherit" sx={{ display: 'block' }} />
        //               </IconButton>
        //             </Tooltip>
        //           </Grid>
        //         </Grid>
        //       </Toolbar>
        //     </AppBar>
        //     <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        //       Otros-----
        //     </Typography>
        //   </Paper>
        // </Box>


        <Box component="main" sx={{ flex: 1, py: 2, px: 1, bgcolor: '#eaeff1' }}>
          <Paper sx={{ maxWidth: 1100, margin: 'auto', overflow: 'hidden' }}>
            <AppBar
              position="static"
              color="default"
              elevation={0}
              sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
              <Toolbar>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <SearchIcon color="inherit" sx={{ display: 'block' }} />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      fullWidth
                      placeholder="Buscar Por Codigo de Maquina"
                      InputProps={{
                        disableUnderline: true,
                        sx: { fontSize: 'default' },
                      }}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }}
                      onClick={() => setEstado(0)}>
                      Buscar Maquina por Codigo
                    </Button>
                    <Tooltip title="Reload">
                      <IconButton>
                        <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                      </IconButton>
                    </Tooltip>

                  </Grid>
                </Grid>
              </Toolbar>

            </AppBar>
            <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
              {estado == 1 ? (

                <div className="col-12 p-5 row">

                  {arregloImagenesPinBall.map((item, i) => (

                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" >
                      <div className="Estilo-Card">
                        <img src={imagenPinBall} alt={"tags"} width="80" />
                        <div className="card-body">
                          <h4 className="card-text">Codigo: 00{i + 1} </h4>
                          <p className="card-text">Tipo : Pinball </p>

                          <a onClick={() => imprimirTabla(i)} target="_blank" className="btn btn-primary btn-block" >
                            Ver Maquina
                          </a>

                        </div>
                      </div>
                    </div>
                  )
                  )}


                  {arregloImagenesPicachu.map((item, i) => (

                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" >
                      <div className="Estilo-Card">
                        <img src={imagenPicachu} alt={"tags"} width="200" />
                        <div className="card-body">
                          <h4 className="card-text">Codigo: 00{i + 1} </h4>
                          <p className="card-text">Tipo : Picachu </p>

                          <a onClick={() => imprimirTabla(i)} target="_blank" className="btn btn-primary btn-block" >
                            Ver Maquina
                          </a>

                        </div>
                      </div>



                    </div>
                  )
                  )}

                  {arregloImagenesBilletes.map((item, i) => (

                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" >
                      <div className="Estilo-Card">
                        <img src={imagenBilletes} alt={"tags"} width="80" />
                        <div className="card-body">
                          <h4 className="card-text">Codigo: 00{i + 1} </h4>
                          <p className="card-text">Tipo : Picachu </p>

                          <a onClick={() => imprimirTabla(i)} target="_blank" className="btn btn-primary btn-block" >
                            Ver Maquina
                          </a>

                        </div>
                      </div>



                    </div>
                  )
                  )}


                </div>

              )
                :
                (
                  <div>

                    <TablaInsert props={recaudos.getAllRecaudos} />

                  </div>
                )}
            </Typography>
          </Paper>
        </Box>

      )}
    </>
  );
}