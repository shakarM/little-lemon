import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    name: "Spaghetti Bolognese",
    price: 12.99,
    ingredients: [
      "spaghetti",
      "ground beef",
      "tomato sauce",
      "onion",
      "garlic",
      "herbs",
    ],
    img: "https://media.istockphoto.com/id/1399179382/photo/traditional-italian-spaghetti-bolognese-on-a-dark-background.jpg?s=612x612&w=0&k=20&c=f3yo8eqzp0_59_0mb28Re503MAyu2SCklN2rWyezDEI=",
  },
  {
    name: "Chicken Caesar Salad",
    price: 8.99,
    ingredients: [
      "chicken breast",
      "romaine lettuce",
      "croutons",
      "parmesan cheese",
      "caesar dressing",
    ],
    img: "https://fccae8b066ab962232a8-1b1069f819384d721973c1b8d8e32756.ssl.cf1.rackcdn.com/GaryTardiff-41.jpg",
  },
  {
    name: "Vegetable Curry",
    price: 10.49,
    ingredients: [
      "mixed vegetables",
      "curry sauce",
      "coconut milk",
      "jasmine rice",
      "cilantro",
    ],
    img: "https://media.istockphoto.com/id/1278584350/photo/veg-kolhapuri-in-black-bowl-on-dark-slate-table-top-indian-vegetable-curry-dish-vegetarian.jpg?s=612x612&w=0&k=20&c=J8J66FYYLs9tupC46-_de1qnASgaEsQn-yk3yW86DJ4=",
  },
  {
    name: "Margherita Pizza",
    price: 10.99,
    ingredients: [
      "dough",
      "tomato sauce",
      "fresh mozzarella",
      "basil",
      "olive oil",
    ],
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emElMjBtYXJnaGVyaXRhfGVufDB8fDB8fHww",
  },
  {
    name: "Grilled Salmon with Lemon Dill Sauce",
    price: 15.99,
    ingredients: [
      "salmon fillet",
      "lemon",
      "dill",
      "olive oil",
      "salt",
      "pepper",
    ],
    img: "https://foodal.com/wp-content/uploads/2022/08/Grilled-Salmon-with-Creamy-Dill-Sauce-Recipe.jpg",
  },
  {
    name: "Beef Tacos",
    price: 11.49,
    ingredients: [
      "ground beef",
      "taco shells",
      "lettuce",
      "tomato",
      "cheese",
      "salsa",
      "sour cream",
    ],
    img: "https://media.istockphoto.com/id/179708004/photo/beef-barbacoa-tacos.jpg?s=612x612&w=0&k=20&c=aKyzvGAB3ct79HndVhzIvfHWk3cYkHopoLm9EjqmRiA=",
  },
];

export default function Menu() {
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg p-8">
      <button onClick={() => navigate("/")}>Go back to home</button>
      <div className="font-bold text-xl mb-4">Menu</div>

      {/* Food Items */}
      <div className="grid grid-cols-1 text-center justify-center items-center gap-4">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-gray-200  p-4 rounded">
            <img className="" src={item.img} alt="png" />
            <p className="font-semibold text-lg">{item.name}</p>
            <p className="text-gray-700">Price: ${item.price.toFixed(2)}</p>
            <p className="text-gray-700">
              Ingredients: {item.ingredients.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
