import React from 'react'
import { NavBar } from './components/navBar/NavBar'
import { SocialNetworks } from './components/socialNetworks/SocialNetworks'
import { Footer } from './components/footer/Footer'
import { Counter } from './components/counter/Counter'

export const App = () => {
  return (
    <>
        <NavBar />
        <SocialNetworks />
        <Counter initialValue={100} increment={5} decrement={5}/>
        <Counter initialValue={0} increment={10} decrement={10}/>
        <Footer />
    </>
  )
}
