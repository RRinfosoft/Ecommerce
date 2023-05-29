import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NewSDummyData, Newsletter, dummy, mainreviewCard, review, review2 } from './utill'
import './Review.css'


const Review = () => {
    return (
        <>
            <Container>
                <div className='review-blue'>{review}<span className='review-yellow'>{review2}</span></div>
                <Row>
                    {mainreviewCard}
                </Row>
            </Container>


            <Container>
                <Row>
                    <Col sm={12}>
                        <div className=' Newsletter'>
                            <p className='Newsletter-text'>{Newsletter}</p>
                            <p className='New-data'>{NewSDummyData}</p>
                            <p className='New-data'>{dummy}</p>
                            <center>
                                <input className='input' type='email' placeholder='Enter Your Email' />
                                <button className='NewSletter-butn'>Send</button>
                            </center>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />


        </>
    )
}

export default Review