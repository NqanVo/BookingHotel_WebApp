import React from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi'
const Navbar = () => {
    return (
        <section className='reponsiveSection flex justify-between items-center'>
            <Link to='/'><h1 className='font-mainFont text-4xl xl:text-6xl text-black'>TingHotel</h1></Link>
            <ul className='hidden lg:flex flex-col lg:flex-row items-center gap-5'>
                <Link to='/register' className='button'>Register</Link>
                <Link to='/register' className='button'>Sign in</Link>
            </ul>
            <BiMenuAltRight size={30} className='lg:hidden'></BiMenuAltRight>
        </section>
    );
};

export default Navbar;