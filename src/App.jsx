import { useState } from 'react'
import './App.css'
import Buttons from './components/buttons'
import Runs from './components/Runs'

function App() {
  const [runs, setRuns] = useState(0)
  const [singles, setSingles] = useState(0)
  const [fours, setFours] = useState(0)
  const [sixes, setSixes] = useState(0)
  return (
    <div className='w-11/12 mx-auto flex flex-col items-center text-center justify-center min-h-screen gap-8 shadow-lg p-10'>
      <h2 className='font-bold text-2xl'>Counter App</h2>
      <Runs run={runs} singles={singles} fours={fours} sixes={sixes} />

      {
        runs >= 100 ? <p className='font-bold text-2xl text-green-500'>Congratulations! You have reached 100 runs!</p> : runs >= 50 ? <p className='font-bold text-2xl text-yellow-500'>Great! You have reached 50 runs!</p> : ''
      }

      <Buttons
        runs={runs}
        setRuns={setRuns}
        singles={singles}
        setSingles={setSingles}
        fours={fours}
        setFours={setFours}
        sixes={sixes}
        setSixes={setSixes} />
    </div>
  )
}

export default App
