import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Days, Lorem, Support, carouselimg, carouselimg2, carouselimg3, fast, nike, nike2, nike3, serviceText, shoeHome, shoeHome2, shoeHome3, text } from './utill';
import './Home.css'
import { motion } from 'framer-motion'
import Products from '../Products/Products';
import Featured from '../Featured/Featured';
import Review from '../Review/Review';


const Home = () => {
    return (
        <>

            <Container  >
                <Carousel>
                    <Carousel.Item className='slide-container'>
                        <Row className='slide'>
                            <Col sm={6}>
                                <div className='content'>
                                    <p className='title'> {nike}</p>
                                    <h3 className='Home-text'>{text}</h3>
                                    <p className='Home-lorem'>{Lorem}</p>
                                    <button className='add-btn'>Add to Card</button>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div classNam="image">

                                    <div className='Second'>
                                        <img className='text' src={carouselimg} />
                                    </div>
                                    <motion.div animate={{ rotate: -36 }} className='motion'>

                                        <p className='down'>
                                            <div className='carousel-img'>
                                                <img className='shoe' src={shoeHome} />
                                            </div>
                                        </p>
                                    </motion.div>
                                    <br />  <br />  <br />

                                </div>
                            </Col>

                        </Row>
                    </Carousel.Item>

                    <Carousel.Item className='slide-container'>
                        <Row className='slide'>
                            <Col sm={6}>
                                <div className='content'>
                                    <p className='title'> {nike2}</p>
                                    <h3 className='Home-text'>{text}</h3>
                                    <p className='Home-lorem'>{Lorem}</p>
                                    <button className='add-btn'>Add to Card</button>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div classNam="image">

                                    <div className='Second'>
                                        <img className='text' src={carouselimg2} />
                                    </div>
                                    <motion.div animate={{ rotate: -36 }} className='motion'>

                                        <p className='down'>
                                            <div className='carousel-img'>
                                                <img className='shoe' src={shoeHome2} />
                                            </div>
                                        </p>
                                    </motion.div>
                                    <br />  <br />  <br />

                                </div>
                            </Col>

                        </Row>
                    </Carousel.Item>
                    <Carousel.Item className='slide-container'>
                        <Row className='slide'>
                            <Col sm={6}>
                                <div className='content'>
                                    <p className='title'> {nike3}</p>
                                    <h3 className='Home-text'>{text}</h3>
                                    <p className='Home-lorem'>{Lorem}</p>
                                    <button className='add-btn'>Add to Card</button>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div classNam="image">

                                    <div className='Second'>
                                        <img className='text' src={carouselimg3} />
                                    </div>
                                    <motion.div animate={{ rotate: -36 }} className='motion'>

                                        <p className='down'>
                                            <div className='carousel-img'>
                                                <img className='shoe' src={shoeHome3} />
                                            </div>
                                        </p>
                                    </motion.div>
                                    <br />  <br />  <br />

                                </div>
                            </Col>

                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Container className='service'>
                <Row className='box-container'>
                    <Col sm={4}>
                        <div className='box'>
                            <div className='icon-color' >
                                <i class="fas fa-shipping-fast"></i>
                            </div>
                            <p className='service-title'>{fast}</p>
                            <p className='service-dummy'>{serviceText}</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='box2'>
                            <div className='icon-color' >
                                <i class="fas fa-undo"></i>
                            </div>
                            <p className='service-title'>{Days}</p>
                            <p className='service-dummy'>{serviceText}</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='box'>
                            <div  className='icon-color'>
                                <i class="fas fa-headset"></i>
                            </div>
                            <p className='service-title'>{Support}</p>
                            <p className='service-dummy'>{serviceText}</p>
                        </div>
                    </Col>
                </Row>
            </Container>


            <Products />
            <Featured/>
            <Review />
            <br />

        </>
    )
}

export default Home