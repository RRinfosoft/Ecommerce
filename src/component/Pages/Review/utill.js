import { Card, Col } from "react-bootstrap"
import { motion } from 'framer-motion'
 export const review="CUSTOMER'S"
 export const review2=" REVIEW"



 const reviewCard = [
    {
        pic: "images/pic1.png",
        name: "Jasmin Patel",
        data: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Fugiat, Quos Eum. Laborum Aut A Consequatur Ducimus, Molestias Possimus Quisquam Rerum Temporibus Ipsum Voluptate Accusamus, Unde Ab Asperiores? Exercitationem, Unde Rem.",
        star: "★★★★☆",

    },
    {
        pic: "images/pic2.png",
        name: "John Deo",
        data: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Fugiat, Quos Eum. Laborum Aut A Consequatur Ducimus, Molestias Possimus Quisquam Rerum Temporibus Ipsum Voluptate Accusamus, Unde Ab Asperiores? Exercitationem, Unde Rem.",
        star: "★★★★☆",

    },
    {
        pic: "images/pic3.png",
        name: "Josef Nagar",
        data: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Fugiat, Quos Eum. Laborum Aut A Consequatur Ducimus, Molestias Possimus Quisquam Rerum Temporibus Ipsum Voluptate Accusamus, Unde Ab Asperiores? Exercitationem, Unde Rem.",
        star: "★★★★☆",

    },
]

const reviewCardfun = (item) => {
    return (
        <>

            <Col sm={4} >
                <Card className="Review-Cards" >
                    <div className="review-img">
                        <img className="set-review-img" src={item.pic}/>
                    </div>
                    <p className="Review-name">{item.name}</p>
                    <p className="item-data">{item.data}</p>
                    <p className="Review-star">{item.star}</p>
                </Card>
            </Col>
        </>
    )
}

export const mainreviewCard= reviewCard.map(reviewCardfun)

export const Newsletter="Monthly Newsletter"
export const NewSDummyData="Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Earum Ullam Veniam At Itaque Culpa Hic Corporis Saepe Dicta Doloremque Nihil."
export const dummy="Amet Consectetur Adipisicing Elit. Earum Ullam Veniam"