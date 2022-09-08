import React from "react";

const Featured = () => {
    return (
        <section className="reponsiveSection flex flex-col gap-2 xl:gap-5">
            <h2>Featured</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <div className="relative h-60 rounded-lg group overflow-hidden cursor-pointer shadow-sm">
                    <img
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 duration-500 ease-in-out"
                    />
                    <div className="absolute bottom-5 left-5 text-white">
                        <h1 className="text-white text-3xl">Dublin</h1>
                        <p>123 properties</p>
                    </div>
                </div>
                <div className="relative h-60 rounded-lg group overflow-hidden cursor-pointer shadow-sm">
                    <img
                        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 duration-500 ease-in-out"
                    />
                    <div className="absolute bottom-5 left-5 text-white">
                        <h1 className="text-white text-3xl">Dublin</h1>
                        <p>123 properties</p>
                    </div>
                </div>
                <div className="relative h-60 rounded-lg group overflow-hidden cursor-pointer shadow-sm">
                    <img
                        src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
                        alt=""
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 duration-500 ease-in-out"
                    />
                    <div className="absolute bottom-5 left-5 text-white">
                        <h1 className="text-white text-3xl">Dublin</h1>
                        <p>123 properties</p>
                    </div>
                </div>
                <div className="relative h-60 rounded-lg group overflow-hidden cursor-pointer shadow-sm">
                    <img
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 duration-500 ease-in-out"
                    />
                    <div className="absolute bottom-5 left-5 text-white">
                        <h1 className="text-white text-3xl">Dublin</h1>
                        <p>123 properties</p>
                    </div>
                </div>
                <div className="relative h-60 rounded-lg group overflow-hidden cursor-pointer shadow-sm">
                    <img
                        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 duration-500 ease-in-out"
                    />
                    <div className="absolute bottom-5 left-5 text-white">
                        <h1 className="text-white text-3xl">Dublin</h1>
                        <p>123 properties</p>
                    </div>
                </div>
                <div className="relative h-60 rounded-lg group overflow-hidden cursor-pointer shadow-sm">
                    <img
                        src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
                        alt=""
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 duration-500 ease-in-out"
                    />
                    <div className="absolute bottom-5 left-5 text-white">
                        <h1 className="text-white text-3xl">Dublin</h1>
                        <p>123 properties</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
