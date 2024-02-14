import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import Container from 'react-bootstrap/esm/Container'

export const Customelayout = ({children}) => {
  return (
    <div className='bodycolor'>
         <Header />

<main style={{ marginTop: '80vh' }} >
    {children}
</main>

<Footer />

    </div>
  )
}
