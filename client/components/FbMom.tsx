import Momimage from "./Momimage.tsx"
import { useState } from "react"

function fbMom({ setMode }) {

  const [momImageNum, setMomImageNum] = useState(1)

  const handleRefresh = () => {
    setMomImageNum(Math.random())
  }


    

  return (
    <>
    <div className='grid grid-cols-3 bg-blue-500 py-5'>
        <h2 className="pl-5 pt-2 font-bold">ZenBook</h2>
        <button className="hover:animate-bounce ml-4 justify-self-center mt-auto py-2 w-40 rounded-2xl bg-blue-400 border-2 border-white hover:opacity-75" onClick={() => setMode('zen')}>zen out 🪷</button>
      </div>
    <div className='grid grid-cols-4 pt-5 mb-auto'>
      <div className='pl-5'>
        <p className="font-bold">👱‍♀️ Jennifer Mom</p>
        <p>🎉 Friends</p>
        <p>🕒 Memories</p>
        <p>🔖 Saved</p>
        <p>📚 Groups</p>
        <p>📽️ Video</p>
        <p>💹 Marketplace</p>
        <p>📰 Feeds</p>
        <p>📅 Events</p>
        <p>📊 Ads Manager</p>
        <p>♾️ Zen Quest</p>
        <p>🔻 See more</p>
      </div>
      <Momimage key={momImageNum} />
    <div className='pr-5 w-15'>
        <p className="font-bold">Contacts</p>
        <p>🤵 David</p>
        <p>🧑‍🚀 Jatin</p>
        <p>👩‍💻 Lucy</p>
        <p>🤦‍♀️ Gaby</p>
        <p>🧛 Gerard</p>
        <p>🧘 John</p>
        <p>🧙‍♂️ Joseph</p>
        <p>💂‍♀️ Shrena</p>
      </div>
      <button onClick={handleRefresh}>refresh</button>

      </div>
    </>
  )
}

export default fbMom
