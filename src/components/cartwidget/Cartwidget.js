import React from'react';
import './../cartwidget/Cartwidget.css';
import * as ReactBootStrap from 'react-bootstrap';
import icoCart from '../../assets/cart.png'



export const CartWid = () => { //uso default si voy a hacer mas de una navbar

    return (
        <ReactBootStrap.Form inline>


        <div className="cartBar">
        <img src={icoCart}/>
          </div>

       
        </ReactBootStrap.Form>

    )

}