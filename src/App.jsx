import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainProvider } from "./contexts/MainContext";
import Movies from "./pages/Movies";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {

  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Movies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainProvider>

  )
}

export default App
