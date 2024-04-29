import React from "react";

function ProdusctList(props) {
  return (
    <section className="w-[80%] border-2 p-5 flex flex-col h-[400px] gap-2 hover:shadow-md hover:shadow-blue-400 sm:w-[80%] md:w-[30%] lg:w-[20%]">
      <p className="font-bold">{props.title}</p>
      <p>{props.description}. . . </p>
      <p>{props.brand}</p>
      <div className="flex overflow-x-scroll h-[60%] ">
        {props.images.map((image) => {
          return <img src={image} className=" w-full" alt="image" />;
        })}
      </div>
      <div className=" flex justify-evenly">
        <p>Rating {props.rating}</p>
        <p>Avilable {props.stock}</p>
        <p>Discount {props.discountPercentage}%</p>
      </div>
      <p>
        Price:- <span className=" font-bold">${props.price}</span>
      </p>
    </section>
  );
}

export default ProdusctList;
