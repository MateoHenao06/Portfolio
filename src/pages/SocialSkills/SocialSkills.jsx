

export const SocialSkills = () => {
  const skills = [
    { icon: "💬", title: "Comunicación efectiva", description: "Expresar ideas con claridad y comprensión." },
    { icon: "🤝", title: "Trabajo en equipo", description: "Colaborar y contribuir al logro de objetivos comunes." },
    { icon: "🛡️", title: "Asertividad", description: "Expresar pensamientos y necesidades con respeto." },
    { icon: "😊", title: "Empatía", description: "Comprender y conectar con los sentimientos de los demás." },
    { icon: "⚖️", title: "Resolución de conflictos", description: "Manejar desacuerdos de manera constructiva." },
    { icon: "🎯", title: "Capacidad de persuasión", description: "Influir positivamente con argumentos sólidos." },
    { icon: "🔄", title: "Adaptabilidad", description: "Ajustarse a diferentes situaciones y personas." },
    { icon: "🧠", title: "Inteligencia emocional", description: "Gestionar las emociones propias y comprender las ajenas." },
    { icon: "👀", title: "Generar confianza", description: "Ser honesto, coherente y confiable." },
  ];
  return (
    <div className="w-3/4 mx-auto p-9 mt-4">
    <h2 className="text-2xl font-bold text-center mb-4 text-white">🌟 Habilidades Sociales</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 bg-white shadow-md rounded-xl transition-transform duration-200 hover:scale-105 hover:shadow-lg"
        >
          <div className="text-3xl mb-1">{skill.icon}</div>
          <h3 className="text-sm font-semibold text-center text-black">{skill.title}</h3>
          <p className="text-xs text-gray-600 text-center mt-1">{skill.description}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

