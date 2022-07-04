import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa';
import { RiInboxLine } from 'react-icons/ri';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className=' bg-accent text-white px-20 pt-20 pb-8'>
            <div className=' grid grid-cols-2 lg:grid-cols-4 mb-16'>
                <div className=' mr-5'>
                    <img className=' w-40 mb-8' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/2x_logo-white.png" alt="" />

                    <p>We support programs that create advancement for people</p>

                    <div className=' flex mt-6'>
                        <p className=' w-10 h-10 border-2 rounded-full border-primary justify-center items-center flex mr-3'><BsFacebook className=' text-lg text-primary' /></p>
                        <p className=' w-10 h-10 border-2 rounded-full border-primary justify-center items-center flex mr-3'><BsTwitter className=' text-lg text-primary' /></p>
                        <p className=' w-10 h-10 border-2 rounded-full border-primary justify-center items-center flex'><FaInstagramSquare className=' text-lg text-primary' /></p>
                    </div>
                </div>
                <div className=' ml-5'>
                    <h4 className=' text-lg font-bold mb-4'>Useful links</h4>
                    <p className=' mb-3'>About Us</p>
                    <p className=' mb-3'>Privacy Policy</p>
                    <p className=' mb-3'>Terms & condition</p>
                    <p className=' mb-3'> Student spotlight</p>
                </div>
                <div>
                    <h4 className=' text-lg font-bold mb-4'>Learning</h4>
                    <p className=' mb-3'>Business Strategy</p>
                    <p className=' mb-3'> Become A Teacher</p>
                    <p className=' mb-3'> Project Management</p>
                    <p className=' mb-3'>Membership</p>
                </div>
                <div>
                    <h4 className=' text-lg font-bold mb-4'>Contact Us</h4>
                    <p className=' mb-3'><FaPhoneVolume /> +91 458 654 528</p>
                    <p className=' mb-3'><RiInboxLine />info@example.com</p>
                    <p className=' mb-3'><MdLocationOn />PO Box 16122 Collins Street West Victoria 8007 Australia</p>
                </div>

            </div>
            <hr />
            <p className=' my-5 flex justify-center items-center'><FaRegCopyright className=' text-sm mr-2' /> Copyright {year}  Pixelcurve All rights reserved</p>
        </div>
    );
};

export default Footer;