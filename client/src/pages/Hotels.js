import React, { useState } from 'react'
import ListBooking from '../components/ListBooking'
import Navbar from '../components/Navbar'

import { useLocation } from 'react-router-dom';

import SearchResult from '../components/SearchResult';
import GroupSearchDetail from '../components/GroupSearchDetail';

const Hotels = () => {
    const location = useLocation()

    // const [keyWord, setKeyWord] = useState(location.state.keyWord)
    // const [dateRange, setDateRange] = useState(location.state.dateRange);
    // const [options, setOptions] = useState(location.state.options)
    return (
        <div>
            <section className='bg-gradient-to-br from-[#FFD0FD]/50 to-[#FFEDD8]/50'>
                <Navbar></Navbar>
                <ListBooking></ListBooking>
            </section>
            <section className='reponsiveSection relative grid grid-cols-12 lg:static lg:grid-cols-4 gap-2 lg:gap-3 xl:gap-5 mx-auto'>
                <GroupSearchDetail
                    keyWord={location.state.keyWord}
                    dateRange={location.state.dateRange}
                    options={location.state.options}
                ></GroupSearchDetail>
                <div className="invisible lg:hidden col-span-2 lg:col-span-1 bg-cyan-200"></div>
                <div className="col-span-10 lg:col-span-3 p-2 shadow-lg rounded-lg top-2 lg:top-0 flex flex-col gap-2 lg:gap-3 xl:gap-5">
                    <SearchResult></SearchResult>
                    <SearchResult></SearchResult>
                    <SearchResult></SearchResult>
                    <SearchResult></SearchResult>
                    <SearchResult></SearchResult>
                    <SearchResult></SearchResult>
                </div>
            </section>
        </div>
    )
}


export default Hotels