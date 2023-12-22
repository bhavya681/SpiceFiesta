import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';

const FoodCard = ({ id, name, price, desc, rating, img, handleToast }) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className='font-bold w-[250px] bg-white p-5 flex flex-col  space-x-2 rounded-lg m-2 gap-2'>
                <img className='w-auto h-[130px] hover:scale-110 cursor-grab transition:all 5 ease-in-out ' src={img} alt="" />
                <div className='text-sm flex justify-between'>
                    <h2>{name}</h2>
                    <span className='text-green-500'>₹{price}</span>
                </div>
                <p className='font-normal text-sm'>{desc.slice(0, 50)}....</p>
                <div className='flex justify-between'>
                    <span className='flex justify-center items-center '>
                        <AiFillStar className='mr-1 text-yellow-400' />{rating}
                    </span>
                    <button onClick={() => { dispatch(addToCart({ id, name, price, rating, price, img, qty: 1 })); handleToast(name) }} className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default FoodCard