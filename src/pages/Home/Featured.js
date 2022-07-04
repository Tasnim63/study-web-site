import React from 'react';

const Featured = () => {
    const data = [
        {
            id: 1,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/pencil.png",
            name: "Design"
        },
        {
            id: 2,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/science.png",
            name: "Chemistry"
        },
        {
            id: 3,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/tech.png",
            name: "Technology"
        },
        {
            id: 4,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/med.png",
            name: "Medical"
        },
        {
            id: 5,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/math.png",
            name: "Mathematics"
        },
        {
            id: 6,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/food-delivery.png",
            name: "Food & Recipe"
        },
        {
            id: 7,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/graduating-student.png",
            name: "Language"
        },
        {
            id: 8,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/art-book.png",
            name: "Art & Block"
        },
    ]
    return (
        <div className=' lg:px-28 my-28 px-5'>
            <div className=' lg:flex lg:justify-between text-center'>
                <h2 className=' text-secondary text-4xl font-bold mb-5 lg:mb-0'>Featured topics by category</h2>
                <button className=' text-primary rounded border-2 border-primary hover:bg-primary hover:text-white py-3 px-5'>Explore more</button>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-4 pt-16 gap-10'>
                {
                    data.map(d => <div key={d.id} className=' flex items-center bg-slate-200 rounded shadow hover:bg-secondary hover:text-white p-5'>
                        <div>
                            <img className=' w-16' src={d.img} alt="" />
                        </div>
                        <h4 className=' ml-5 font-bold text-xl'>{d.name}</h4>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Featured;