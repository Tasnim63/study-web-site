import { RiArrowDownSLine, RiUser3Line } from 'react-icons/ri';

function Navbar() {
  let links = [
    {
      name: "Home  ",
      link: "/home",
    },
    {
      name: "Cources",
      link: "/cources",
    },
    {
      name: "Blogs",
      link: "/",
    },
    {
      name: "Pages",
      link: "/",
    },
  ];
  return (
    <div className=" sticky top-0 z-50 bg-white p-5 shadow-md ">
      <div className=" flex flex-row  items-center justify-around">
        <div className="">
          <img
            className=" w-28"
            src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/2x_logo.png"
            alt=""
          />
        </div>
        <ul className="  flex flex-row ">
          {links.map((link) => (
            <li className=" flex text-xl mx-3  cursor-pointer">
              <a className=" hover:text-sky-500 " href={link.link}>
                {link.name}
              </a>
              <p className='hover:text-sky-500 p-2'> <RiArrowDownSLine></RiArrowDownSLine></p>
             
            </li>
          ))}
        </ul>
        <div className="bg-sky-200  rounded-lg  p-2">
          <input
            type="text "
            placeholder="search"
            className="outline-none  bg-sky-200  rounded-md  "
          />
        </div>
        <div className=' flex'>
          <p className=' p-3 font-bold'>   <RiUser3Line></RiUser3Line></p>
          <button className="hover:text-sky-500  text-xl">
         
            Login / Signup
          </button>
        </div>
        </div>
        </div>
     
  );
}

export default Navbar;
