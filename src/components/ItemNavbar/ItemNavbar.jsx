import { NavLink } from "react-router-dom"


export const ItemNavbar = ({route,content}) => {
  return (
    <>
      <li className=''>
       <NavLink to={route}>{content}</NavLink> 
      </li>
    </>
  ) 
}