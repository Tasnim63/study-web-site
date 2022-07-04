import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

function CourcesCardDetails({card}) {
    const {id,img,name,price,tittle,userImg,userName,user,book,time,description}=card;
  return (
    <>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div class="card-body">
          <div className=" flex ">
          <p class="font-bold  text-teal-400 p-1 ">
           {name}
           
          </p >
              <p className="p-1 font-bold ml-36 text-lg"> {price}</p>
          </div>

          <p className=" card-title">{tittle}</p>
          <div class=" flex mb-3">
            <img className=" w-14 rounded-full " src={userImg} alt="user imgaes" />
           <p className=" mt-3  ml-5 text-lg text-gray-500 ">{userName}</p>
          </div>
          <hr/>
          <div className=' flex  mt-3'>
           <div className=' flex'>
           <p className=' flex'>  <span className='text-teal-400   p-1 mx-1'><AiOutlineUser></AiOutlineUser></span> <span>{user}</span></p>
        
        <p className=' flex'>  <span className='text-teal-400   p-1 mx-1'><BiBook></BiBook></span> <span>{book}</span></p>
           </div>
           <p className='ml-32 mt-1 text-yellow-300 flex'><AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourcesCardDetails;
