

export const Studies = () => {
  const studies = [
    { icon: "🎓", title: "Bachillerato - INSTITUCION EDUCATIVA CIUDADELA DEL SUR", description: "Educación secundaria completa con enfoque académico general." },
    { icon: "💻", title: "Técnico en Análisis y Desarrollo de Software - SENA", description: "Formación en diseño, desarrollo y mantenimiento de software." },
    { icon: "🐍", title: "Fundamentos de Python 1 - Cisco", description: "Curso de introducción a Python con certificación de Cisco." },
  ];
  return (
    <div className="w-4/5 mx-auto p-8 mt-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">📚 Mis Estudios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-26">
        {studies.map((study, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-5xl mb-4">{study.icon}</div>
            <h3 className="text-xl font-semibold text-black">{study.title}</h3>
            <p className="text-sm text-gray-600 text-center mt-2">{study.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


