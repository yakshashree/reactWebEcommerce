import React from 'react';


 function CartColumns(){
    return(
        <div className="container-fluid text-center d-none 
        d-lg-block">
            <div className="row">
                
                <div className=" mx-auto col-lg-2">
                    <p className="text-uppercase">products</p>
                </div>

                <div className=" mx-auto col-lg-2">
                    <p className="text-uppercase">NAME</p>
                </div>

                <div className=" mx-auto col-lg-2">
                    <p className="text-uppercase">price</p>
                </div>

                <div className=" mx-auto col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>

                <div className=" mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>

                <div className=" mx-auto col-lg-2">
                    <p className="text-uppercase">total</p>
                </div>


            
            </div>




        </div>
    );
        
   
}


export default CartColumns;
