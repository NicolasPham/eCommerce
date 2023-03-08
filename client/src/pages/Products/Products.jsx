import {useState} from 'react'
import './products.scss'
import { useParams } from 'react-router-dom'

import List from '../../components/List/List'


const Products = () => {

    const param = useParams();
    const id = parseInt(param.id); //parse Int to id of the categories

    const [maxPrice, setMaxPrice] = useState(1000);
    const [sortPrice, setSortPrice] = useState(null); //set SortPrice by either asc or desc

    return (
        <main className='products'>
            <div className="wrapper flexRow">
            <div className="left flexCol">
                <div className="filter">
                    <h2>Product Categories</h2>

                    <div className="inputItem">
                        <input type="checkbox" id="1" value={1} />
                        <label htmlFor="1">Dress</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="2" value={1} />
                        <label htmlFor="2">Shirts</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" value={1} />
                        <label htmlFor="3">Skirts</label>
                    </div>
                </div>
                <div className="filter">
                    <h2>Filter by Price</h2>
                
                    <div className="inputItem">
                        <span>$0</span>
                        <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
                        <span>${maxPrice}</span>
                    </div>
                </div>
                <div className="filter">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id='asc' value="asc" name="price" onChange={() => setSortPrice("asc")} />
                        <label htmlFor="asc">Price Low to High</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id='dsc' value="dsc" name="price" onChange={() => setSortPrice("desc")} />
                        <label htmlFor="dsc">Price High to Low</label>
                    </div>
                </div>
            </div>
            <div className="right flexCol">
                <img className='banner' src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" />
                <List catId={id} maxPrice={maxPrice} sortPrice={sortPrice} />
            </div>
            </div>
        </main>
    )
}

export default Products