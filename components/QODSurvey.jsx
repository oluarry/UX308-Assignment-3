import React from 'react';

// <DaysLedt> is:
//  - Lazy-loaded
//  - Loaded and rendered only in the browser
export default function(props) {
    const [Component, setComponent] = React.useState(() => Loading)
  
    // is loaded and rendererd only in the browser.
    React.useEffect(() => {
      setComponent(() => React.lazy(() => import('./QOD.jsx')))
    }, [])
  
    return (
      <React.Suspense fallback={<Loading />}>
        <Component model={props.model} /> 
      </React.Suspense>
    )
  }
  
  function Loading() {
    return <span></span>
  }