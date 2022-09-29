import React, { useEffect, useState } from "react";
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
import useFetch from "../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";
import { AuthContext } from "../Context/AuthContext";
import Reserve from "../components/Reserve";
import PreviousPage from "../components/PreviousPage";


const HotelDetail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const id = location.pathname.split('/')[2]
    const { user } = useContext(AuthContext)
    const { data, loading, error } = useFetch(`/hotels/find/${id}`)
    const dateRange = location.state.dates
    const options = location.state.option
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

    const [openDetailImage, setOpenDetailImage] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [indexImage, setIndexImage] = useState(0);

    const handleClickImage = (index) => {
        setIndexImage(index)
        setOpenDetailImage(!openDetailImage)
    }
    const handleClickImageThumnail = (index) => {
        setIndexImage(index)
    }

    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }

    const date = dayDifference(dateRange[0].endDate, dateRange[0].startDate);


    const handleBooking = () => {
        if (user) {
            setOpenModal(true)
        } else {
            navigate('/signin')
        }
    }
    const handleClosingModal = () => {
        setOpenModal(false)
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
                            {data.name}
                        </h3>
                        <span className="text-sm flex gap-1">
                            <FaMapMarkerAlt></FaMapMarkerAlt> {data.address}
                        </span>
                        <h5 className="text-sm font-bold text-blue-500">
                            Excellent location - {data.distance}m from center
                        </h5>
                        <span className="text-sm text-green-500">
                            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                        </span>
                    </div>
                    <button className="button h-max" onClick={handleBooking}>Reserve or Book Now!</button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 xl:gap-5">
                    {data.photos?.map((item, index) => (
                        <div className="h-[200px] lg:h-[250px]" key={index}>
                            <img
                                src={item}
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
                            {data.title}
                        </h3>
                        <p className="text-sm">
                            {data.desc}
                        </p>
                    </div>
                    {date > 0 ? (<div className="p-5 flex flex-col gap-5 bg-gradient-to-br from-[#FFD0FD]/50 to-[#FFEDD8]/50 h-max">
                        <h4 className="inline-block leading-none text-gray-700 text-center">
                            Perfect for a {date}-night stay!
                        </h4>
                        <p className="text-sm ">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iusto
                            ipsam dolorem quidem excepturi voluptatem voluptatibus
                        </p>
                        <span className="text-xl text-center">
                            <b>${(date * data.cheapestPrice * options.room)}</b> ({date} nights)
                        </span>
                        <button className="button h-max" >Reserve or Book Now!</button>
                    </div>) : ''}
                </div>
            </section>
            {/* modal detail img  */}
            {openDetailImage && (
                <section className="fixed inset-0 flex items-center justify-center bg-black/40" onClick={() => setOpenDetailImage(!openDetailImage)}>
                    <div className="w-full lg:max-w-screen-lg z-20 bg-white p-2" onClick={(e) => e.stopPropagation()}>
                        <img src={data.photos[indexImage]} className='w-full h-[300px] lg:h-[500px] object-cover' />
                        <div className="mt-5">
                            <Swiper
                                navigation={true}
                                modules={[Navigation]}
                                slidesPerView={5}
                                spaceBetween={10}
                            >
                                {data.photos?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={item} className='w-[200px] h-[150px] object-cover cursor-pointer' onClick={() => handleClickImageThumnail(index)} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
            )}

            {/* modal reserve  */}
            {openModal && <Reserve handleClosingModal={handleClosingModal} idHotel={id} dateRange={dateRange}></Reserve>}
            <section className="bg-gradient-to-br from-[#FFD0FD]/50 to-[#FFEDD8]/50">
                <EmailSubmit></EmailSubmit>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default HotelDetail;
