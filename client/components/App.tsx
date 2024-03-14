import { useState } from 'react'
import { getRandomQuote } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'
import FbMom from './FbMom.tsx'

const App = () => {
  const [mode, setMode] = useState('zen')

  const {
    data: zenQuote,
    isError,
    isPending,
  } = useQuery({ queryKey: ['zenQuote'], queryFn: getRandomQuote })


//   if (isPending) return <p>Loading...</p>

  return (
    <>
      {mode === 'fbMom' ? 
      <>
      <FbMom setMode={setMode}/>
    </>
    :
    <>
    <h1 className="text-3xl font-bold underline">{zenQuote[0].q}</h1>
    <button onClick={() => setMode('fbMom')}>wine time 🍷</button>
    </>
    }

{isError && (
      <p style={{ color: 'red' }}>
        There was an error retrieving the greeting.
      </p>
    )}

    </>
  )
}

export default App
