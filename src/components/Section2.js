import { useState } from "react";
import "./Section2.css";
const items = [
  {
    name: "Shakar Lateef Muhammed",
    gender: "male",
    age: 19,
    position: "Chef",
    country: "Turkey",
    quote: "Come and taste the most special foods in the world",
    specials: "Pasta - Pizza - Maqluba",
  },
  {
    name: "Arya Marewan Ahmed",
    age: 29,
    gender: "female",
    position: "Chef Assistance",
    country: "Italy",
    quote: "Enjoy a big meal in a Little Lemon Restaurant",
    specials: "Kebab - Peperoni - Rice",
  },
  {
    name: "Rechard Nelson BR",
    age: 39,
    gender: "male",
    position: " Main Chef ",
    country: "Spain",
    quote: "We want to show you how buetiful the world is",
    specials: "Korean Food - ChickenBryany - Maqluba",
  },
];

export default function Section2() {
  const [active, setActive] = useState(0);
  const person = items[active];

  const handlePrevClick = () => {
    setActive((prevActive) =>
      prevActive === 0 ? items.length - 1 : prevActive - 1
    );
  };

  const handleNextClick = () => {
    setActive((prevActive) =>
      prevActive === items.length - 1 ? 0 : prevActive + 1
    );
  };
  return (
    <div className="info-container relative top-4 pt-7 flex-row justify-center items-center text-center">
      <div className="information text-center">
        <h1 className="text-stone-100 font-bold text-[1.7rem]">
          {" "}
          {person.name}
        </h1>
        <div className="flex justify-center text-stone-100 font-medium text-[1.2rem] gap-12">
          <h2>Age: {person.age}</h2>
          <h2>From {person.country}</h2>
        </div>
      </div>
      <div className="quote mt-4 mb-4">
        <p className="text-yellow-500 font-medium text-[1.2rem]">
          {" "}
          <span>
            {person.gender === "male" ? "He" : "She"} says "{person.quote}"
          </span>{" "}
        </p>
      </div>
      <div className="flex text-[1.2rem] text-yellow-500 justify-center">
        <h1 className="font-semibold">Specialty:</h1>
        <p className="font-medium">{person.specials}</p>
      </div>
      <div className="buttons mt-4 flex justify-between m-10 p-3">
        <button
          onClick={handlePrevClick}
          className="bg-stone-100 text-gray-800 px-4 py-2 rounded-md transition duration-300 hover:bg-gray-300"
        >
          👈🏻
        </button>
        <button
          onClick={handleNextClick}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-yellow-400"
        >
          👉🏻
        </button>
      </div>
    </div>
  );
}
