import React from 'react'
import Catagorycard from '../Components/herosection/Catagorycard/Catagorycard'

const Home = () => {
  return (
    <>

      <section id="categories" className='main'>
        <div className="inner_category_bx container">
        <Catagorycard />
        <Catagorycard />
        <Catagorycard />

        </div>
      </section >
    </>
  )
}

export default Home