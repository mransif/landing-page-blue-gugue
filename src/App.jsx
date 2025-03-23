import React, { lazy, Suspense } from 'react'
import Hero1 from './pages/Hero1'


const GueueBlue = lazy(() => import('./pages/GueueBlue'))

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <GueueBlue />
      </Suspense>
      <div className='upper-part'>
        <Hero1/>
      </div>
    </div>
  )
}

export default App