import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import { useState } from 'react';



const categories = [
  {
    id: 'Perfil',
    children: [
      {
        id: 'Configuracion de Perfil',
        icon: <PeopleIcon />,
        active: true,
      },
      { id: 'Registrar Maquina', icon: <DnsRoundedIcon /> },
      { id: 'Registrar Recaudo', icon: <PermMediaOutlinedIcon /> },
      // { id: 'Hosting', icon: <PublicIcon /> },
      // { id: 'Functions', icon: <SettingsEthernetIcon /> },
      // {
      //   id: 'Machine learning',
      //   icon: <SettingsInputComponentIcon />,
      // },
    ],
  },
  {
    id: 'Maquinas',
    children: [
      { id: 'Registar Maquina ', icon: <SettingsIcon /> },
      { id: 'registrar recaudo', icon: <TimerIcon /> },
      { id: 'Cerrar Sesion', icon: <PhonelinkSetupIcon /> },
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};
const handleButon = (Item) => {
  console.log('holamundo', Item)
  //alert('hola mundo ')

  if (Item === 'Configuracion de Perfil') {
    console.log('1')
  }else if(Item === 'Registrar Maquina') {
    console.log('2')
  }else if(Item === 'Registrar Recaudo') {
    console.log('3')
  }else if(Item === 'Cerrar Sesion') {
    console.log('4')
    window.closed();
  }
}


export default function Navigator(props) {

  const [opcionboton, setOpcionBoton] = useState();
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          Mr' Black Jack
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }} >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Proyecto Maquinas</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }} >
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: nombreBoton, icon, active }) => (
              <ListItem disablePadding key={nombreBoton} onClick={() => handleButon(nombreBoton)} >
                <ListItemButton selected={active} sx={item}  >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{nombreBoton}</ListItemText>
                  
                </ListItemButton>
              </ListItem>
            ))}
            
             
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
        
       

      </List>
    </Drawer>
  );
}