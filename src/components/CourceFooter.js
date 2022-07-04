import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { FaPhoneVolume } from "react-icons/fa";
import { TbMailOpened } from "react-icons/tb";
import { GoLocation } from "react-icons/go";

function CourceFooter() {
  return (
    <>
      <div className="p-16 bg-base-200">
        <footer class="footer  mx-11 px-20  text-base-content">
          <div>
            <img
              className=" w-36 my-6"
              src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/2x_logo.png"
              alt=""
            />
            <p className="font-semibold text-lg text-gray-500">
              We support programs that create <br /> advancement for people
            </p>
            <div  className=" flex flex-row gap-3">
              <p className="text-teal-400 text-3xl p-3 border-teal-400 border rounded-full hover:bg-teal-400 hover:text-white ">
                <BsFacebook></BsFacebook>
              </p>
              <p className="text-teal-400 text-3xl p-3 rounded-full border-teal-400 border rounded-3xl hover:bg-teal-400 hover:text-white ">
                <AiFillTwitterCircle></AiFillTwitterCircle>
              </p>
              <p className="text-teal-400 text-3xl p-3 rounded-full border-teal-400 border rounded-3xl hover:bg-teal-400 hover:text-white ">
                <GrInstagram></GrInstagram>
              </p>
            </div>
          </div>
          <div>
            <span class="text-2xl my-4 font-semibold text-black">
              Useful links
            </span>
            <a class="cursor-pointer hover:text-teal-400 link link-hover text-lg text-gray-500 ">
              About Us
            </a>
            <a class="cursor-pointer hover:text-teal-400 link link-hover text-lg text-gray-500">
              Privacy Policy
            </a>
            <a class=" cursor-pointer hover:text-teal-400 link link-hover text-lg text-gray-500">
              Terms & condition
            </a>
            <a class=" cursor-pointer hover:text-teal-400 link link-hover text-lg text-gray-500">
              Student spotlight
            </a>
          </div>
          <div>
            <span class="text-2xl my-4 font-semibold text-black">Learning</span>
            <a class="cursor-pointer hover:text-teal-400 link link-hover text-lg text-gray-500">
              Business Strategy
            </a>
            <a class="cursor-pointer hover:text-teal-400 link link-hover text-lg text-gray-500">
              Become A Teacher
            </a>
            <a class="cursor-pointer hover:text-teal-400 link link-hover text-lg text-gray-500">
              Project Management
            </a>
            <a class="cursor-pointer hover:text-teal-400 link link-hover text-lg text-gray-500">
              Membership
            </a>
          </div>
          <div>
            <span class="text-2xl my-4 font-semibold text-black">
              Contact Us
            </span>
            <p class=" flex text-lg text-gray-500"><span className="text-teal-400 p-1"><FaPhoneVolume></FaPhoneVolume></span> +91 458 654 528</p>
            <p class=" flex text-lg text-gray-500"><span className="text-teal-400 p-1"><TbMailOpened></TbMailOpened></span>info@example.com</p>
            <p class=" flex text-lg text-gray-500"><span className="text-teal-400 p-1"><GoLocation></GoLocation></span>
              PO Box 16122 Collins Street West <br /> Victoria 8007 Australia
            </p>
          </div>
        </footer>
        <div className=" px-28 mt-12 text-center">
          <hr />
          <p className=" mt-8">
            © Copyright 2022 Pixelcurve All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default CourceFooter;
