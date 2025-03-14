import foto from '../../assets/images/hola.jpg'

export const Main = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 mt-10 max-w-screen-lg mx-auto px-4">
  {/* Imagen responsiva */}
  <img className="w-full max-w-xs md:max-w-sm rounded-2xl" src={foto} alt="Foto de Mateo Henao Lizcano" />

  {/* Texto descriptivo responsivo */}
  <p className="text-white w-full text-justify md:w-2/3 md:text-left">
    Soy Mateo Henao Lizcano, un aprendiz del SENA que está cursando un tecnólogo en Análisis y Desarrollo de Software. 
    Uno de mis hobbies es jugar voleibol. Me gusta lo que estudio, ya que desde que comencé el técnico en Análisis y 
    Desarrollo de Software, nació una pasión por esta gran profesión. También disfruto resolver problemas y encontrar 
    soluciones, y no me rindo fácilmente ante los desafíos.  

    Profesionalmente, me interesa el desarrollo backend, ya que esta rama me ha llamado mucho la atención porque da 
    la funcionalidad y lógica a los aplicativos. Mi nivel de inglés es B1, y aunque no soy experto en lenguajes, 
    aprendo muy rápido.
  </p>
</div>

  )
}


