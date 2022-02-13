import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState ,useEffect} from 'react';
import Content from '../componentes/Content'
import {useNavigate} from "react-router-dom";


const lightColor = 'rgba(255, 255, 255, 0.7)';

function Header(props) {

  const [value,setValue] = useState();
  const { onDrawerToggle } = props;
  let history = useNavigate();

  const  handleMenu = async (Item)=>{
  

    if(Item ===0){
      setValue(0);
      history('/Recaudos');
      // console.log(value);
    }
    if(Item ===1){
      setValue(1);
      history('/Maquinas');
    }
    if(Item ===2){
      setValue(2);
      history('/Usuarios');
    }
    if(Item ===3){
      setValue(3);
      history('/Otros');
    }
  // console.log('hola maquinas')
  }

  
  useEffect(() => {
   

  }, [value])


  return (

   
    <React.Fragment>
       
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Link
                href="/"
                variant="body2"
                sx={{
                  textDecoration: 'none',
                  color: lightColor,
                  '&:hover': {
                    color: 'common.white',
                  },
                }}
                rel="noopener noreferrer"
                target="_blank"
              >
                Fredy España
              </Link>
            </Grid>
            
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>

              
            </Grid>
            <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Autenticacion
              </Typography>
            </Grid>
            <Grid item>
              <Button
                sx={{ borderColor: lightColor }}
                variant="outlined"
                color="inherit"
                size="small"
              >
                Configuración de pagina
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
        <Tabs value={value} textColor="inherit">
          <Tab label="Recaudos" onClick={()=>handleMenu(0)} />
          <Tab label="Maquinas"  onClick={()=>handleMenu(1)}/>
          <Tab label="Usuarios" onClick={()=>handleMenu(2)}/>
          <Tab label="Otros" onClick={()=>handleMenu(3)}/>
        </Tabs>
      </AppBar>
          </Grid>
          
        </Toolbar>
      </AppBar>
      
      {/* aca se envian a la el componente content la variable value que es un anumero para poder identificar
      si es un recaudo o una maquina o un usuario */}
       {value === value ?<Content props={value} />:'Hola mundo 2'}
      
       
      
      
    </React.Fragment>
    
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;