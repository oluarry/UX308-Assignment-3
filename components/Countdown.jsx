import React from 'react';

// <DaysLedt> is:
//  - Lazy-loaded
//  - Loaded and rendered only in the browser
export default function() {
    const [Component, setComponent] = React.useState(() => Loading)
  
    // is loaded and rendererd only in the browser.
    React.useEffect(() => {
      setComponent(() => React.lazy(() => import('./DaysLeft.jsx')))
    }, [])
  
    return (
      <React.Suspense fallback={<Loading />}>
        <p className="w3-large w3-center"><Component /> days left</p>
      </React.Suspense>
    )
  }
  
  function Loading() {
    return <span></span>
  }