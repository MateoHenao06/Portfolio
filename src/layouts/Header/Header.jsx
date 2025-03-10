import { Navbar } from "../Navbar/Navbar"

export const Header = () => {

  return (
    <>
        <header className='w-370 flex justify-around items-center flex-row gap-130 bg-gray-800 text-white p-5 mt-2 rounded-2xl'>
          <h1 className='text-xl font-bold'>Mateo Henao Lizcano</h1>
          <Navbar/>
        </header>
    </>
  )
}