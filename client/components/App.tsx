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
        <h1 className="animate-pulse text-center text-3xl font-bold pm-10 bg-white opacity-70">{zenQuote[0].q}</h1>
        <button className="bg-slate-400 rounded-2xl pt-2 border-black border-2" onClick={() => setMode('fbMom')}>wine time 🍷</button>
        <div className="statue">
          <img className='justify-self-center z-0' src="https://s9.gifyu.com/images/SUCzB.gif" />
        </div>

      </div>
    </>}
    </>
  )

}

export default App
