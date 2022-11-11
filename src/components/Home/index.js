import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Initial from './Initial'
import InitialJ from '../../assets/images/initial-j-3.png'
import InitialP from '../../assets/images/initial-p-3.png'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const greetArray1 = ['H', 'i', ',']
  const greetArray2 = ['I', "'", 'm']
  const nameArray1 = ['u', 'n', 'g', 'j', 'i', 'n']
  const nameArray2 = ['a', 'r', 'k']
  const jobArray = [
    'W',
    'e',
    'b',
    '',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={greetArray1}
              idx={9}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={greetArray2}
              idx={12}
            />
            <img src={InitialJ} alt="initial j" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray1}
              idx={15}
            />
            <img src={InitialP} alt="initial p" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray2}
              idx={21}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={27}
            />
          </h1>
          <h2>Full-Stack Developer</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <Initial />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
