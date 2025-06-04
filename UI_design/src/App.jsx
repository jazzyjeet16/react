import { useState } from 'react'
import styles from'./style.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-700 w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            navbar
          </div>
        </div>
        <div className={`bg-black ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            hero
          </div>
        </div>

        <div className={`bg-black  ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            Stats
            business
            deals
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
