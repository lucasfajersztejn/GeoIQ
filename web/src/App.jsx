import { useState } from 'react'
import { Link, Route, Router, Routes } from 'react-router'
import Home from './pages/Home'
import Results from './pages/Results'
import Costumer from './pages/Costumer'
import Information from './pages/Information'
import Devices from './pages/Devices'
import { SurveyProvider } from './context/Survey.context'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='flex flex-col items-center h-svh bg-gray-600'>
        <header className='h-[33%] w-full'>

        </header>

        <main className='flex justify-center items-center gap-5 h-[33%] w-[85%]'>
          <SurveyProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results" element={<Results />} />
              <Route path="/costumer" element={<Costumer />} />
              <Route path="/information" element={<Information />} />
              <Route path="/devices" element={<Devices />} />
            </Routes>
          </SurveyProvider>
        </main>

        {/* <footer className='h-[33%] w-full'>
          <div>Something</div>
        </footer> */}
      </section>
    </>
  )
}

export default App
