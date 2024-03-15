import { useState } from 'react'
import FbMom from './FbMom.tsx'
import Zen from './Zen.tsx'
import React from 'react'
import SongPlayer from './Song&Ima.tsx'

// const App = () => {
//   const [mode, setMode] = useState('zen')



// //   if (isPending) return <p>Loading...</p>

//   return (
//     <>
//       {mode === 'fbMom' ? 
//       <>
//       <FbMom setMode={setMode}/>
//     </>
//     :
//     <>
//       <Zen setMode={setMode}/>
//       <div className="SongAndImage">
//           </div>
//     </>
    
//     }
//     </>
//   )
  
// }

const App: React.FC = () => {
  return (
    <div className="App">
      <SongPlayer />
      <div id="SongAndImage"></div>
    </div>
  )
}

export default App
