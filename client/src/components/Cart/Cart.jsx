import "./cart.scss"

import { AiOutlineDelete } from 'react-icons/ai'

//import fake data
import { data } from '../../constant/featuredData.js'

const Cart = () => {
    return (
        <div className="cart">
            <h1>Products in your cart</h1>


            {data?.map((item) => (
                <div className="cart_item flexRow" key={item.id}>
                    <div className="left flexRow">
                        <img src={item.img} alt="" />
                        <div className="details flexCol">
                            <p className="title">{item.title.substring(0, 20)}</p>
                            <p className="price">1 x ${item.price}</p>
                        </div>
                    </div>
                    <AiOutlineDelete className="deleteIcon" />

                </div>
            ))}


            <div className="subtotal flexRow">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>

            <button className="checkoutBtn">PROCEED TO CHECKOUT</button>

            <p className="reset">Reset Cart</p>
        </div>
    )
}

export default Cart
