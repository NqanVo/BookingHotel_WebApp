import React, { useRef, useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { AiTwotoneCalendar, AiOutlineSearch } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";


const GroupSearch = () => {
    const [openDate, setOpenDate] = useState(false)
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOpenDate = () => {
        setOpenDate(!openDate)
        setOpenOptions(false)
    }
    const handleOpenOptions = () => {
        setOpenOptions(!openOptions)
        setOpenDate(false)
    }

    const handleSetAdultRemove = () => {
        if (options.adult <= 1)
            setOptions({ ...options, adult: 1 })
        else
            setOptions({ ...options, adult: options.adult - 1 })
    }
    const handleSetAdultAdd = () => {
        // if (options.adult <= 1)
        //     setOptions({ ...options, adult: 1 })
        // else
        setOptions({ ...options, adult: options.adult + 1 })
    }

    const handleSetChildrenRemove = () => {
        if (options.children <= 0)
            setOptions({ ...options, children: 0 })
        else
            setOptions({ ...options, children: options.children - 1 })
    }
    const handleSetChildrenAdd = () => {
        setOptions({ ...options, children: options.children + 1 })
    }

    const handleSetRoomRemove = () => {
        if (options.room <= 1)
            setOptions({ ...options, room: 1 })
        else
            setOptions({ ...options, room: options.room - 1 })
    }
    const handleSetRoomAdd = () => {
        // if (options.adult <= 1)
        //     setOptions({ ...options, adult: 1 })
        // else
        setOptions({ ...options, room: options.room + 1 })
    }

    return (
        <div className="flex flex-col gap-2 max-w-md mx-auto text-black/80">
            <div className="flex gap-2 items-center py-2 px-4 w-full rounded-lg bg-white/80 shadow-sm">
                <IoBedOutline></IoBedOutline>
                <input
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full outline-none bg-transparent"
                />
            </div>
            <div className="relative cursor-pointer flex gap-2 items-center py-2 px-4 w-full outline-none rounded-lg bg-white/80 shadow-sm">
                <AiTwotoneCalendar></AiTwotoneCalendar>
                <span onClick={() => handleOpenDate()} className='block w-full'>{`${format(dateRange[0].startDate, "MM/dd/yyyy")} - ${format(
                    dateRange[0].endDate,
                    "MM/dd/yyyy"
                )}`}</span>
                {openDate && (<DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDateRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                    className='absolute top-[120%] shadow-md z-10'
                />)}
            </div>
            <div className="relative cursor-pointer flex gap-2 items-center py-2 px-4 w-full outline-none rounded-lg bg-white/80 shadow-sm">
                <FiUsers></FiUsers>
                <span onClick={() => handleOpenOptions()} className='block w-full'>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                {openOptions && (<div className="absolute top-[120%] flex flex-col gap-5 shadow-md p-4 bg-white z-10 w-80">
                    <div className="flex items-center justify-between gap-10">
                        <span>Adults</span>
                        <div className="flex items-center gap-5">
                            <button className={`${(options.adult <= 1) ? 'cursor-not-allowed bg-gray-100' : ''} bg-gray-300 text-xl w-10 h-10 flex justify-center items-center`} onClick={() => handleSetAdultRemove()}>-</button>
                            <span className="w-5 text-center">{options.adult}</span>
                            <button className="bg-gray-300 text-xl w-10 h-10 flex justify-center items-center" onClick={() => handleSetAdultAdd()}>+</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-10">
                        <span>Children</span>
                        <div className="flex items-center gap-5">
                            <button className={`${(options.children <= 0) ? 'cursor-not-allowed bg-gray-100' : ''} bg-gray-300 text-xl w-10 h-10 flex justify-center items-center`} onClick={() => handleSetChildrenRemove()}>-</button>
                            <span className="w-5 text-center">{options.children}</span>
                            <button className="bg-gray-300 text-xl w-10 h-10 flex justify-center items-center" onClick={() => handleSetChildrenAdd()}>+</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-10">
                        <span>Room</span>
                        <div className="flex items-center gap-5">
                            <button className={`${(options.room <= 1) ? 'cursor-not-allowed bg-gray-100' : ''} bg-gray-300 text-xl w-10 h-10 flex justify-center items-center`} onClick={() => handleSetRoomRemove()}>-</button>
                            <span className="w-5 text-center">{options.room}</span>
                            <button className="bg-gray-300 text-xl w-10 h-10 flex justify-center items-center" onClick={() => handleSetRoomAdd()}>+</button>
                        </div>
                    </div>
                </div>)}
            </div>
            <div className="flex gap-2 items-center">
                <button className="button w-full flex items-center gap-2 justify-center">
                    <AiOutlineSearch></AiOutlineSearch> Search
                </button>
            </div>
        </div>
    );
};

export default GroupSearch;
