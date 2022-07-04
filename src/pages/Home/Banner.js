import React from 'react';

const Banner = () => {
    return (
        <div style={{ backgroundImage: 'url("https://i.ibb.co/bKQJ92K/Untitled-design.png")' }} className=' min-h-screen flex items-center lg:px-28'>
            <div className=' grid lg:grid-cols-2 grid-cols-1'>
                <div className=' lg:pr-10 px-2'>
                    <p className=' text-primary font-bold'>DEVELOPED BY TO TEACHERS</p>
                    <h2 className=' text-secondary py-3 text-5xl font-bold leading-tight'>Experience a learning platform that take you next level</h2>
                    <p className=''>World-class training and development programs developed by top teachers</p>
                    <button className=' bg-primary text-white rounded py-3 px-5 mt-10 hover:bg-secondary'>Explore All Courses</button>
                </div>
                <div className='flex justify-center items-center lg:pl-24 px-5 pt-5 lg:pt-0'>
                    <div>
                        <img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HR0835.jpg" alt="" />
                    </div>

                    <div>
                        <img className=' pl-10' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HTR084.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;