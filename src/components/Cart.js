import { Link } from "react-router-dom";
import Button from "../utilities/Button";
import "./Cart.css";

export default function Cart({ title, price, description, image }) {
  return (
    <div className="cart-container w-[17rem] h-auto m-3 p-5 bg-three  sm:w-[18rem]">
      <div className="">
        <div className="">
          <img
            src={image}
            alt="png"
            className="h-[10rem] w-[22rem] object-cover b-3 rounded-md"
          />
        </div>
        <div className="flex justify-around mt-3 mb-8 items-center">
          <h1 className="text-stone-100 font-black text-[1.3rem]">{title}</h1>
          <h2 className="font-medium text-yellow-400 text-[1.3rem]">
            {price}$
          </h2>
        </div>
        <p className="text-stone-100 text-[1rem] mt-4">{description}</p>
      </div>
      <div className="mt-[2rem]">
        <Link to="menu">
          <Button>
            {" "}
            <span className="text-[1.4rem]  font-bold">Order now</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
