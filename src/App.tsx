/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './App.css'
import React, { Suspense } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useAppDispatch, useAppSelector } from 'feature/redux/hooks'
import { RootRoute } from 'routes'

// const Login = React.lazy(async () =>
//   await import('pages/login').then(({ Login }) => ({ default: Login }))
// )

function App () {
  // const isSuccessLogin = useAppSelector((state) => state.user.isSuccess)
  return (
        // <Suspense fallback={<div>Loading...</div>}>
        //     <div className="App">{isSuccessLogin ? <RootRoute /> : <Login />}</div>
        // </Suspense>
        <RootRoute />
  )
}

export default App
