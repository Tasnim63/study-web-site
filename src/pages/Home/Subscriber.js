import React from 'react';

const Subscriber = () => {
    return (
        <div className=' bg-primary py-10 px-28'>
            <div className=' flex justify-between items-center'>
                <div className=' text-white'>
                    <h2 className=' text-4xl font-bold mb-2'>Subscribe Newsletters</h2>
                    <p className=' text-lg'>Enter your email address to register to our newsletter</p>
                </div>
                <div class="form-control">
                    <div class="input-group">
                        <input type="text" placeholder="" class="input input-bordered px-40" />
                        <button class="btn btn-accent">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscriber;