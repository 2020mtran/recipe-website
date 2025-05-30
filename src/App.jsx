import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './homepage-components/Background'
import Homepage from './pages/Homepage'
import ScrollToTop from './homepage-components/ScrollToTop';
import VietnameseRecipes from './pages/VietnameseRecipes'
import RecipePage from './pages/RecipePage'
import HealthyRecipes from './pages/HealthyRecipes';
import InternationalRecipes from './pages/InternationalRecipes';
import Disclosure from './pages/Disclosure';
import PrivacyPolicy from './pages/PrivacyPolicy';


function App() {

  return (
    <>
      <Background>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pages/vietnamese-recipes" element={<VietnameseRecipes />} />
          <Route path="/pages/vietnamese-recipes/:id" element={(<RecipePage />)} />
          <Route path="/pages/healthy-recipes" element={<HealthyRecipes />} />
          <Route path="/pages/healthy-recipes/:id" element={(<RecipePage />)} />
          <Route path="/pages/international-recipes" element={<InternationalRecipes />} />
          <Route path="/pages/international-recipes/:id" element={(<RecipePage />)} />
          <Route path="/pages/disclosure" element={(<Disclosure />)}></Route>
          <Route path="/pages/privacy-policy" element={(<PrivacyPolicy />)}></Route>
        </Routes>
      </Background>
    </>
  )
}

export default App
