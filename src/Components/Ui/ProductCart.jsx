import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap'
import "../../Styles/ProductCart.css"
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/CartSlice';
import { toast } from 'react-toastify';
function ProductCart({ item }) {

    const [isActiveHart, setActiveHart] = useState(false);
    const [isActiveShopping, setActiveShopping] = useState(false);

    const HartClass = () => {
        setActiveHart(!isActiveHart);
        if (!isActiveHart) {
            toast.success("Favorilerime eklendi")
        }
    };
    const ShoppingCalss = () => {
        setActiveShopping(!isActiveShopping);
    };

    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            image: item.imgUrl,
        }))
    }
    return (
        <Col xl="3" lg="4" md="5" sm="6" xs="6" className='m-auto' >
            <div className="product_item mb-4">
                <span onClick={HartClass}><i className={isActiveHart ? "ri-heart-fill shadow heart" : "ri-heart-line shadow heart"} onClick={addToCart} ></i></span>
                <div className="product_img">
                    <img src={item.imgUrl} alt="" style={{ width: "250px", height: "250px" }} />
                </div>
                <div className="p-2 product_info">
                    <h3 className='product_name '><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur, aliquam pariatur saepe eius voluptas voluptatum sit dolor quisquam sequi!</span>
                </div>
                <div className="product_cart_bottom d-flex align-items-center justify-content-between">
                    <span className='price'>{item.price} TL</span>
                    {/* <span onClick={ShoppingCalss}><i className={isActiveShopping ? "ri-shopping-cart-fill shadow" : "ri-shopping-cart-line shadow"}  onClick={addToCart} ></i></span> */}
                </div>
            </div>
        </Col>
    )
}

export default ProductCart