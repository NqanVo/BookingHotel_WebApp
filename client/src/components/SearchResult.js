import React from 'react';

const SearchResult = () => {
    return (
        <div className='w-full rounded-lg p-2 grid lg:grid-cols-6 gap-2 shadow-lg'>
            <div className="lg:col-span-2 h-[200px] rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" className='w-full h-full object-cover' />
            </div>
            <div className="lg:col-span-3 flex flex-col justify-between items-start">
                <h3 className='inline-block leading-none text-gradient'>Tower Street Apartments</h3>
                <span className='text-sm'>500m from center</span>
                <span className='text-sm p-2 bg-green-500 text-white'>Free airport taxi</span>
                <h5 className='text-sm font-bold'>Studio Apartments with Air conditloning</h5>
                <span className='text-sm'>Entire studio - 1 bathroom - 21m<sup>2</sup> 1 full bed</span>
                <h5 className='text-sm font-bold text-green-500'>Free cancelltion</h5>
                <span className='text-sm text-green-500'>You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="lg:col-span-1 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <h5>Excellent</h5>
                    <span className='p-2 bg-blue-500 text-white'>8.9</span>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <h5 className='text-2xl tracking-widest'>$ 112</h5>
                    <span className='text-xs'>Includes taxes and fees</span>
                    <button className='button w-full'>See detail</button>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;