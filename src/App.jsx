import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './homepage-components/Background'
import Homepage from './pages/Homepage'
import VietnameseRecipes from './pages/VietnameseRecipes'
import RecipePage from './pages/RecipePage'
import HealthyRecipes from './pages/HealthyRecipes';
import InternationalRecipes from './pages/InternationalRecipes';


function App() {

  return (
    <>
      <Background>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pages/vietnamese-recipes" element={<VietnameseRecipes />} />
          <Route path="/pages/vietnamese-recipes/:id" element={(<RecipePage />)} />
          <Route path="/pages/healthy-recipes" element={<HealthyRecipes />} />
          <Route path="/pages/healthy-recipes/:id" element={(<RecipePage />)} />
          <Route path="/pages/international-recipes" element={<InternationalRecipes />} />
          <Route path="/pages/international-recipes/:id" element={(<RecipePage />)} />
        </Routes>
      </Background>
    </>
  )
}

export default App
