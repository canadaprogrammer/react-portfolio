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
        delay: 20,
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
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="294.666px"
        height="308.667px"
        viewBox="0 0 294.666 308.667"
      >
        <g className="svg-container">
          <path
            fill="none"
            stroke="#57C3B8"
            ref={outlineInitialRef}
            d="M37.313,283.882c-19.396-10.288-33.792-27.059-33.792-51.826
	c0-30.45,23.955-52.78,56.029-52.78c9.689,0,19.102,3.329,26.293,9.149l1.066,0.544c12.624,5.636,22.024,17.339,22.024,32.441
	c0,12.586-6.496,21.112-6.496,25.578c0,1.028,0.006,0.642-0.01,1.454l-1.079-0.037c-0.235-0.761-0.002-1.975,0.068-2.989
	c0.273-3.918,6.333-12.096,6.333-23.166c0-18.167-7.288-25.593-17.285-30.55l-3.533-2.36c7.264,6.342,12,15.35,12,26.07
	c0,12.586-6.496,21.112-6.496,25.578c0,6.09,5.684,9.338,11.368,9.338c38.57,1.624,41.007-153.876,41.007-182.702
	c0-3.604-0.437-6.35-1.21-8.437l-1.061-0.875c-4.563-6.229-11.261-4.235-18-4.438l-0.577,0.007
	c3.568,7.283,11.548,4.788,18.635,4.859l0.528-0.671c-3.538-7.279-12.009-4.909-19.232-5.135l-0.734-0.033
	c-6.162-0.361-11.235-2.971-11.235-15.729c0-21.924,17.458-33.699,96.629-33.699c38.895,0,56.451,5.661,64.339,12.135l1.398,1.223
	l1.361,0.443c15.17,6.79,13.547,16.213,13.547,20.619c0,28.014-28.827,2.842-32.887,38.164l-14.616,128.704
	c-8.526,75.923-90.133,98.253-137.636,98.253c-20.898,0-45.114-5.145-63.24-16.951L37.313,283.882l4.021,2.008
	c16.37,7.694,35.655,11.127,52.727,11.127c47.503,0,129.109-22.33,137.636-98.253L246.313,70.06
	c4.06-35.322,32.887-10.15,32.887-38.164c0-3.169,0.84-8.935-4.335-14.449"
          />
        </g>
      </svg>
    </div>
  )
}

export default Initial
