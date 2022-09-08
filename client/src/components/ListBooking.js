import React from 'react';
import { IoBedOutline } from 'react-icons/io5'
import { MdFlight, MdAttractions } from 'react-icons/md'
import { AiOutlineCar } from 'react-icons/ai'
const isActive = 'border-[2px] border-pink-200 bg-pink-100/50'

const ListBooking = () => {
    return (
        <section className='reponsiveSection'>
            <ul className='flex items-center gap-2 lg:gap-3 xl:gap-5'>
                <li className={`${isActive} p-2 xl:p-4 rounded-full hover:bg-pink-100/50 cursor-pointer flex items-center gap-2 duration-500 ease-in-out`}><IoBedOutline></IoBedOutline> <span className='hidden lg:block'>Stays</span></li>
                <li className={` p-2 xl:p-4 rounded-full hover:bg-gray-300/50 cursor-pointer flex items-center gap-2 duration-500 ease-in-out`}><MdFlight></MdFlight> <span className='hidden lg:block'>Flights</span></li>
                <li className={` p-2 xl:p-4 rounded-full hover:bg-gray-300/50 cursor-pointer flex items-center gap-2 duration-500 ease-in-out`}><AiOutlineCar></AiOutlineCar> <span className='hidden lg:block'>Car rentals</span></li>
                <li className={` p-2 xl:p-4 rounded-full hover:bg-gray-300/50 cursor-pointer flex items-center gap-2 duration-500 ease-in-out`}><MdAttractions></MdAttractions> <span className='hidden lg:block'>Attractions</span></li>
                <li className={` p-2 xl:p-4 rounded-full hover:bg-gray-300/50 cursor-pointer flex items-center gap-2 duration-500 ease-in-out`}><AiOutlineCar></AiOutlineCar> <span className='hidden lg:block'>Airport taxis</span></li>
            </ul>
        </section>
    );
};

export default ListBooking;