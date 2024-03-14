import { useState } from 'react'
import FbMom from './FbMom.tsx'
import Zen from './Zen.tsx'

const App = () => {
  const [mode, setMode] = useState('zen')



//   if (isPending) return <p>Loading...</p>

  return (
    <>
      {mode === 'fbMom' ? 
      <>
      <FbMom setMode={setMode}/>
    </>
    :
    <>
      <Zen setMode={setMode}/>
    </>
    }
    </>
  )
}

export default App
