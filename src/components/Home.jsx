import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../reducer/basketSlice";

export default function Home() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch()

  const addItemsToBasket = (items) =>{
    dispatch(addToBasket(items))
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      // console.log(data);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="w-full bg-gray-700 text-white space-y-12 flex justify-start items-center flex-col">
        <h1 className="text-4xl font-bold pt-6">Items Available Right Now</h1>
        <div className="grid grid-cols-5 place-content-center gap-10 pb-10">
          {data.map((item, ind) => {
            return (
              <div
                className="w-52 h-64 rounded-lg bg-gray-500 flex flex-wrap border-2 border-black"
                key={ind}
              >
                <img
                  className="rounded-t-lg w-full h-36 bg-cover bg-no-repeat"
                  src={item.image}
                  alt=""
                />

                <div className="py-2 px-3 font-semibold space-y-4">
                  <h5 className="text-xl font-bold">{item.category}</h5>
                  <div className="flex justify-between items-center w-44">
                    <p>Price: ${item.price}</p>
                    <div className="bg-blue-600 hover:bg-blue-800 py-1 px-2 rounded-lg cursor-pointer">
                      <button onClick={()=> addItemsToBasket(item)}>ADD</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
