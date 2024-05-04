import React, { useContext } from "react";
import ProdusctList from "./components/ProdusctList";
import StoreProvider from "./context/StoreProvider";
import { Store } from "./context/Store";
import Search from "./components/Search";

function App() {
  const { data } = useContext(Store);
  return (
    <>
      <StoreProvider>
        <Search></Search>
        <section className=" flex flex-col gap-20 items-center p-10">
          <div className=" flex flex-wrap justify-center gap-5">
            {console.log(data)}
            {data?.map((p) => {
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
      </StoreProvider>
    </>
  );
}

export default App;
