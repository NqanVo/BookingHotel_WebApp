import React, { useState, useContext } from 'react';
import { DateRange } from 'react-date-range';
import { AiOutlineSearch, AiTwotoneCalendar } from 'react-icons/ai';
import { IoBedOutline } from 'react-icons/io5';
import { MdAttachMoney } from 'react-icons/md';
import { format } from "date-fns";
import { SearchContext } from '../Context/SearchContext';
import { useNavigate } from 'react-router-dom';

const GroupSearchDetail = (props) => {
    const navigate = useNavigate()

    const { dispatch, } = useContext(SearchContext)

    const [openSearch, setOpenSearch] = useState(false)
    const [openDate, setOpenDate] = useState(false)

    const [keyWord, setKeyWord] = useState(props.keyWord)
    const [dateRange, setDateRange] = useState(props.dateRange)
    const [options, setOptions] = useState(props.options)
    const [minPrice, setMinPrice] = useState(undefined)
    const [maxPrice, setMaxPrice] = useState(undefined)

    const [errorPrice, setErrorPrice] = useState(false)

    const handleOpenDate = () => {
        setOpenDate(!openDate)
    }

    const contentSearch = (keyWord, dateRange, options, minPrice, maxPrice) => {
        dispatch({ type: 'NEW_SEARCH', payload: { keyWord, dateRange, options } })
        navigate("/hotels", { state: { keyWord, dateRange, options } })
        if (minPrice >= maxPrice && (minPrice !== '' && maxPrice !== ''))
            setErrorPrice(true)
        else {
            setErrorPrice(false)
            props.handleGetContentSearch(keyWord, dateRange, options, minPrice, maxPrice)
        }
    }
    return (
        <div className={`${openSearch ? 'w-[80%]' : 'w-[60px]'} absolute top-2 left-2 h-max lg:w-full lg:static lg:col-span-1 p-2 shadow-lg rounded-lg bg-gradient-to-br from-[#FFD0FD] to-[#FFEDD8]`}>
            <AiOutlineSearch className=' text-3xl mx-auto block w-full cursor-pointer' onClick={() => setOpenSearch(!openSearch)}></AiOutlineSearch>
            {openSearch &&
                (<div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <h5>Destination</h5>
                        <div className="flex gap-2 items-center py-2 px-4 w-full rounded-lg bg-white/80 shadow-sm">
                            <IoBedOutline></IoBedOutline>
                            <input
                                type="text"
                                placeholder={keyWord}
                                className="w-full outline-none bg-transparent"
                                onChange={(e) => { setKeyWord(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h5>Check-in date</h5>
                        <div className="relative cursor-pointer flex gap-2 items-center py-2 px-4 w-full outline-none rounded-lg bg-white/80 shadow-sm">
                            <AiTwotoneCalendar></AiTwotoneCalendar>
                            <span onClick={() => handleOpenDate()} className='block w-full'>{`${format(dateRange[0].startDate, "MM/dd/yyyy")} - ${format(
                                dateRange[0].endDate,
                                "MM/dd/yyyy"
                            )}`}</span>
                            {openDate && (<DateRange
                                onChange={(item) => setDateRange([item.selection])}
                                minDate={new Date()}
                                ranges={dateRange}
                                className='absolute top-[120%] shadow-md z-10'
                            />)}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h5>Options</h5>
                        <div className="flex gap-2 items-center py-2 px-4 w-full rounded-lg bg-white/80 shadow-sm">
                            Adult
                            <input
                                type="number"
                                className="w-full outline-none bg-transparent"
                                placeholder={options.adult}
                                min={1}
                                onChange={(e) => setOptions({ ...options, adult: e.target.value })}
                            />
                        </div>
                        <div className="flex gap-2 items-center py-2 px-4 w-full rounded-lg bg-white/80 shadow-sm">
                            Children
                            <input
                                type="number"
                                className="w-full outline-none bg-transparent"
                                placeholder={options.children}
                                min={0}
                                onChange={(e) => setOptions({ ...options, children: e.target.value })}
                            />
                        </div>
                        <div className="flex gap-2 items-center py-2 px-4 w-full rounded-lg bg-white/80 shadow-sm">
                            Room
                            <input
                                type="number"
                                className="w-full outline-none bg-transparent"
                                placeholder={options.room}
                                min={1}
                                onChange={(e) => setOptions({ ...options, room: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h5>Price per night</h5>
                        <div className="flex gap-2 items-center py-2 px-4 w-full rounded-lg bg-white/80 shadow-sm">
                            Min<MdAttachMoney size={20}></MdAttachMoney>
                            <input
                                type="number"
                                className="w-full outline-none bg-transparent"
                                placeholder={minPrice}
                                min={0}
                                onChange={(e) => setMinPrice(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-2 items-center py-2 px-4 w-full rounded-lg bg-white/80 shadow-sm">
                            Max<MdAttachMoney size={20}></MdAttachMoney>
                            <input
                                type="number"
                                className="w-full outline-none bg-transparent"
                                placeholder={maxPrice}
                                min={0}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </div>
                        {errorPrice && <span className='text-red-500 text-sm'>Max price must be greater than min price</span>}
                    </div>
                    <button className="button w-max mx-auto flex items-center gap-2 justify-center"
                        onClick={() => contentSearch(keyWord, dateRange, options, minPrice, maxPrice)}
                    >
                        <AiOutlineSearch></AiOutlineSearch> Search
                    </button>
                </div>)
            }
        </div>
    );
};

export default GroupSearchDetail;