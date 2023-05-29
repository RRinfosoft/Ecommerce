import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { ExtraLinks1, ExtraLinks2, ExtraLinks3, ExtraLinks4, In1, In2, In3, In4, MainTitles1, MainTitles2, MainTitles3, MainTitles4, QwinkLinks1, QwinkLinks2, QwinkLinks3, QwinkLinks4, follow1, follow2, follow3, follow4 } from './utill'

const Footer = () => {
  return (
    <>
    <Container className='footer-background'>
        <Row>
            <Col sm={3}>
                <p className='Footer-title'>{MainTitles1}</p>
                <a  className='footer-subtitle' href="#">{In1}</a><br />
                <a  className='footer-subtitle' href="#">{In2}</a><br />
                <a  className='footer-subtitle' href="#">{In4}</a><br />
                <a  className='footer-subtitle' href="#">{In2}</a><br />
           
            </Col>
            <Col sm={3}>
                <p className='Footer-title'>{MainTitles2}</p>
                <a  className='footer-subtitle' href="#">{QwinkLinks1}</a><br />
                <a  className='footer-subtitle' href="#">{QwinkLinks2}</a><br />
                <a  className='footer-subtitle' href="#">{QwinkLinks3}</a><br />
                <a  className='footer-subtitle' href="#">{QwinkLinks4}</a><br />
           
            </Col>
            <Col sm={3}>
                <p className='Footer-title'>{MainTitles3}</p>
                <a  className='footer-subtitle' href="#">{ExtraLinks1}</a><br />
                <a  className='footer-subtitle' href="#">{ExtraLinks2}</a><br />
                <a  className='footer-subtitle' href="#">{ExtraLinks3}</a><br />
                <a  className='footer-subtitle' href="#">{ExtraLinks4}</a><br />
           
            </Col>
            <Col sm={3}>
                <p className='Footer-title'>{MainTitles4}</p>
                <a  className='footer-subtitle' href="#">{follow1}</a><br />
                <a  className='footer-subtitle' href="#">{follow2}</a><br />
                <a  className='footer-subtitle' href="#">{follow3}</a><br />
                <a  className='footer-subtitle' href="#">{follow4}</a><br />
           
            </Col>
         
        </Row>
    </Container>
    <br />
    
    </>
  )
}

export default Footer