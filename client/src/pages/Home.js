import React from 'react';
import Banner from '../components/Banner';
import BrowseByPropertyType from '../components/BrowseByPropertyType';
import EmailSubmit from '../components/EmailSubmit';
import Featured from '../components/Featured';
import FeaturedProperties from '../components/FeaturedProperties';
import Footer from '../components/Footer';
import ListBooking from '../components/ListBooking';
import Navbar from '../components/Navbar';

const Home = () => {
    console.log(window.location.href);
    return (
        <div>
            <section className='bg-gradient-to-br from-[#FFD0FD]/50 to-[#FFEDD8]/50'>
                <Navbar></Navbar>
                <ListBooking></ListBooking>
                <Banner></Banner>
            </section>
            <Featured></Featured>
            <BrowseByPropertyType></BrowseByPropertyType>
            <FeaturedProperties></FeaturedProperties>
            <section className='bg-gradient-to-br from-[#FFD0FD]/50 to-[#FFEDD8]/50'>
                <EmailSubmit></EmailSubmit>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;