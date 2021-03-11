import React from'react';

import './contHeader.css'

import HeadBody from '../../components/headerBod/header'
import HeadText from '../../components/headerText/headerText'


const ContHeader = () => {

    return (
        
        <div>

            <div className="backgroundVideo">
                <HeadBody />
            </div>



            <div className="textoEfecto">
                <HeadText />
            </div>


        </div>



    );
};

export default ContHeader;
