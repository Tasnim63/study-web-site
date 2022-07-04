import { useEffect, useState } from "react";
import CourcesCardDetails from "./CourcesCardDetails";

function CourcesCard() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("courcesdata.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <>
      <div className=" flex justify-center items-center">
        <div>
          <h1 className="text-5xl font-bold mt-8 text-cyan-900">
            Explore Popular Courses
          </h1>
          <div className=" mt-10 ">
            <ul className=" flex ml-12 gap-4 ">
              <li className=" font-bold hover:text-sky-600 cursor-pointer ">
                All
              </li>
              <li className=" font-bold hover:text-sky-600 cursor-pointer ">
                BUSINESS
              </li>
              <li className=" font-bold hover:text-sky-600 cursor-pointer ">
                FINANCE
              </li>
              <li className=" font-bold hover:text-sky-600 cursor-pointer ">
                HEATH
              </li>
              <li className=" font-bold hover:text-sky-600 cursor-pointer ">
                LIFESTYLE
              </li>
              <li className=" font-bold hover:text-sky-600 cursor-pointer ">
                TECHNOLOGY
              </li>
            </ul>
          </div>
        </div>
      </div>
     <div className=" flex justify-center items-center my-10">
     <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
     {cards.map(card =>
        <CourcesCardDetails
        key={card}
        card={card} 
        ></CourcesCardDetails>
        )}
     </div>
     </div>
    </>
  );
}

export default CourcesCard;
