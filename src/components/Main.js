import { Link } from "react-router-dom";
import Button from "../utilities/Button";
import "./Main.css";

export default function Main() {
  return (
    <main className="text-center">
      <div className="sm:flex sm:justify-between lg:justify-between">
        <div className="lg:w-1/2 lg:order-1">
          <div className="image-container text-center">
            <img
              className="w-[17rem] mx-auto pt-8 "
              src="https://d2w1ef2ao9g8r9.cloudfront.net/images/clean-plate.png"
              alt="png"
            />
          </div>
        </div>

        <div className="sm:w-1/2 lg:order-2 sm:mt-5 sm:text-left">
          <div className="text-container mt-3">
            <h1 className="font-extrabold text-stone-100 text-[2rem] sm:text-[3rem]">
              {" "}
              Little Lemon{" "}
            </h1>
            <h2 className="suli font-bold text-[1.8rem] text-yellow-400 mb-2">
              {" "}
              Sulaymaniyah{" "}
            </h2>
            <p className="text-stone-100 mb-3 sm:text-[1.3rem] sm:w-[22rem] sm:mt-6 sm:mb-[2rem]">
              {" "}
              We are located in the capital of intellectualism. Our services
              includes making everyone happy and saturated. Try our best
              services to taste the zest of life!
            </p>
            <Link to="reservation" className="py-3 mt-4">
              {" "}
              <Button>Reserve a table</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
