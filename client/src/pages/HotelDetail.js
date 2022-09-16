import React, { useState } from "react";
import EmailSubmit from "../components/EmailSubmit";
import Footer from "../components/Footer";
import ListBooking from "../components/ListBooking";
import Navbar from "../components/Navbar";
import { FaMapMarkerAlt } from "react-icons/fa";


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const dataImage = [
    {
        img: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
        img: "https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
        img: "https://images.unsplash.com/photo-1546967900-1bea5f16b69d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    },
    {
        img: "https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    },
    {
        img: "https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    },
    {
        img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
];

const HotelDetail = () => {
    const [openDetailImage, setOpenDetailImage] = useState(false);
    const [indexImage, setIndexImage] = useState(0);

    const handleClickImage = (index) => {
        setIndexImage(index)
        setOpenDetailImage(!openDetailImage)
    }
    const handleClickImageThumnail = (index) => {
        setIndexImage(index)
    }
    return (
        <div>
            <section className="bg-gradient-to-br from-[#FFD0FD]/50 to-[#FFEDD8]/50">
                <Navbar></Navbar>
                <ListBooking></ListBooking>
            </section>
            <section className="reponsiveSection flex flex-col gap-2 lg:gap-3 xl:gap-5 mb-5">
                <div className="flex flex-col gap-2 lg:flex-row justify-between">
                    <div className="flex flex-col gap-2">
                        <h3 className="inline-block leading-none">
                            Tower Street Apartments
                        </h3>
                        <span className="text-sm flex gap-1">
                            <FaMapMarkerAlt></FaMapMarkerAlt> 149 Võ Thị Sáu, Vung Tau,
                            Vietnam
                        </span>
                        <h5 className="text-sm font-bold text-blue-500">
                            Excellent location - 500m from center
                        </h5>
                        <span className="text-sm text-green-500">
                            Book a stay over $114 at this property and get a free airport taxi
                        </span>
                    </div>
                    <button className="button h-max">Reserve or Book Now!</button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 xl:gap-5">
                    {dataImage.map((item, index) => (
                        <div className="h-[200px] lg:h-[250px]" key={index}>
                            <img
                                src={item.img}
                                alt=""
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => handleClickImage(index)}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col lg:grid lg:grid-cols-4 gap-2 lg:gap-3 xl:gap-5">
                    <div className="col-span-3">
                        <h3 className="inline-block leading-none">
                            Tower Street Apartments
                        </h3>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Laudantium aperiam repellendus consequuntur ducimus velit sit
                            numquam laboriosam veritatis amet, adipisci modi totam quis non
                            sed, corporis, quia veniam illum praesentium! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Laudantium aperiam
                            repellendus consequuntur ducimus velit sit numquam laboriosam
                            veritatis amet, adipisci modi totam quis non sed, corporis, quia
                            veniam illum praesentium!
                        </p>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Laudantium aperiam repellendus consequuntur ducimus velit sit
                            numquam laboriosam veritatis amet, adipisci modi totam quis non
                            sed, corporis, quia veniam illum praesentium! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Laudantium aperiam
                            repellendus consequuntur ducimus velit sit numquam laboriosam
                            veritatis amet, adipisci modi totam quis non sed, corporis, quia
                            veniam illum praesentium!
                        </p>
                    </div>
                    <div className="p-5 flex flex-col gap-5 bg-gradient-to-br from-[#FFD0FD]/50 to-[#FFEDD8]/50 h-max">
                        <h4 className="inline-block leading-none text-gray-700 text-center">
                            Perfect for a 9-night stay!
                        </h4>
                        <p className="text-sm ">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iusto
                            ipsam dolorem quidem excepturi voluptatem voluptatibus
                        </p>
                        <span className="text-xl text-center">
                            <b>$945</b> (9 nights)
                        </span>
                        <button className="button h-max">Reserve or Book Now!</button>
                    </div>
                </div>
            </section>
            {/* modal  */}
            {openDetailImage && (
                <section className="fixed inset-0 flex items-center justify-center bg-black/40" onClick={() => setOpenDetailImage(!openDetailImage)}>
                    <div className="w-full lg:max-w-screen-lg z-20 bg-white p-2" onClick={(e) => e.stopPropagation()}>
                        <img src={dataImage[indexImage].img} className='w-full h-[300px] lg:h-[500px] object-cover' />
                        <div className="mt-5">
                            <Swiper
                                navigation={true}
                                modules={[Navigation]}
                                slidesPerView={5}
                                spaceBetween={10}
                            >
                                {dataImage.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={item.img}
                                            className='w-[200px] h-[150px] object-cover cursor-pointer'
                                            onClick={() => handleClickImageThumnail(index)}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
            )}
            <section className="bg-gradient-to-br from-[#FFD0FD]/50 to-[#FFEDD8]/50">
                <EmailSubmit></EmailSubmit>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default HotelDetail;
