import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import "./Page.css";
import React, { useEffect, useState } from "react";
import Cart from "../sideBar/sideBar";
import Card from "../cardSection/cardSection";
import Blogs from "../Blog/Blog";

const Page = () => {
  const [cardInfo, setCard] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("info.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <>
      <div className="tree">
        <div className="container-main grid md:grid-cols-4 grid-cols-1  gap-2 bg-slate-100 ">
          <div className="card-container col-span-3 ">
            <div className="logo flex">
              <FontAwesomeIcon
                className=" rounded-sm mr-5 text-5xl"
                icon={faDumbbell}
              ></FontAwesomeIcon>
              <h1 className="text-4xl font-bold  ">
                Fitness Center
              </h1>
            </div>
            <h5 className="text-2xl my-8 font-bold text-center bg-stone-300 text-black rounded-md">
            Move Your Body, Shape Your Future. <br></br>
            Select Your Exercise Now.
            </h5>
            <div class="container">
              <div class="flex flex-wrap">
                <div class="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 px-4 gap-5 pb-18">
                  {cardInfo.map((card) => (
                    <Card
                      key={card.id}
                      card={card}
                      handleAddToCart={handleAddToCart}
                    ></Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="info-container bg-white sticky top-0">
            <Cart cart={cart}></Cart>
          </div>
        </div>
        <Blogs></Blogs>
      </div>
    </>
  );
};

export default Page;
