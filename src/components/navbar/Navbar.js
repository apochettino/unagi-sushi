import React from 'react';
import './../navbar/Navbar.css';

//import './../Item/item.css';
import * as ReactBootStrap from 'react-bootstrap';
import { CartWid } from './../cartwidget/Cartwidget';
import { icoUser } from './../userIco/userIco';

import Navbar from 'react-bootstrap/Navbar';

import logoUna from '../../assets/logoNav.png'

 

export const NavBar = () => {

    return (


      
        <ReactBootStrap.Navbar className="color-nav"  expand="lg">
          <img src={logoUna}/>
        
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav" >
          <ReactBootStrap.Nav className="mr-auto" >
            <ReactBootStrap.Nav.Link  href="#home">Nosotros</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">Reservas</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">Eventos</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">Productos</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">Contactanos</ReactBootStrap.Nav.Link>
            
          </ReactBootStrap.Nav>
          <icoUser/> <p id="user">Mi cuenta</p>
          <CartWid/>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>

    )


}