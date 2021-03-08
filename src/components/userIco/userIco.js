import React from'react';
import './../cartwidget/Cartwidget.css';
import * as ReactBootStrap from 'react-bootstrap';
import icoUser from '../../assets/user.png'



export const CartWid = () => { //uso default si voy a hacer mas de una navbar

    return (
        <ReactBootStrap.Form inline>
       
        <img src={icoUser}/>
         
       
        </ReactBootStrap.Form>

    )

}