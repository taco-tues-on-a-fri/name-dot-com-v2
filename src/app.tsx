import React, { FC, lazy } from 'react'
import 'styles.css'
import '@/public/reset.css'
import '@/public/colors.css'
import '@/public/typography.css'

const LazyComponent = lazy(() => import('./components/Lazy/Lazy'))

const App: FC = () => {
  return (
    <div>
      <React.Suspense fallback={<h1>Loading</h1>}>
        <LazyComponent />
        <p>Rest css is working</p>
        <span className="font-size--default">Colors css is working</span>
      </React.Suspense>
    </div>
  )
}

export default App