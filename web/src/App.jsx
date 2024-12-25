import { useState } from 'react'
import { Link, Route, Router, Routes } from 'react-router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='flex flex-col h-svh'>
        <header className='bg-emerald-400 h-72'>

        </header>

        <main className='bg-blue-600 h-48 flex justify-center items-center gap-5'>
          <Router>
            <Routes>
              <Route path="/" element={<DevicesSold />} />
              <Route path="/people" element={<PeopleAttended />} />
              <Route path="/summary" element={<Summary />} />
            </Routes>
          </Router>
        </main>

        <footer className='bg-red-500 h-72'>

        </footer>
      </section>
    </>
  )
}

export default App
