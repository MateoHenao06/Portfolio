import { Routes, Route } from 'react-router-dom'
import { Header } from './layouts/Header/Header'
import { Main } from './layouts/Main/Main'
import { Footer } from './layouts/Footer/Footer'
import { SocialSkills } from './pages/SocialSkills/SocialSkills'
import { Studies } from './pages/Studies/Studies'
import { TechnicalSkills } from './pages/TechnicalSkills/TechnicalSkills'

export function App() {
  

  return (
    <>
      <Header />      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/SocialSkills" element={<SocialSkills />} />
        <Route path="/TechnicalSkills" element={<TechnicalSkills />} />
        <Route path="/Studies" element={<Studies />} />
      </Routes>
      <Footer/>
    </>
  )
}
