import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from "../Context/SearchContext";

const CardHotel = (props) => {
    const navigate = useNavigate();
    const { dateRange, options } = useContext(SearchContext)
    const dates = dateRange
    const option = options
    const handleClick = () => {
        navigate(`/hotels/${props.id}`, { state: { dates, option } })

    }
    return (
        <div className="relative cursor-pointer group h-[400px] rounded-lg overflow-hidden shadow-lg" onClick={handleClick}>
            <img
                src={props.image}
                alt=""
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 group-hover:-translate-y-5 duration-500 ease-in-out"
            />
            <a href="https://www.vectorstock.com/royalty-free-vector/set-pointers-with-shadow-on-a-white-background-vector-30600637">Vector image by VectorStock / Vakulenchik1992</a>
            <div className="absolute left-0 right-0 bottom-0 w-full p-5 bg-white">
                <h4>{props.title}</h4>
                <p>{props.city}</p>
                <p>Starting from ${props.price}</p>
                <div className="absolute clipPath top-0 left-0 right-0 w-full h-40 transform translate-y-[-99.5%] bg-white" />
                {props.rating && (
                    <div className="absolute top-[-60px] right-5 z-10 font-bold text-red-500 flex flex-col items-center">
                        <p className="text-3xl">{props.rating}</p>
                        <p className="">Excellent</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardHotel;