import PizzaOrderForm from "./PizzaOrderForm";
import PizzaProgress from "./PizzaProgress";
import backgroundImage from "../img/Background.jpg";
import PizzaStage from "./PizzaStage";

function App() {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: "100vh",
      }}
    >
      <div className="bg-white text-[#B53422] text-2xl font-semibold p-4 fixed w-full z-10">
        Pizza Store
      </div>
      <div className="pt-20 ">
        <div className="px-4 text-[#B53422]">
          <PizzaOrderForm />
          <PizzaProgress />
          <PizzaStage />
        </div>
      </div>
    </div>
  );
}

export default App;
