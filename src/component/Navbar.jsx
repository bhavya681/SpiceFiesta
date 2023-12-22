import React from 'react'
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    return (
        <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
            <div className='left'>
                <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0, 16)}</h3>
                <h1 className='text-2xl font-bold mb-3 lg:mb-0'>SpiceFiesta</h1>
            </div>

            <div className='right'>

                <input type='search' placeholder='search here' autoComplete='off' onChange={(e) => { dispatch(setSearch(e.target.value)) }}
                    className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]' />
            </div>

        </nav>
    )
}

export default Navbar