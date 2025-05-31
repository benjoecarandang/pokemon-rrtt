import { Routes, Route } from "react-router-dom";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import PokemonList from "./features/Pokemons/PokemonList";
import PokemonDetails from "./features/Pokemons/PokemonDetails";
import PokemonTCG from "./features/PokemonsTCG/PokemonTCG";
import Backdrop from "./components/ui/Backdrop";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white bg-opacity-90">
      <Backdrop />
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="/pokemon/trading-card-game" element={<PokemonTCG />} />
        <Route path="*" element={<h1>404 Not Found!</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
