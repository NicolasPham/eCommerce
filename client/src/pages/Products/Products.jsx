import React from 'react'

const Products = () => {
    return (
        <main className='products'>
            <div className="left">
                <div className="filter">
                    <h2>Product Categories</h2>

                    <div className="inputItem">
                        <input type="checkbox" id="1" value={1} />
                        <label htmlFor="1"> </label>
                    </div>
                </div>
                <div className="filter">
                    <h2>Filter by Price</h2>
                </div>
                <div className="filter">
                    <h2>Sort by</h2>
                </div>
            </div>
            <div className="right"></div>
        </main>
    )
}

export default Products