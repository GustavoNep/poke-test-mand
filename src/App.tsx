
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokeHome from "./routes/PokeHome";


function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<PokeHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
