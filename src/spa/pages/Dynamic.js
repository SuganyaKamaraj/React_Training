import React, { Suspense } from 'react'
const PaymentComponent=React.lazy(() => import("../payment/Payment") )

const Dynamic =() => {
  return (
    <div><h1> I am Lazy Loaded component</h1>
    <Suspense fallback={<div> Loading...pls wait </div>}> 
    <PaymentComponent/>
    </Suspense>
    </div>
  )
}

export default Dynamic