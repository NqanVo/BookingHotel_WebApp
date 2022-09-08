import React from 'react';

const CardHotel = (props) => {
    return (
        <div className="relative cursor-pointer group h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
                src={props.image}
                alt=""
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 group-hover:-translate-y-5 duration-500 ease-in-out"
            />
            <div className="absolute left-0 right-0 bottom-0 w-full p-5 bg-white">
                <h4>{props.title}</h4>
                <p>{props.city}</p>
                <p>Starting from ${props.price}</p>
                <div className="absolute clipPath top-0 left-0 right-0 w-full h-40 transform translate-y-[-99.5%] bg-white" />
                <div className="absolute top-[-60px] right-5 z-10 font-bold text-blue-500 flex flex-col items-center">
                    <p className="text-3xl">{props.rating}</p>
                    <p className="">Excellent</p>
                </div>
            </div>
        </div>
    );
};

export default CardHotel;