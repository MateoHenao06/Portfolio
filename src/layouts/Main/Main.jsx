import foto from '../../assets/images/hola.jpg'

export const Main = () => {
  return (
    <div className='flex flex-row items-center gap-50 mt-10'>
      <img className='w-80' src={foto} alt="" />
      <p className='text-white w-110'>Soy Mateo Henao Lizcano un aprendiz del Sena que está cursando un tecnólogo en análisis y desarrollo de software con conocimientos básicos en lenguajes de programación como lo son C#, conocimientos intermedios en lenguajes de programación como JavaScript, CSS, Java,  Python, PHP, MySQL, la tecnología que manejo es desarrollo web y herramientas como Visual Studio Code, Visual Studio, Eclipse, uno de mis hobbies es jugar voleibol, me gusta lo que estoy estudiando ya que desde que comencé el técnico en análisis y desarrollo de software, nació una pasión por esta gran profesión, también me gusta mucho de resolver problemas, encontrarle una solución a todo lo que la puede tener y no me gusta rendirme fácilmente ante un problema, mis preferencias o intereses a nivel profesional es ser backend ya que esta rama en el desarrollo de software me ha llamado muchísimo la atención porque es lo que le da la funcionalidad y lógica a todas los aplicativos que se implementan.</p>
    </div>
  )
}
