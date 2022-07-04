import React from 'react';

const Stories = () => {
    const data = [
        {
            id: 1,
            name: "James Smith",
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/UU120.png",
            review: "I believe in lifelong learning and they are a great place to learn from experts. I have learned a lot and recommend it",
            position: "CFO Apple Corp"
        },
        {
            id: 2,
            name: "Mark Donald",
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/MU120.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt labore Lorem ipsum",
            position: "Manager"
        },
        {
            id: 3,
            name: "Charlie Keller",
            img: "	https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/JON972.jpg",
            review: "I believe in lifelong learning and they are a great place to learn from experts. I have learned a lot and recommend it",
            position: "Developer"
        },
    ]
    return (
        <div className=' lg:px-28 mb-28  px-5 '>
            <h2 className=' text-center mt-20 mb-32 text-4xl font-bold text-secondary'>Stories of Successful Students</h2>
            <div className=' grid lg:grid-cols-3 grid-cols-1 gap-16 lg:gap-8'>
                {
                    data.map(d => <div key={d.id} className=' bg-slate-200 '>
                        <div class="avatar">
                            <div class="w-24 rounded-full mt-[-50px] ml-10">
                                <img src={d.img} alt='' />
                            </div>
                        </div>
                        <div className=' px-10 py-5'>
                            <p className=' text-xl mb-5'>{d.review}</p>
                            <div>
                                <h4 className=' text-secondary font-bold text-lg'>{d.name}</h4>
                                <p>{d.position}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Stories;