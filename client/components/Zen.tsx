import { getRandomQuote } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'
import './Song&Ima.js'

function Zen({ setMode }) {

    const {
        data: zenQuote,
        isError,
        isPending,
      } = useQuery({ queryKey: ['zenQuote'], queryFn: getRandomQuote })

    return (
      <>
<h1 className="text-3xl font-bold underline">{zenQuote[0].q}</h1>
    <button onClick={() => setMode('fbMom')}>wine time 🍷</button>
    {/* <script src="../index.tsx" type="module"></script> */}
    <div>
      <button id="playButton">⏸️</button>
      <button id="nextButton">⏭️</button>
      <audio id="audioPlayer">
        <source src="https://audio.jukehost.co.uk/Sa3fJ2syKJVdIjHObgNLMy5BvCvtYDiI" type="audio/mpeg" />
      </audio>
    </div>
    {/* <script src="/Song&Ima.ts"></script> */}
    {isError && (       
      <p style={{ color: 'red' }}>
        There was an error retrieving the greeting.
      </p>
    )}
      </>
    )
  }
  
  export default Zen
  