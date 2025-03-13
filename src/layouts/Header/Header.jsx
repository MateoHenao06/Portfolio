import { Navbar } from "../Navbar/Navbar"
import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar"

export const Header = () => {

  return (
    <>
        <header className='w-full ml-[1vw] flex justify-around items-center flex-row gap-130 bg-gray-800 text-white p-5 mt-2 rounded-2xl'>
          <h1 className='text-xl font-bold'>Portfolio</h1>
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