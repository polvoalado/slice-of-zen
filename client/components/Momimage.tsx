import { useState } from "react"


function Momimage()  {
const [zenImg, setZenImg] = useState('https://zenquotes.io/api/image')


  const handleClick = () => {
    setZenImg('')
    setTimeout(() => {setZenImg('https://zenquotes.io/api/image')}, 500)
    // setZenImg('https://zenquotes.io/api/image')
  }
  
  return (
    <>
      <img className='w-max col-span-2' src={zenImg} />
      <button onClick={handleClick}>refresh</button>
    </>
  )

}

export default Momimage