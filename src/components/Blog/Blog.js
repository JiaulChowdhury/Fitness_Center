import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="bg-white col-span-3 rounded-2xl px-5 pb-5 text-left">
        <br />
        <h1 className=" text-3xl text-center text-black font-bold">
          Blog Section
        </h1>
        <br />
        <h1 className="text-2xl text-center font-bold text-black">1. How to React Work?</h1>
        <p className="my-3 text-xl m-3 text-center text-black">
        React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
        </p>

        <br />
        <h1 className="text-2xl text-center text-black font-bold">
          
          2. What else does useEffect do besides load data?
        </h1>

        <p className="my-3 text-xl text-center m-3 text-black ">
        You can use the useEffect Hook to perform side effects in your components. The useEffect() hook executes the side-effect after the initial rendering and only on subsequent renderings if the name value changes. It is perfectly acceptable to have multiple useEffects in your code. The rule of multiple hooks also applies to useState - you can have multiple useState in one component to separate different parts of the state; you don't have to build one complicated state object.
        </p>

        <br />
        <h1 className="text-2xl text-center font-bold text-black">
        3. What is the difference between  Props and State in React?
        </h1>
        <p className="my-3 text-xl text-center m-3 text-black  ">
        While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).
        </p>
      </div>
    </div>
  );
};

export default Blog;
