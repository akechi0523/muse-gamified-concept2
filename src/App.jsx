import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/Home";
import '@fontsource-variable/plus-jakarta-sans';
export default function App() {
  return (
    <div style={{ fontFamily: 'Plus Jakarta Sans Variable, sans-serif' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}