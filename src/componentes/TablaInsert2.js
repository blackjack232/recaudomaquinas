
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LEER_RECAUDOS } from "../GraphQl/Queries";
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';

const TablaInsert2 = (props) => {

    const [recaudos, setRecaudos] = useState({});
     const [estado, setEstado] = useState(true);
    // const { loading, data, error } = useQuery(LEER_RECAUDOS);
    // let data1 = data;


    // const traerData = () => {
    //     let data1 = pro
    //     setRecaudos(data1.getAllRecaudos);
    //     console.log('recaudos', recaudos);
    //     setEstado(false);
    // }


    useEffect(() => {

        // traerData();
        setRecaudos(props.props)
        setEstado(false)

        console.log('este son los recaudos', recaudos, 'error');


    }, [props]);



    return (

        <>
            <div>


                <p>hola señores</p>

                {/* <Button
                    onClick={() => { traerData() }}>
                    presionar
                </Button> */}
                {estado ? (

                    <div>
                        <p>no hay data</p>
                    </div>

                ) : (

                    <div>
                        <p>{recaudos[0].nombreCliente}</p>
                    </div>

                )}




            </div>

        </>


    );



}

export default TablaInsert2;