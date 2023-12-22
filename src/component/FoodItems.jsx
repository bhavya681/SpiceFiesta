import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const FoodItems = () => {

    const handleToast = (name) => {
        toast.success(`Added ${name} to cart`)
    }

    const category = useSelector((state) => state.category.category);

    const search = useSelector((state) => state.search.search);

    return (
        <>
            <Toaster position='top-center' reverseOrder={false} />
            <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
                {
                    FoodData.filter((food) => {
                        if (category === "ALL") {
                            return food.name.toLowerCase().includes(search.toLowerCase());
                        } else {
                            return (category === food.category &&
                                food.name.toLowerCase().includes(search.toLowerCase())
                            );
                        }
                    }).map((food) => (
                        <>
                            <FoodCard key={food.id} id={food.id} name={food.name} price={food.price} desc={food.desc} rating={food.rating} img={food.img} handleToast={handleToast} />
                        </>
                    ))
                }

            </div>
        </>
    )
}

export default FoodItems



/*
import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const FoodItems = () => {

    const handleToast = (name) => {
        toast.success(`Added ${name} to cart`)
    }

    const category = useSelector((state) => state.category.category);

    return (
        <>
            <Toaster position='top-center' reverseOrder={false} />
            <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
                {
                    FoodData.filter((food) => {
                        if (category === "ALL") {
                            return food;
                        } else {
                            return category === food.category;
                        }
                    }).map((food) => (
                        <>
                            <FoodCard key={food.id} id={food.id} name={food.name} price={food.price} desc={food.desc} rating={food.rating} img={food.img} handleToast={handleToast} />
                        </>
                    ))
                }

            </div>
        </>
    )
}

export default FoodItems

*/