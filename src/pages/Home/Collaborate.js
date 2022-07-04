import React from 'react';

const Collaborate = () => {
    const data = [
        {
            id: 1,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/CO932.png"
        },
        {
            id: 2,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/COP02.png"
        },
        {
            id: 3,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/CO02.png"
        },
        {
            id: 4,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/ICE32.png"
        },
    ]
    return (
        <div className=' lg:px-96 mb-28 px-5'>
            <h2 className=' text-center my-20 text-2xl font-bold text-secondary'>We collaborate with <span className=' text-primary'>200+</span> Leading universities & companies</h2>
            <div className=' grid grid-cols-4'>
                {
                    data.map(d => <div key={d.id}>
                        <img src={d.img} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Collaborate;