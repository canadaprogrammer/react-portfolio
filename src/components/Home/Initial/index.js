import './index.scss'
import InitialJ from '../../../assets/images/initial-j-3.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

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
    <div className="initial-container" ref={bgRef}>
      <img
        className="solid-initial"
        ref={solidInitialRef}
        src={InitialJ}
        alt="Initial J"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="400px"
        height="408.2px"
        version="1.0"
        viewBox="0 0 400 408.2"
      >
        <g className="svg-container" fill="none">
          <path
            ref={outlineInitialRef}
            d="M142 57C144.891 72.5718 142.726 89.3274 142.039 105C140.643 136.879 138.179 168.734 131.207 200C127.51 216.579 121.764 238.804 104 245C105.538 227.493 115.231 214.187 104.034 197C82.0647 163.278 25.746 168.048 8.27006 203C-8.64495 236.83 12.4369 267.458 41 284.796C79.1753 307.968 138.864 303.675 178 284.742C200.286 273.959 219.92 259.361 231.68 237C242.102 217.184 242.833 193.791 245.166 172C248.309 142.647 252.021 113.354 255.166 84C256.084 75.4304 256.613 64.7167 263.213 58.3295C268.56 53.1548 275.807 53.958 281.985 50.6968C289.615 46.6684 289.756 36.5299 288.815 29C286.928 13.8944 266.006 5.65991 253 3.00385C235.134 -0.644714 217.133 0 199 0C177.058 0 154.1 -0.281555 133 6.67053C125.08 9.27988 116.834 13.0515 113.05 21C103.386 41.2998 120.457 62.1289 142 57z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Initial
