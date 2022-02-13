
import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import Inicio from '../paginas/Inicio';


const Rutas = () => {

  

  const NotFoundRedirect = () => <Navigate to='/' />

  return (
    
     
        <Routes>
          <Route exact path="/" component={Inicio} />
          {/* <Route exact path="/MenuPrincipal" component={Catalogo} /> */}
          {/* <Route exact path="/producto/:producto" component={Detalle} />
          <Route exact path="/seccion/:seccion" component={Seccion} />
          <Route exact path="/pack/:pack" component={Pack} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cobertura" component={Cobertura} />
          <Route exact path="/no-cobertura" component={NoCobertura} />
          <Route exact path="/recuperar-clave" component={Restablecer} />
          <Route exact path="/manual" component={LandingPage} />
          <Route exact path="/preguntas-frecuentes" component={PreguntasFrecuentes} />
          <Route exact path="/politicas-datos" component={()=><PoliticaDatos type={2}/> }/>
          <Route exact path="/terminos-y-condiciones" component={()=><PoliticaDatos type={1}/> } />
          <Route exact path="/garantias-y-devoluciones" component={()=><PoliticaDatos type={4}/> } />
          <Route exact path="/disposiciones-privacidad-seguridad" component={()=><PoliticaDatos type={5}/> } />
          <Route exact path="/carrito" component={Carrito} />
          <PrivateRoute exact path="/pedidos" component={Pedidos} />
          <PrivateRoute exact path="/datos" component={Datos} />
          <PrivateRoute exact path="/respuesta/cpv/avvillas" component={RespuestaCPV} />
          <PrivateRoute exact path="/thank-you-page/:orden" component={ThankYouPage} /> */}
          {/* <Route component={NotFoundRedirect} /> */}
        </Routes>
   
     
  )
}




export default Rutas;

