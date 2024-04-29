import React, { useEffect, useState } from "react";
import ProdusctList from "./components/ProdusctList";

function App() {
  const [data, setdata] = useState([]);
  const [input, setinput] = useState("");
  const [price, setprice] = useState("");
  const [PriceSearch, setPriceSearch] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://dummyjson.com/products");
      const result = await res.json();
      setdata(result.products);
    }
    fetchData();
  }, []);
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
    <>
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
        <div className=" flex flex-wrap justify-center gap-5">
          {data.map((p) => {
            if (
              p.title.toLowerCase().includes(input.toLowerCase()) &&
              p.description.toLowerCase().includes(input.toLowerCase()) &&
              p.price >= PriceSearch
            ) {
              return (
                <ProdusctList
                  title={p.title}
                  description={p.description.slice(0, 30)}
                  price={p.price}
                  discountPercentage={p.discountPercentage}
                  rating={p.rating}
                  stock={p.stock}
                  brand={p.brand}
                  images={p.images}
                  thumbnail={p.thumbnail}
                ></ProdusctList>
              );
            }
          })}
        </div>
      </section>
    </>
  );
}

export default App;
