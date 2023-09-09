import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from "react-redux";


export default function Navbar() {

  const items = useSelector((state)=> state.basket)

  return (
    <>
      <nav className="w-full h-12 px-16 font-bold flex justify-between items-center text-white bg-gray-800">
        <Link to={'/'} className="text-xl">React Redux</Link>
        <Link to={'/cart'} className="text-xl">Cart Page</Link>
        <p>Cart Items: {items.length}</p>
      </nav>
    </>
  );
}
