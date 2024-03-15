import { useState } from 'react'
import FbMom from './FbMom.tsx'
import Zen from './Zen.tsx'
import React from 'react'
import SongPlayer from './Song&Ima.tsx'
import { getRandomQuote } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'

const App: React.FC = () => {
  const [mode, setMode] = useState('zen')
  // const [showQuote, setShowQuote] = 

  const {
    data: zenQuote,
    isError,
    isPending,
  } = useQuery({ queryKey: ['zenQuote'], queryFn: getRandomQuote })

if (zenQuote === undefined) {
  return <p>loading...</p>
}
  return (
    <>
      {mode === 'fbMom' ? 
      <>
      <FbMom setMode={setMode}/>
    </>
    :
    <>
      <div className="App">
        <SongPlayer />
        <div id="SongAndImage">
        </div>
        <h1 className="text-3xl font-bold underline">{zenQuote[0].q}</h1>
        <button onClick={() => setMode('fbMom')}>wine time 🍷</button>
      </div>
    </>}
    </>
  )

}

export default App
