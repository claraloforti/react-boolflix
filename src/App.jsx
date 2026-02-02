import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainProvider } from "./contexts/MainContext";

function App() {

  return (
    <MainProvider>
      <BrowserRouter>
      </BrowserRouter>
    </MainProvider>

  )
}

export default App
