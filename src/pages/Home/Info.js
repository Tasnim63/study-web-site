import React from 'react';

const Info = () => {
    return (
        <div className=' bg-secondary py-10 text-white lg:px-28'>
            <div className=' grid lg:grid-cols-3 grid-cols-1 gap-12'>
                <div className=' flex justify-center items-center'>
                    <div>
                        <img className=' w-20' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/III98456.png" alt="" />
                    </div>
                    <div className='pl-8'>
                        <h3 className=' text-2xl font-bold'> Over 155,000</h3>
                        <p>Video courses on career skills</p>
                    </div>
                </div>
                <div className=' flex justify-center items-center'>
                    <div>
                        <img className=' w-20 ' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/icon-2.png" alt="" />
                    </div>
                    <div className='pl-8'>
                        <h3 className=' text-2xl font-bold'> Choose from</h3>
                        <p>Top industry instructors</p>
                    </div>
                </div>
                <div className=' flex justify-center items-center'>
                    <div>
                        <img className=' w-20' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/icon-3.png" alt="" />
                    </div>
                    <div className='pl-8'>
                        <h3 className=' text-2xl font-bold'>Lifetime access</h3>
                        <p>On mobile and desktop</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;