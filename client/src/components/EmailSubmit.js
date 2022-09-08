import React from 'react';
import { SiMinutemailer } from 'react-icons/si'
const EmailSubmit = () => {
    return (
        <div className='reponsiveSection xl:max-w-3xl mx-auto text-center flex flex-col gap-5'>
            <div className="">
                <h3>Save time, save money</h3>
                <p>Sign up and we'll send the best details to you</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center py-2 px-4 w-full rounded-lg bg-white/80 shadow-sm">
                    <SiMinutemailer size={30}></SiMinutemailer>
                    <input
                        type="text"
                        placeholder="Your email"
                        required
                        className="w-full outline-none bg-transparent"
                    />
                    <button className='button'>Subscribe</button>
                </div>
                <div className="flex gap-2">
                    <input
                        type="checkbox"
                    />
                    <span className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                </div>
            </div>
        </div>
    );
};

export default EmailSubmit;