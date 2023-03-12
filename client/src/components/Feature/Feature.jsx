import "./feature.scss"
import axios from 'axios';

import Card from '../Card/Card.jsx'
import { useEffect, useState } from "react"

const Feature = ({ type }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(process.env.REACT_APP_API_URL + "/products?populate=*", {
                    headers: {
                        Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                    }
                });
                setData(response.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        <section className='feature'>
            <div className="title flexRow">
                <h1>{type} products</h1>
                <p>Here you will find the latest and greatest fashion items from our store. Whether you're looking for a new dress, a stylish pair of shoes, or the perfect accessory to complete your look, we have something for everyone. Our featured products are carefully selected to ensure that you always look your best. Shop now and find the perfect item for any occasion!</p>
            </div>

            <div className="cards flexRow">
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </section>
    )
}

export default Feature