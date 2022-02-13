import React from 'react';
import image from '../imagenes/pin ball1.png'
import TablaInsert from '../componentes/TablaInsert'
const Imagen =()=>{
    
    return (

       <div className="col-12 col-sm-6 col-md-1 col-lg-3 mb-4" >
           <div className="Estilo-Card">
               <img src={image} alt={"tags"}  width="80" />
               <div className="card-body">
                   <h4 className="card-text">Codigo: 001 </h4>
                   <p className="card-text">Tipo : Pinball </p>

                   <a href={<TablaInsert/>} target="_blank" className="btn btn-primary btn-block" > 
                   Ver Maquina
                   </a>

                  

               </div>
           </div>

       </div>

    )
}
export default Imagen;