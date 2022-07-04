import React from 'react';
// import { BsCaretRightFill } from 'react-icons/bs';

const Why = () => {
    const data = [
        {
            id: 1,
            name: "Taught by industry professionals",
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/MKH283.jpg"
        },
        {
            id: 2,
            name: "Learn from the expert course mentor",
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/GER467.jpg"
        },
        {
            id: 3,
            name: "Discuss your future career goals",
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/MJKS424.jpg"
        },
        {
            id: 4,
            name: "Mentorship and community support",
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/MJKS490.jpg"
        },
    ]
    return (
        <div className=' lg:px-28 my-28  px-5 '>
            <h2 className=' text-center my-14 text-4xl font-bold text-secondary'>Why Take This Course</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                {
                    data.map(d => <div key={d.id} class="hover:transition ease-in-out  duration-300 relative overflow-hidden card">
                        <div className='ease-in-out hover:scale-110 duration-300'>
                            <figure><img className='h-80 object-cover brightness-75' src={d.img} alt="" /></figure>

                            <div class="card-body absolute bottom-5 text-white hover:text-primary">
                                {/* <BsCaretRightFill className=' w-[40px] h-[40px] text-primary bg-white rounded-full ' /> */}
                                <img className=' w-[40px] h-[40px] rounded-full' src="https://i.ibb.co/0DDthbT/Untitled-design-1.png" alt="" />
                                <h2 class=" card-title">{d.name}</h2>
                            </div>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default Why;