import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((data, idx) => {
          return (
            <div className={'image-box ' + data.category} key={idx}>
              <img
                src={data.cover}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <div className="title">{data.title}</div>
                <p className="description">{data.description}</p>
                <button className="btn" onClick={() => window.open(data.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
