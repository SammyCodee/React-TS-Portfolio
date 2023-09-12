/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Main } from 'pages/main'
import { ChapterOne } from 'pages/advance-concepts/chapter-1'
import { Login } from 'pages/login'

const RootRoute = () => {
  return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/main' element={<Main />} />
            <Route path='/chapterOne' element={<ChapterOne />} />
        </Routes>
  )
}

export default RootRoute
