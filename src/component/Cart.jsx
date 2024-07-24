import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Success from '../pages/Success';

const Cart = () => {

    const [activeCart, setActiveCart] = useState(false);

    const navigate=useNavigate();

    const cartItems = useSelector((state) => state.cart.cart);
    const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

    const handleremoveToast = (name) => {
        toast.success(`${name} Removed from cart`,{icon:"👋"})
    }

    return (
        <>
            <div className={`fixed right-0 top-0 w-full lg:w-[20vw] p-5 bg-white h-full mb-3 z-50 transition-all duration-500 ${activeCart ? "translate-x-0" : "translate-x-full"}`}>
                < div className='flex justify-between items-center my-3'>
                    <span className='text-xl font-bold text-gray-800'>My Order</span>
                    <IoMdClose onClick={() => { setActiveCart(!activeCart) }} className='border-2 border-gray-600 text-xl text-gray-600 font-bold p-1 rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer' />
                </div>

                {cartItems.length > 0 ? cartItems.map((food) => (
                    <>
                        <ItemCard key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} handleremoveToast={handleremoveToast}/>
                    </>
                )) :
                    <>
                        <h2 className='text-center text-xl font-boldtext-gray-800'>Your cart is empty</h2>
                    </>}

                <div className='absolute bottom-0 '>
                    <h3 className='font-semibold text-gray-800'>Items : {totalQty}</h3>
                    <h3 className='font-semibold text-gray-800'>Total Amount : ₹{totalPrice} </h3>
                    <hr className='w-[90vw] lg:w-[18vw] my-2' />
             
                   <button className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'onClick={()=>{navigate('/success')}}>
                  
                    Checkout
                 
                   </button>
           
                </div>
            </div >
            <FaShoppingCart
                onClick={() => { setActiveCart(!activeCart) }}
                className={`cursor-pointer bg-white rounded-full shadow-md text-5xl p-3 fixed right-4 bottom-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all duration-500"}`} />
        </>
    )
}

export default Cart