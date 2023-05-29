import { Card, Col } from "react-bootstrap"
import { motion } from 'framer-motion'
export const poroduct = "LATEST "
export const poroduct2 = " PRODUCTS "

const card = [
    {
        pic: "images/product-1.png",
        name: "Nike Shoes",
        price: "$120.99",
        dolor: " $150.99",
        star: "★★★★☆",
        buttons: "Add to cart"
    },
    {
        pic: "images/product-2.png",
        name: "Nike Shoes",
        price: "$120.99",
        dolor: " $150.99",
        star: "★★★★☆",
        buttons: "Add to cart"
    },
    {
        pic: "images/product-3.png",
        name: "Nike Shoes",
        price: "$120.99",
        dolor: " $150.99",
        star: "★★★★☆",
        buttons: "Add to cart"
    },
]

const cardFun = (item) => {
    return (
        <>

            <Col sm={4} className="get-padding">
                <Card className="card-back">
                    <motion.div animate={{ rotate: -36 }} className='motion'>
                        <div className="product-img">
                            <img className="set-to-img" src={item.pic} />
                        </div>
                    </motion.div>
                    <p className="item-name">{item.name}</p>
                    <div className="item-price">{item.price}<span className="item-dolor">{item.dolor}</span></div>
                    <p className="item-star">{item.star}</p>
                    <button className="item-buttons">{item.buttons}</button>
                    <br />
                </Card>
            </Col>
        </>
    )
}

export const maincard = card.map(cardFun)


const card2 = [
    {
        pic: "images/product-4.png",
        name: "Nike Shoes",
        price: "$120.99",
        dolor: " $150.99",
        star: "★★★★☆",
        buttons: "Add to cart"
    },
    {
        pic: "images/product-5.png",
        name: "Nike Shoes",
        price: "$120.99",
        dolor: " $150.99",
        star: "★★★★☆",
        buttons: "Add to cart"
    },
    {
        pic: "images/product-6.png",
        name: "Nike Shoes",
        price: "$120.99",
        dolor: " $150.99",
        star: "★★★★☆",
        buttons: "Add to cart"
    },
]

const cardFun2 = (item) => {
    return (
        <>

            <Col sm={4} className="get-padding">
                <Card className="card-back">
                    <motion.div animate={{ rotate: -36 }} className='motion'>
                        <div className="product-img">
                            <img className="set-to-img" src={item.pic} />
                        </div>
                    </motion.div>
                    <p className="item-name">{item.name}</p>
                    <div className="item-price">{item.price}<span className="item-dolor">{item.dolor}</span></div>
                    <p className="item-star">{item.star}</p>
                    <button className="item-buttons">{item.buttons}</button>
                    <br />
                </Card>
            </Col>
        </>
    )
}

export const maincard2 = card2.map(cardFun2)