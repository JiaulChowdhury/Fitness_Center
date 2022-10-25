import React from "react";

const Card = (props) => {
  const { name, img, age, time, description } = props.card;
  const { handleAddToCart } = props;
  return (
    <div class="bg-white h-full rounded-2xl mb-2 pb-4 shadow-lg text-left">
      <img className="h-1/2 w-full rounded-2xl" src={img} alt="" />
      <div className="p-5 ">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-red text-slate-400 leading-relaxed mb-5">
          {description.slice(0, 100)}...
          <span className="text-xs bg-slate-100 text-black px-1 rounded-md">
            Read More
          </span>
        </p>
        <h6 className="text-sm font-bold">Age: {age}</h6>
        <h6 className="text-sm font-bold mt-1">
          Exercise Time: <span>{time}</span>s
        </h6>

        <div className="w-600 pb-2 pt-2">
          <button
            onClick={() => handleAddToCart(props.card)}
            className="bg-stone-500 text-black font-bold mt-1 py-2
           hover:bg-red-500 w-full h-1/4 rounded-lg"
          >
            <p>Add</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
