import { useContext } from "react";
import React from "react";
import { Store } from "../context/Store";

function ProdusctList() {
  const { data, input, PriceSearch } = useContext(Store);
  return (
    <>
      <section className=" flex flex-col gap-20 items-center p-10">
        <div className=" flex flex-wrap justify-center gap-5">
          {data.map((p) => {
            if (
              p.title.toLowerCase().includes(input.toLowerCase()) &&
              p.description.toLowerCase().includes(input.toLowerCase()) &&
              p.price >= PriceSearch
            ) {
              return (
                <>
                  <section className="w-[80%] border-2 p-5 flex flex-col h-[400px] gap-2 hover:shadow-md hover:shadow-blue-400 sm:w-[80%] md:w-[30%] lg:w-[20%]">
                    <p className="font-bold">{p.title}</p>
                    <p>{p.description}. . . </p>
                    <p>{p.brand}</p>
                    <div className="flex overflow-x-scroll h-[60%] ">
                      {p.images.map((image) => {
                        return (
                          <img src={image} className=" w-full" alt="image" />
                        );
                      })}
                    </div>
                    <div className=" flex justify-evenly">
                      <p>Rating {p.rating}</p>
                      <p>Avilable {p.stock}</p>
                      <p>Discount {p.discountPercentage}%</p>
                    </div>
                    <p>
                      Price:- <span className=" font-bold">${p.price}</span>
                    </p>
                  </section>
                </>
              );
            }
          })}
        </div>
      </section>
    </>
  );
}

export default ProdusctList;
