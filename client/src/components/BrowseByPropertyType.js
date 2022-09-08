import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
const BrowseByPropertyType = () => {
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
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt=""
                                className="h-[200px] w-[300px] object-cover rounded-tl-[48px] rounded-br-[48px]"
                            />
                            <div className="">
                                <h4 className="">Hotels</h4>
                                <p className="font-medium text-sm">123 hotels</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt=""
                                className="h-[200px] w-[300px] object-cover rounded-tl-[48px] rounded-br-[48px]"
                            />
                            <div className="">
                                <h4 className="">Hotels</h4>
                                <p className="font-medium text-sm">123 hotels</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt=""
                                className="h-[200px] w-[300px] object-cover rounded-tl-[48px] rounded-br-[48px]"
                            />
                            <div className="">
                                <h4 className="">Hotels</h4>
                                <p className="font-medium text-sm">123 hotels</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt=""
                                className="h-[200px] w-[300px] object-cover rounded-tl-[48px] rounded-br-[48px]"
                            />
                            <div className="">
                                <h4 className="">Hotels</h4>
                                <p className="font-medium text-sm">123 hotels</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt=""
                                className="h-[200px] w-[300px] object-cover rounded-tl-[48px] rounded-br-[48px]"
                            />
                            <div className="">
                                <h4 className="">Hotels</h4>
                                <p className="font-medium text-sm">123 hotels</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt=""
                                className="h-[200px] w-[300px] object-cover rounded-tl-[48px] rounded-br-[48px]"
                            />
                            <div className="">
                                <h4 className="">Hotels</h4>
                                <p className="font-medium text-sm">123 hotels</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default BrowseByPropertyType;
