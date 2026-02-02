import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainProvider } from "./contexts/MainContext";
import SearchBar from "./pages/SearchBar";

function App() {

  return (
    <MainProvider>
      <BrowserRouter>

      </BrowserRouter>
    </MainProvider>

  )
}

export default App
