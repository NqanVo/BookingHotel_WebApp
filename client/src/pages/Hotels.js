import React, { useState } from 'react'
import ListBooking from '../components/ListBooking'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom';
import GroupSearchDetail from '../components/GroupSearchDetail';
import ListSearchResult from '../components/ListSearchResult';

const Hotels = () => {
    const location = useLocation()


    const [getContentSearch, setGetContentSearch] = useState({
        keyWord: location.state.keyWord,
        dateRange: location.state.dateRange,
        options: location.state.options
    })

    const handleGetContentSearch = (keyWord, dateRange, options) => {
        setGetContentSearch({
            keyWord: keyWord,
            dateRange: dateRange,
            options: options
        })
    }

    // console.log(getContentSearch);
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
                    handleGetContentSearch={handleGetContentSearch}
                ></GroupSearchDetail>
                <div className="invisible lg:hidden col-span-2 lg:col-span-1 bg-cyan-200"></div>
                <ListSearchResult getContentSearch={getContentSearch}></ListSearchResult>
            </section>
        </div>
    )
}


export default Hotels