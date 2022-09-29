import React, { useEffect, useState } from 'react';
import SearchResult from './SearchResult';
import useFetch from "../hooks/useFetch";
import foundHotel from '../assets/image/found_hotels.png'
const ListSearchResult = (props) => {

    const keyWord = props.getContentSearch.keyWord
    const minPrice = props.getContentSearch.minPrice
    const maxPrice = props.getContentSearch.maxPrice
    // const keyWord = 'BenTre'

    const { data, loading, error } = useFetch(`/hotels?city=${keyWord}&min=${minPrice || 0}&max=${maxPrice || 999999999}`)
    return (
        <div className='col-span-10 lg:col-span-3 p-2 shadow-lg rounded-lg top-2 lg:top-0 flex flex-col gap-2 lg:gap-3 xl:gap-5'>
            {(data.length === 0) ? <img src={foundHotel} alt="" className='w-96 h-96 object-cover mx-auto' /> : ''}
            {loading ? 'loading' : (
                data.map((item) => (
                    <SearchResult key={item._id} item={item} getContentSearch={props.getContentSearch}></SearchResult>
                ))
            )}
        </div>
    );
};

export default ListSearchResult;