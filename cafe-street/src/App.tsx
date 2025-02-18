import Home from "./pages/Home";
import background_1 from "./assets/hero/bg_img_hero.png";

function App() {
  return (
    <div className="bg-background w-screen overflow-x-hidden">
      <Home />
      <div className="fixed -top-8 -right-[4.5vw] w-1/3 min-w-[300px] overflow-hidden max-sm:min-w-[250px]">
        <img className="w-full" src={background_1} alt="" />
      </div>
    </div>
  );
}

export default App;
