import React from 'react';
import GroupSearch from './GroupSearch';
import Typed from 'react-typed'
const Header = () => {
    return (
        <section className='reponsiveSection'>
            <div className="grid lg:grid-cols-2 mt-5 md:mt-10 xl:mt-20 gap-2 lg:gap-3 xl:gap-5">
                <div className="flex flex-col gap-2 lg:gap-3 xl:gap-5 text-center lg:text-left">
                    <h1 className=''>Find your next stay</h1>
                    <p className='text-base lg:text-2xl xl:text-4xl font-medium text-black'>
                        <span>Search deals on </span>
                        <Typed
                            strings={[
                                ' hotels',
                                ' homes',
                                ' much more...'
                            ]}
                            typeSpeed={100}
                            backSpeed={80}
                            loop>
                        </Typed>
                    </p>
                </div>
                <div className="">
                    <GroupSearch></GroupSearch>
                </div>
            </div>
        </section>
    );
};

export default Header;