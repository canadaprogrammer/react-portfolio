import './index.scss'
import Logo from '../../../assets/images/logo.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'

const Initial = () => {
  const bgRef = useRef()
  const outlineInitialRef = useRef()
  const solidInitialRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineInitialRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidInitialRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])
  return (
    <div className="initial-container" ref-={bgRef}>
      <img
        className="solid-initial"
        ref={solidInitialRef}
        src={Logo}
        alt="initial"
      />
      <svg>
        <g className='="svg-container'>
          <path ref={outlineInitialRef}></path>
        </g>
      </svg>
    </div>
  )
}

export default Initial
