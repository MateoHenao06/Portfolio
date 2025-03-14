import { Navbar } from "../Navbar/Navbar"
import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar"

export const Header = () => {

  return (
    <>
        <header className='bg-slate-800 w-full h-auto  flex flex-row flex-wrap justify-around items-center p-4 text-white'>
          <h1 className='text-xl font-bold text-white'>Portfolio</h1>
          <Navbar>
            <ul className="flex flex-row gap-3 ">
              <ItemNavbar route = '/' content = 'Inicio'/>
              <ItemNavbar route = '/SocialSkills' content = 'Habilidades Sociales'/>
              <ItemNavbar route = '/TechnicalSkills' content = 'Habilidades Tecnicas'/>
              <ItemNavbar route = '/Studies' content = 'Estudios'/>
            </ul>
          </Navbar>
        </header>
    </>
  )
} 