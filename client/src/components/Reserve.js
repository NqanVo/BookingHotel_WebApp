import React, { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { GrFormClose } from "react-icons/gr";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Reserve = (props) => {
    const navigate = useNavigate()
    const { data, loading, error } = useFetch(`/hotels/room/${props.idHotel}`);
    const [selectRooms, setSelectRooms] = useState([]);

    const dateRange = props.dateRange
    const handleSelectRoom = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectRooms(
            checked
                ? [...selectRooms, value]
                : selectRooms.filter((item) => item !== value)
        );
    };

    const getDateRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());
        const list = [];
        while (date <= end) {
            list.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }
        return list;
    };
    const allDates = getDateRange(dateRange[0].startDate, dateRange[0].endDate);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
            allDates.includes(new Date(date).getTime())
        );

        return !isFound;
    };
    const handleBooking = async () => {
        try {
            await Promise.all(
                selectRooms.map((roomId) => {
                    const res = axios.put(`/rooms/availability/${roomId}`, {
                        dates: allDates,
                    });
                    return res.data;
                })
            );
            props.handleClosingModal()
            navigate('/')
        } catch (error) { }
    };
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/40"
            onClick={props.handleClosingModal}
        >
            <div
                className="max-w-lg min-w-[400px] p-5 bg-white flex flex-col gap-2"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end cursor-pointer">
                    <GrFormClose
                        size={30}
                        onClick={props.handleClosingModal}
                    ></GrFormClose>
                </div>
                <h3>Select your rooms:</h3>
                {loading ? (
                    "Loading..."
                ) : (
                    <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto scroll-smooth p-2 border border-black/10">
                        {data.map((room) => (
                            <div
                                className="flex flex-col gap-2 border border-black/20 p-2"
                                key={room._id}
                            >
                                <span>
                                    Title: <b>{room.title}</b>
                                </span>
                                <span>Desc: {room.desc}</span>
                                <span>Max people: {room.maxPeople}</span>
                                <span>Price: ${room.price}</span>
                                <span>Number Rooms:</span>
                                <div className="flex flex-col gap-1 px-5 bg-gradient-to-br from-[#FFD0FD]/50 to-[#FFEDD8]/50">
                                    {room.roomNumbers.map((roomNumber) => (
                                        <label
                                            key={roomNumber._id}
                                            htmlFor={roomNumber._id}
                                            className="flex gap-2 cursor-pointer py-1"
                                        >
                                            <input
                                                type="checkbox"
                                                value={roomNumber._id}
                                                id={roomNumber._id}
                                                onChange={handleSelectRoom}
                                                disabled={!isAvailable(roomNumber)}
                                            />
                                            <span key={roomNumber._id} className="w-10">
                                                {roomNumber.number}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <button className="button w-max mx-auto" onClick={handleBooking}>
                    Reserve Now!
                </button>
            </div>
            <label htmlFor=""></label>
        </div>
    );
};

export default Reserve;
