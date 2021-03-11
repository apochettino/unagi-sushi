import React from 'react'
import Boton from '../Button/Button'
import Text01 from '../TextoSec01/text01'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import './home.css'

export const Home = ({greeting}) => {

    return (

        <div className="homeStyle">           
       
            <h2 className="salu">{greeting}</h2>
            <Boton />             

            <Container>            
                <Row>
                    <Col>aca van las img // tengo que hacer un componente que me englobe las dos imagenes 
                    con efecto que voy a poner.</Col>
                    <Col>2 of 3</Col>
                    <Col><Text01 /></Col>
                </Row>
            </Container>

        </div>
        
    )
}

