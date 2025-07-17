import Arrivals from "./components/arrivals/Arrivals.jsx";
import Brands from "./components/brands/Brands.jsx";
import Header from "./components/header/Header.jsx";
import Promo from "./components/promo/Promo.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Promo /> */}
      <Brands />
      <Arrivals />
      {/* Other components can be added here */}
    </div>
  );
}

export default App;
