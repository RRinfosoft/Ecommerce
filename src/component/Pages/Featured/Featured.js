import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Featured.css'
import { bigImg, bigText, featured, featured2, ipsum, news, secBig, secImg1, secImg2, secImg3, secImg4, smImg1, smImg2, smImg3, smImg4, smallText, stars, thirdBig, thirdImg1, thirdImg2, thirdImg3, thirdImg4 } from './utill'

const Featured = () => {
    return (
        <>
            <Container>
                <p className='blue-featured'>{featured}<span className='yellow-featured'>{featured2}</span></p>

                <Row>
                    <Col sm={12}>
                        <div className='Featured'>
                            <Row className='padding-top-bottom'>
                                <Col sm={3}>
                                    <div className='small-img-box'>
                                        <img className='set-img-box' src={smImg1} />
                                    </div>
                                    <div className='small-img-box'>
                                        <img className='set-img-box' src={smImg2} />
                                    </div>   <div className='small-img-box'>
                                        <img className='set-img-box' src={smImg3} />
                                    </div>
                                    <div className='small-img-box'>
                                        <img className='set-img-box' src={smImg4} />
                                    </div>
                                </Col>

                                <Col sm={4}>
                                    <div className='big-image'>
                                        <img className='set-big-img' src={bigImg} />
                                    </div>
                                </Col>

                                <Col sm={5}>
                                    <p className='news'>{news}</p>
                                    <p className='fea-star'>{stars}</p>
                                    <p className='fea-lorem'>{ipsum}</p>
                                    <p className='fea-big'>{bigText}<span className='fea-small'>{smallText}</span></p>
                                    <button className='fea-button'>Add To Cart</button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* // Second section */}

            <Container className='second-section'>
                <Row>
                    <Col sm={12}>
                        <div className='Featured'>
                            <Row className='padding-top-bottom'>
                                <Col sm={3}>
                                    <div className='small-img-box'>
                                        <img className='set-img-box' src={secImg1} />
                                    </div>
                                    <div className='small-img-box'>
                                        <img className='set-img-box' src={secImg2} />
                                    </div>   <div className='small-img-box'>
                                        <img className='set-img-box' src={secImg3} />
                                    </div>
                                    <div className='small-img-box'>
                                        <img className='set-img-box' src={secImg4} />
                                    </div>
                                </Col>

                                <Col sm={4}>
                                    <div className='big-image'>
                                        <img className='set-big-img' src={secBig} />
                                    </div>
                                </Col>

                                <Col sm={5}>
                                    <p className='news'>{news}</p>
                                    <p className='fea-star'>{stars}</p>
                                    <p className='fea-lorem'>{ipsum}</p>
                                    <p className='fea-big'>{bigText}<span className='fea-small'>{smallText}</span></p>
                                    <button className='fea-button'>Add To Cart</button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>




                {/* third section */}
                <Container className='second-section'>
                <Row>
                    <Col sm={12}>
                        <div className='Featured'>
                            <Row className='padding-top-bottom'>
                                <Col sm={3}>
                                    <div className='small-img-box'>
                                        <img className='set-img-box' src={thirdImg1} />
                                    </div>
                                    <div className='small-img-box'>
                                        <img className='set-img-box' src={thirdImg2} />
                                    </div>   <div className='small-img-box'>
                                        <img className='set-img-box' src={thirdImg3} />
                                    </div>
                                    <div className='small-img-box'>
                                        <img className='set-img-box' src={thirdImg4} />
                                    </div>
                                </Col>

                                <Col sm={4}>
                                    <div className='big-image'>
                                        <img className='set-big-img' src={thirdBig} />
                                    </div>
                                </Col>

                                <Col sm={5}>
                                    <p className='news'>{news}</p>
                                    <p className='fea-star'>{stars}</p>
                                    <p className='fea-lorem'>{ipsum}</p>
                                    <p className='fea-big'>{bigText}<span className='fea-small'>{smallText}</span></p>
                                    <button className='fea-button'>Add To Cart</button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>


        </>

    )
}

export default Featured