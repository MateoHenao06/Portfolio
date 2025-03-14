import { Navbar } from "../Navbar/Navbar"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
    <footer className='w-full flex justify-around items-center flex-row gap-100 bg-gray-800 text-white p-5 mt-20 rounded-2xl'>
      <Navbar>
        <ul className="flex flex-row gap-7">
          <li>
            <a href="https://github.com/MateoHenao06"><FaGithub className="h-8 w-8" /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mateo-henao-b903b02b9"><FaLinkedin className="h-8 w-8" /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/mateo_07pp/?utm_source=qr&r=nametag"><FaInstagram className="h-8 w-8" /></a>
          </li>
          <li>
            <a href="https://wa.me/573135144507"><FaWhatsapp className="h-8 w-8" /></a>
          </li>
        </ul>
      </Navbar>
    </footer>
    </>
  )
}
