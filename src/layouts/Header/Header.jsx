import { Navbar } from "../Navbar/Navbar"
import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar"

export const Header = () => {

  return (
    <>
        <header className='w-370 flex justify-around items-center flex-row gap-130 bg-gray-800 text-white p-5 mt-2 rounded-2xl'>
          <h1 className='text-xl font-bold'>Mateo Henao Lizcano</h1>
          <Navbar>
            <ul className="flex flex-row gap-3">
              <itemNavbar route = '/Main' content = 'Inicio'/>
              <ItemNavbar route = '/EnglishLevel' content = 'Nivel de Ingles'/>
              <ItemNavbar route = '/SocialSkills' content = 'Habilidades Sociales'/>
              <ItemNavbar route = '/Studies' content = 'Estudios'/>
            </ul>
          </Navbar>
        </header>
    </>
  )
}