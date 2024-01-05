import Cart from "./Cart";
import "./Section1.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const carts = [
  {
    title: "Spaghetti ",
    price: 12.99,
    description:
      "Classic Italian pasta with savory ground beef, tomato sauce, onions, garlic, and herbs.",
    image:
      "https://media.istockphoto.com/id/1399179382/photo/traditional-italian-spaghetti-bolognese-on-a-dark-background.jpg?s=612x612&w=0&k=20&c=f3yo8eqzp0_59_0mb28Re503MAyu2SCklN2rWyezDEI=",
  },
  {
    title: "Chicken ",
    price: 8.99,
    description:
      "Fresh and crisp romaine lettuce topped with grilled chicken, croutons, parmesan cheese, and Caesar dressing.",
    image:
      "https://fccae8b066ab962232a8-1b1069f819384d721973c1b8d8e32756.ssl.cf1.rackcdn.com/GaryTardiff-41.jpg",
  },
  {
    title: "Vegetable ",
    price: 10.49,
    description:
      "A flavorful mix of assorted vegetables in a rich curry sauce, served with fragrant jasmine rice.",
    image:
      "https://media.istockphoto.com/id/1278584350/photo/veg-kolhapuri-in-black-bowl-on-dark-slate-table-top-indian-vegetable-curry-dish-vegetarian.jpg?s=612x612&w=0&k=20&c=J8J66FYYLs9tupC46-_de1qnASgaEsQn-yk3yW86DJ4=",
  },
  {
    title: "Margherita ",
    price: 10.99,
    description:
      "Classic Margherita pizza with a thin crust, tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emElMjBtYXJnaGVyaXRhfGVufDB8fDB8fHww",
  },
  {
    title: "Grilled ",
    price: 15.99,
    description:
      "Deliciously grilled salmon fillet seasoned with lemon, dill, and a touch of olive oil.",
    image:
      "https://foodal.com/wp-content/uploads/2022/08/Grilled-Salmon-with-Creamy-Dill-Sauce-Recipe.jpg",
  },
  {
    title: "BBQ ",
    price: 11.99,
    description:
      "Savor the smoky flavor of BBQ sauce on a pizza topped with juicy chicken, red onion, cilantro, and melted cheese.",
    image:
      "https://media.istockphoto.com/id/179708004/photo/beef-barbacoa-tacos.jpg?s=612x612&w=0&k=20&c=aKyzvGAB3ct79HndVhzIvfHWk3cYkHopoLm9EjqmRiA=",
  },
];

const Section1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767, // Breakpoint for smartphones
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1023, // Breakpoint for tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 9999, // A large value to cover desktop and above
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <section className="mb-4 mt-3">
      <Slider {...settings}>
        {carts.map((item, index) => (
          <div key={index} className="flex justify-center">
            <Cart {...item} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Section1;
