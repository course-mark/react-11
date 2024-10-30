import "./App.css";
import CarDetailsCard from "./components/CarDetailsCard";
import Greeting from "./components/Greeting";
import HelloWorld from "./components/HelloWorld";
import Users from "./pages/Users";

const lordAltoDetails = {
  carName: "Lord Alto",
  color: "white",
  carPhoto:
    "https://5.imimg.com/data5/VK/AF/MY-26895595/maruti-alto-800-1000x1000.png",
  size: "3,430 mm L x 1,490 mm W x 1,475 mm H",
  tagline: "Let's Go",
  model: "Alto 800",
  engineCC: "796cc",
  engineCylinder: "L-3",
  safetyRating: "3-star",
  textColor: "text-gray-700",
};

const tharDetails = {
  carName: "THAR",
  color: "black",
  carPhoto: "https://wallpapercave.com/wp/wp3324581.jpg",
  size: "3,430 mm L x 1,490 mm W x 1,475 mm H",
  tagline: "Live young live free",
  model: "Thar new",
  engineCC: "999 to 2184 cc",
  engineCylinder: "L-4",
  safetyRating: "5-star",
  textColor: "text-blue-700",
};

const rubiconDetails = {
  carName: "Rubicon",
  color: "red",
  carPhoto: "https://cdn1.smartprix.com/rx-i5rYmPI57-w1200-h1200/5rYmPI57.jpg",
  size: "3,430 mm L x 1,490 mm W x 1,475 mm H",
  tagline: "Live young live free",
  model: "Thar new",
  engineCC: "999 to 2184 cc",
  engineCylinder: "L-4",
  safetyRating: "5-star",
  textColor: "text-blue-700",
};

// array of objects
const cars = [tharDetails, lordAltoDetails, rubiconDetails, tharDetails];

function App() {

  // map function converts array of objects(cars) into array of JSX(carsUI)
  const carsUI = cars.map((car) => {
    return (
      <CarDetailsCard
        carName={car.carName}
        color={car.color}
        carPhoto={car.carPhoto}
        size={car.size}
        tagline={car.tagline}
        model={car.model}
        engineCC={car.engineCC}
        engineCylinder={car.engineCylinder}
        safetyRating={car.safetyRating}
        textColor={car.textColor}
      />
    );
  });

  return (
    <>
      <Users/>
    </>
  );
}

export default App;
