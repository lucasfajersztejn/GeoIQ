import React from 'react'
import { Link } from 'react-router'
import ButtonBoxLink from '../components/Ui/ButtonBox/ButtonBoxLink'

const Home = () => {
  return (
    <>
      <ButtonBoxLink name='Nueva Encuesta' to='/costumer'/>
      <ButtonBoxLink name='GeoIQOS Realizados' to='/results'/>
    </>
  )
}

export default Home