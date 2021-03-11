import React from'react';
import './header.css';
import * as ReactBootStrap from 'react-bootstrap';
import videoUna from '../../assets/videoUna03.mp4';
import HeadText from '../headerText/headerText';


//import classes from './HeadBod.module.css'



const HeadBody = () => {

    return (
        
        <div>             
            
            <video autoPlay muted>
                <source src={videoUna} type="video/mp4"/>
            </video>            


        </div>
    );
};

export default HeadBody;