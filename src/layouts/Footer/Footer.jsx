import { Navbar } from "../Navbar/Navbar"

export const Footer = () => {
  return (
    <>
    <footer className='w-370 flex justify-around items-center flex-row gap-100 bg-gray-800 text-white p-5 mt-29 rounded-2xl'>
      <h1 className='text-xl font-bold'>Contactame</h1>
      <Navbar/>
    </footer>
    </>
  )
}
