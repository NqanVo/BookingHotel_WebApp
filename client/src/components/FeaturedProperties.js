import React from "react";
import CardHotel from "./CardHotel";
import { Link } from "react-router-dom";
const FeaturedProperties = () => {
    return (
        <section className="reponsiveSection flex flex-col gap-2 xl:gap-5">
            <h2>Featured Properties</h2>
            <div className="w-full grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-5">
                <CardHotel
                    image='https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    title='Aparthotel Stare Miasto'
                    city='Madrid'
                    price='120'
                    rating='8.9'
                />
                <CardHotel
                    image='https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    title='Valeriia Bugaiova'
                    city='New York'
                    price='200'
                    rating='9.5'
                />
                <CardHotel
                    image='https://images.unsplash.com/photo-1554647286-f365d7defc2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                    title='Aparthotel Stare Miasto'
                    city='Madrid'
                    price='120'
                    rating='8.9'
                />
                <CardHotel
                    image='https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
                    title='Valeriia Bugaiova'
                    city='New York'
                    price='200'
                    rating='9.5'
                />
            </div>
        </section>
    );
};

export default FeaturedProperties;
