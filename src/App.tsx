
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokeHome from "./routes/PokeHome";
import PokeWorld from "./routes/PokeHome/PokeWorld";


function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<PokeHome />}>
          <Route index element={<PokeWorld />}/>
          <Route path="/world" element={<PokeWorld /> } /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
