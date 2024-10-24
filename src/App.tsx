import "./App.css";
import CarDetailsCard from "./components/CarDetailsCard";
import Greeting from "./components/Greeting";
import HelloWorld from "./components/HelloWorld";

// React functional Component
function App() {
  return (
    <>
      <HelloWorld />
      <div>
        <Greeting greetingName="Good Morning" language="english"/>
        <CarDetailsCard carName="Lord Alto" color="white" carPhoto="https://preview.redd.it/never-knew-lord-alto-have-a-4x4-varient-v0-77qhque0ct7c1.png?auto=webp&s=312faf1d7d20bf3c51fa8e5be784ca1373dff7af"/>
      </div>
    </>
  );
}

export default App;
