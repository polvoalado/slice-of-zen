function fbMom({ setMode }) {

  return (
    <>
    <div className='bg-blue-500 py-5'>
        <h2 className="pl-5 font-bold">ZenBook</h2>
      </div>
    <div className='grid grid-cols-4 pt-5'>
      <div className='pl-5'>
        <p>👱‍♀️ Jennifer Mom</p>
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
    <img className='w-max col-span-2' src="https://zenquotes.io/api/image" /> 
    <div className='pr-5 w-15'>
        <p>Contact</p>
        <p>🤵 David</p>
        <p>🧑‍🚀 Jatin</p>
        <p>👩‍💻 Lucy</p>
        <p>🤦‍♀️ Gaby</p>
        <p>🧛 Gerard</p>
        <p>🧘 John</p>
        <p>🧙‍♂️ Joseph</p>
        <p>💂‍♀️ Shrena</p>
      </div>
    <button onClick={() => setMode('zen')}>zen out 🪷</button>
    </div>
    </>
  )
}

export default fbMom
