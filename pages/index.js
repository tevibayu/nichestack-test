import { useEffect } from 'react'
import Menu from 'components/common/layout/Menu'

export default function Home() {
  
  useEffect(() => {
    document.title = 'Home'
  })

  return (
    <div className='container'>
      <Menu />
      <h1 className='centered'>Homepage</h1>
      <div style={{ padding: '0 15px' }}>
        <h2 className='bold'>Hi dev!</h2>
        <p className='subtitle'>
          NicheStack Frontend Test 
        </p>
        <br/>
        <h2 className='bold'>Click Books Menu!</h2>
      </div>
    </div>
  )
}