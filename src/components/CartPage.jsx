import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromBasket } from "../reducer/basketSlice";

export default function CartPage() {
  const items = useSelector((state) => state.basket);


  // Create state to track the quantity for each item
  const [quantities, setQuantities] = useState(items.map(()=> 1))

  const increaseQuantity = (index) =>{
    const newQuantities = [...quantities]
    newQuantities[index] = newQuantities[index] + 1
    setQuantities(newQuantities)
  }

  const decreaseQuantity = (index) =>{
    const newQuantities = [...quantities]
    if(newQuantities.length > 0){
    newQuantities[index] = newQuantities[index] - 1
    setQuantities(newQuantities)
  }}

  // Calculate total quantities and total price
  const totalQuantities = quantities.reduce((acc, quantity)=> acc + quantity, 0)
  const totalPrice = items.reduce((acc, item, index)=> acc + item.price * quantities[index], 0)

  return (
    <>
      <section className="w-full bg-gray-700 pb-12">
        <h1 className="text-4xl font-bold text-white pt-4 w-full flex justify-center items-center">
          Your Cart
        </h1>
        {items.map((item, index) => {
          return (
            <ul
              className="flex justify-center items-center flex-col pt-6 space-y-4"
              key={item.id}
            >
              <li className="w-3/4 flex justify-between items-center border-2 border-white p-5 font-bold text-white text-2xl">
                <img src={item.image} alt="" className="w-20 rounded-lg" />
                <h1>{item.category}</h1>
                <div>
                  <p>
                    <span
                      className="cursor-pointer"
                      onClick={() => decreaseQuantity(index)}
                    >
                      -
                    </span>{" "}
                    {quantities[index]}{" "}
                    <span
                      className="cursor-pointer"
                      onClick={() => increaseQuantity(index)}
                    >
                      +
                    </span>
                  </p>
                </div>
                <h1>${(item.price * quantities[index]).toFixed(2)}</h1>
                <p className="cursor-pointer"><DeleteIcon /></p>
              </li>
            </ul>
          );
        })}

        <div className="w-full flex justify-center items-center mt-10">
          <div className="w-80 p-5 text-white font-bold text-xl border-2 border-white space-y-3">
            <div className="flex justify-between items-center border-b-2 border-white pb-3">
              <h1>Total Quantities:</h1>
              <p>{totalQuantities}</p>
            </div>
            <div className="flex justify-between items-center">
              <h1>Total Price:</h1>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
