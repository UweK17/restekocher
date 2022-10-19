import { Area } from "./components/Area";
import { Category } from "./components/Category";
import { Footer } from "./components/Footer";
import { Fridge } from "./components/Fridge";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Meal } from "./components/Meal";
import { Recipes } from "./components/Recipes";

function App() {
  return (
    <div className="App">
      <Header />
      <Meal />
      <Area />
      <Category />
      <Fridge />
      <Info />
      <Recipes />
      <Footer />
    </div>
  );
}

export default App;
