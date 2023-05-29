import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { maincard, maincard2, poroduct, poroduct2 } from './utill'
import './Products.css'

const Products = () => {
    return (
        <>
            <Container className='gave-margin'>
                <div className='blue'>{poroduct}<span className='yellow'>{poroduct2}</span></div>
                <hr className='item-hr' />
                <Row>
                    {maincard}
                </Row>
            </Container>
            <Container className='gave-margin2'>
                <Row>
                    {maincard2}
                </Row>
            </Container>


        </>
    )
}

export default Products