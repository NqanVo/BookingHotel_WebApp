import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import useFetch from "../hooks/useFetch";
const BrowseByPropertyType = () => {
    const { data, loading, error } = useFetch("/hotels/countByType");
    const dataImage = [
        "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1622315173972-2bee16732128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ];

    return (
        <section className="reponsiveSection flex flex-col gap-2 xl:gap-5">
            <h2>Browse by property type</h2>
            <div className="w-full relative">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={4}
                    spaceBetween={10}
                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className="mySwiper"
                >
                    {loading
                        ? "loading"
                        : dataImage &&
                        data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col gap-2 cursor-pointer">
                                    <img
                                        src={dataImage[index]}
                                        alt=""
                                        className="h-[200px] w-[300px] object-cover rounded-tl-[48px] rounded-br-[48px]"
                                    />
                                    <div className="">
                                        <h4 className="capitalize">{item.type}</h4>
                                        <p className="font-medium text-sm">
                                            {item.count} {item.type}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    );
};

export default BrowseByPropertyType;
