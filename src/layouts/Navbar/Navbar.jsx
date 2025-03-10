

export const Navbar = () => {

    const styles={
        li:"hover:text-blue-500"
      }
    
      const {li} = styles

  return (
    <ul className="flex flex-row gap-3">
        <li>
            <a className = {li} href="">Inicio</a>
        </li>
        <li>   
            <a className = {li}  href="">Nivel De Ingles</a>
        </li>
        <li>   
            <a className = {li}  href="">Habilidades Sociales</a>
        </li>
        <li>   
            <a className = {li}  href="">Estudios</a>
        </li>
    </ul>
  )
}

