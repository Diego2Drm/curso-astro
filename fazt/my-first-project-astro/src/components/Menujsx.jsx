import React, { useState } from 'react'

function Menujsx() {
  const [temaActivo, setTemaActivo] = useState('temaA');

  const Temas = [
    { title: 'temaA', text: 'Contenido dinámico del Tema A prueba' },
    { title: 'temaB', text: 'Contenido dinámico del Tema B ejemplo' },
    { title: 'temaC', text: 'Contenido dinámico del Tema C otro ejemplo' },
  ]

  return (
    <>
      <button onClick={() => setTemaActivo('temaA')}>Tema A</button>
      <button onClick={() => setTemaActivo('temaB')}>Tema B</button>
      <button onClick={() => setTemaActivo('temaC')}>Tema C</button>

      <div>
        {
          Temas.map((tema, i) =>
            <div key={i}>
              {tema.title === temaActivo && <p>{tema.text}</p>
              }
            </div>
          )
        }
      </div>
    </>
  )
}

export default Menujsx  