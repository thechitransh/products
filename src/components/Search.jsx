import React, { useContext } from "react";
import { Store } from "../context/Store";

function Search() {
  const { input, setinput } = useContext(Store);
  const { price, setprice } = useContext(Store);
  const { setPriceSearch } = useContext(Store);
  const HandleInput = (e) => {
    setinput(e.target.value);
  };
  const handlePrice = (e) => {
    setprice(e.target.value);
  };
  const handleClick = () => {
    setPriceSearch(price);
  };
  return (
    <section className=" flex flex-col gap-20 items-center p-10">
      <p className="font-bold text-xl">Product List</p>
      <article className="flex justify-evenly w-full sm:flex-col sm:items-center lg:flex-row">
        <div>
          <p className="font-bold">Name/Description</p>
          <input
            type="text"
            className=" border-2 px-2"
            onChange={HandleInput}
            value={input}
            placeholder="Search"
          />
        </div>
        <div>
          <p className="font-bold">Price</p>
          <input
            type="number"
            className=" border-2 w-[200px] px-2"
            onChange={handlePrice}
            value={price}
            placeholder="Search"
          />
          <button
            className="bg-blue-400 px-7  rounded-md mx-2"
            onClick={handleClick}
          >
            Set
          </button>
        </div>
      </article>
    </section>
  );
}

export default Search;
