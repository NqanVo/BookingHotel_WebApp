import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchResult = (props) => {
    const navigate = useNavigate()
    const dates = props.getContentSearch.dateRange
    const option = props.getContentSearch.options
    const handleClick = () => {
        navigate(`/hotels/${props.item._id}`, { state: { dates, option } })
    }
    return (
        <div className="w-full rounded-lg p-2 grid lg:grid-cols-6 gap-2 shadow-lg">
            <div className="lg:col-span-2 h-[200px] rounded-lg overflow-hidden">
                <img
                    src={props.item.photos[0]}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="lg:col-span-3 flex flex-col justify-between items-start">
                <h3 className="inline-block text-gradient">{props.item.name}</h3>
                <span className="text-sm">{props.item.distance}m from center</span>
                <span className="text-sm p-2 bg-green-500 text-white">
                    Free airport taxi
                </span>
                <h5 className="text-sm font-bold">
                    Studio Apartments with Air conditloning
                </h5>
                <span className="text-sm">{`${props.item.title.substring(0, 50)}...`}</span>
                <h5 className="text-sm font-bold text-green-500">Free cancelltion</h5>
                <span className="text-sm text-green-500">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="lg:col-span-1 flex flex-col justify-between">
                {props.item.rating && (
                    <div className="flex justify-between items-center">
                        <h5>Excellent</h5>
                        <span className="p-2 bg-blue-500 text-white">{props.item.rating}</span>
                    </div>
                )}
                <div className="flex flex-col items-end gap-2">
                    <h5 className="text-2xl tracking-widest">
                        $ {props.item.cheapestPrice}
                    </h5>
                    <span className="text-xs">Includes taxes and fees</span>
                    {/* <Link to={`/hotels/${props.item._id}`} >
                        <button className="button w-full">See detail</button>
                    </Link> */}
                    <button className="button w-full" onClick={handleClick}>See detail</button>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
