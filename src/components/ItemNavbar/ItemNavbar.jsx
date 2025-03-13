import { NavLink } from "react-router-dom"


export const ItemNavbar = ({route,content}) => {
  return (
    <>
      <li className='hover:text-blue-500'>
       <NavLink to={route}>{content}</NavLink> 
      </li>
    </>
  ) 
}