import React, { useEffect, useState } from 'react';
import SearchResult from './SearchResult';
import useFetch from "../hooks/useFetch";

const ListSearchResult = (props) => {
    // const [keyWord, setKeyWord] = useState(props.contentSearch.keyWord)
    // const [dateRange, setDateRange] = useState(props.contentSearch.dateRange);
    // const [options, setOptions] = useState(props.contentSearch.options)
    const keyWord = props.getContentSearch.keyWord


    const { data, loading, error, refetch } = useFetch(`/hotels?city=${keyWord}`)
    return (
        <div className='col-span-10 lg:col-span-3 p-2 shadow-lg rounded-lg top-2 lg:top-0 flex flex-col gap-2 lg:gap-3 xl:gap-5'>
            <SearchResult></SearchResult>
            <SearchResult></SearchResult>
            <SearchResult></SearchResult>
            <SearchResult></SearchResult>
            <SearchResult></SearchResult>
            <SearchResult></SearchResult>
        </div>
    );
};

export default ListSearchResult;