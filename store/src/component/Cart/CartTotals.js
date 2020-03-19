import React from 'react';
import {Link} from "react-router-dom"

function CartTotals(props) {
    const {cartSubTotal,cartTax,cartTotal,clearCart} = props.value;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div  className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize
                    text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3
                            px-5" type="button" onClick={()=>clearCart()}>
                            clear cart</button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                Sub total:

                            </span>
                            <strong>&#x20B9;{cartSubTotal}</strong>
                        </h5>

                        <h5>
                            <span className="text-title">
                                Cart tax:

                            </span>
                            <strong>&#x20B9;{cartTax}</strong>
                        </h5>

                        <h5>
                            <span className="text-title">
                            cart Total:

                            </span>
                            <strong>&#x20B9;{cartTotal}</strong>
                        </h5>
                        
                        </div>


                </div>
            </div>
            
            </React.Fragment>
    );
}

export default CartTotals;