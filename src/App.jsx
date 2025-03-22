import React, { lazy, Suspense } from 'react'


const GueueBlue = lazy(() => import('./pages/GueueBlue'))

const App = () => {
  return (
    <div>
      <div className="heading" >Because ‘good enough’ isn’t a design trend.</div>
      <Suspense fallback={<div>Loading...</div>}>
      <GueueBlue/>
      </Suspense>
    </div>
  )
}

export default App