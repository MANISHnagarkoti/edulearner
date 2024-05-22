import React from 'react'
import Herosection from '../Home component/Herosection'
import Trust from '../Home component/Trust'
import Works from '../Home component/Works'
import Crisis from '../Home component/Crisis'
import Approach from '../Home component/Approach'
import Impact from '../Home component/Impact'
import Platform from '../Home component/Platform'
import Supporter from '../Home component/Supporter'
import Learn from '../Home component/Learn'

const Home = () => {
  return (
    <>
      <Herosection />
      <Trust />
      <Works />
      <Crisis />
      <Learn/>
      <Approach />
      <Impact />
      <Platform/>
      <Supporter/>
    </>
  )
}

export default Home