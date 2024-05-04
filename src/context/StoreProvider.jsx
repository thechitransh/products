import { useState, useEffect } from "react";
import React from "react";

import { Store } from "./Store";
function StoreProvider({ children }) {
  const [data, setdata] = useState([]);
  const [input, setinput] = useState("");
  const [price, setprice] = useState("");
  const [PriceSearch, setPriceSearch] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://dummyjson.com/products");
      const result = await res.json();
      if (result.products.length > 1) {
        setdata(result.products);
      } else {
        console.log("no data");
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Store.Provider
        value={{
          data,
          input,
          setinput,
          price,
          setprice,
          PriceSearch,
          setPriceSearch,
          setdata,
        }}
      >
        {/* {console.log(data)}y */}
        {children}
      </Store.Provider>
    </>
  );
}

export default StoreProvider;
