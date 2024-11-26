import { useState } from 'react'
import { Link } from 'react-router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='flex flex-col h-svh'>
        <header className='bg-emerald-400 h-72'>

        </header>

        <main className='bg-blue-600 h-48 flex justify-center items-center gap-5'>
          <div className='border-cyan-400 border-4'>Grabar encuesta</div>
          <div className='border-cyan-400 border-4'>Seguimiento de encuestas</div>
        </main>

        <footer className='bg-red-500 h-72'>

        </footer>
      </section>
    </>
  )
}

export default App
