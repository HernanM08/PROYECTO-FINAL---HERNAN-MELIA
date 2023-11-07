import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./Pages/Index"
import Historial from "./Pages/Historial"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/historial" element={<Historial />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
