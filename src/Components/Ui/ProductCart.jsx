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
            toast.success("Sepetime Eklendi", {
                position: "top-left"
            })
        } else {
            toast.error("Sepetten çıkarıldı", {
                position: "top-left"
            })
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
            imageUrl: item.imgUrl,
            description: item.description
        }))
    };

    const removeFromCart = () => {
        dispatch(cartActions.removeItem(item.id))
    }
    return (
        <Col xl="3" lg="4" md="5" sm="6" xs="6" className='m-auto' >
            <div className="product_item mb-4">
                <div  onClick={HartClass}>
                    <span onClick={isActiveHart ? removeFromCart : addToCart}>
                            <i className={isActiveHart ? "ri-heart-fill shadow heart" : "ri-heart-line shadow heart"}></i>
                    </span>
                </div>
                <div className="product_img">
                    <img src={item.imgUrl} alt="" style={{ width: "250px", height: "250px" }} />
                </div>
                <div className="p-2 product_info">
                    <h3 className='product_name '><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                    <span>{item.description}</span>
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