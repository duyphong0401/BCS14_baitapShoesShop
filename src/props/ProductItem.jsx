import React from 'react'

const ProductItem = (props) => {
  

    return (
        <div className="card mb-3" >
            <img src={props.product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.product.name}</h5>
                <p className="card-text">${props.product.price}</p>
                <button onClick={() => {
                    props.showDetail(props.product)
                }
                } className="btn btn-dark">Add to Card <i className="fa-solid fa-cart-shopping" />
                </button>
            </div>
        </div>
    )
}

export default ProductItem
