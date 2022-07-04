import React from 'react';
import { FcCheckmark } from 'react-icons/fc';

const Expert = () => {
    return (
        <div style={{ backgroundImage: 'url("https://i.ibb.co/HCg5YSg/Untitled-design.png")' }} className=' lg:px-28 bg-no-repeat bg-cover '>
            <div className=' grid grid-cols-1 lg:grid-cols-2'>
                <div className=' pt-10'>
                    <h2 className=' text-secondary text-4xl font-bold my-5 leading-tight'>Thousands of courses authored by industry experts</h2>
                    <p className=' mb-2 flex items-center'><FcCheckmark className=' text-lg mr-2 font-bold' /> Get access to 4,000+ of our top courses</p>
                    <p className=' mb-2 flex items-center'><FcCheckmark className=' text-lg mr-2 font-bold' /> Popular topics to learn now</p>
                    <p className=' mb-2 flex items-center'><FcCheckmark className=' text-lg mr-2 font-bold' /> Find the right instructor for you</p>
                    <button className=' bg-primary text-white rounded py-3 px-5 mt-5 hover:bg-secondary'>Get Started Today</button>
                </div>
                <div className='mx-auto'>
                    <img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/ISIS32.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Expert;