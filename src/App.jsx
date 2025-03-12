import { Routes, Route } from 'react-router-dom'
import { Header } from './layouts/Header/Header'
import { Main } from './layouts/Main/Main'
import { Footer } from './layouts/Footer/Footer'
import { EnglishLevel } from './pages/EnglishLevel/EnglishLevel'
import { SocialSkills } from './pages/SocialSkills/SocialSkills'
import { Studies } from './pages/Studies/Studies'

export function App() {
  

  return (
    <>
      <Header />      
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/EnglishLevel" element={<EnglishLevel />} />
        <Route path="/SocialSkills" element={<SocialSkills />} />
        <Route path="/Studies" element={<Studies />} />
      </Routes>
      <Footer/>
    </>
  )
}
