import React from "react";
import CardHotel from "./CardHotel";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const FeaturedProperties = () => {
    const { data, loading, error } = useFetch('/hotels?featured=true&limit=8')

    return (
        <section className="reponsiveSection flex flex-col gap-2 xl:gap-5">
            <h2>Featured Properties</h2>
            <div className="w-full grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-5">
                {data.map((item) => (
                    <CardHotel
                        key={item._id}
                        id={item._id}
                        image={item.photos[0]}
                        title={item.name}
                        city={item.city}
                        price={item.cheapestPrice}
                        rating={item.rating}
                    />
                ))}

            </div>
        </section>
    );
};

export default FeaturedProperties;
