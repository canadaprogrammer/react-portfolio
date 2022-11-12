# React - Portfolio

## Initialize

- Install packages

  - @emailjs/browser: implementing a contact form without a server
  - @fortawesome/free-brands-svg-icons, @fortawesome/free-solid-svg-icons, and @fortawesome/react-fontawesome
  - animate.css: a css library for animating the objects and fonts
  - gsap-trial: more advanced animations
  - loaders.css: loading style
  - react-leaflet: using leaflet map
  - react-loaders: easy to use the loaders inside of the react
  - react-router-dom: to navigate each page
  - sass

- Set up prettier

  - Create .prettierrc inside the root

    - ```json
      {
        "trailingComma": "es5",
        "tabWidth": 2,
        "semi": false,
        "singleQuote": true
      }
      ```

- Define Global Styles

  - Change App.css to App.scss in /src/App.js
  - Rename /src/App.css to /src/App.scss

    - ```scss
      $primary-color: #ffd700;

      @import 'animate.css';

      @import url('https://fonts.googleapis.com/css2?family=La+Belle+Aurore&family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&display=swap');

      input,
      textarea {
        font-family: 'Roboto', sans-serif;
      }
      ```

  - index.css

    - ```css
      html {
        font-size: 62.5%;
      }

      body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        color: #444;
        background: #022c43;
        overflow: hidden;
        display: block;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      ```

- Change logo and title
  - Remove logo and favicon from /public/
  - Add favicon.ico to /public/
  - Change the title and description on /public/index.html

## Create Routes

- Add BrowserRouter from react-router-dom to /src/index.js

  - ```js
    import { BrowserRouter } from 'react-router-dom'

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    )
    ```

- Create Layout component, /src/components/Layout/index.js and /src/components/Layout/index.scss

  - ```js
    import './index.scss'

    const Layout = () => {
      return <>Hellow</>
    }

    export default Layout
    ```

- Add Routes from react-router-dom to /src/App.js

  - ```js
    import './App.scss'
    import { Routes, Route } from 'react-router-dom'
    import Layout from './components/Layout'

    function App() {
      return (
        <>
          <Routes>
            <Route path="/" element={<Layout />} />
          </Routes>
        </>
      )
    }

    export default App
    ```

## Build Sidebar

- Create /src/default.scss

  - ```scss
    $purple: rgb(57, 0, 122);
    $purple-1: rgb(40, 0, 87);
    $purple-2: rgb(24, 0, 51);
    $blue-dark: rgb(0, 68, 179);
    $blue: rgb(0, 113, 211);
    $blue-light: rgb(0, 153, 221);
    $mint-blue: rgb(0, 190, 214);
    $mint: rgb(0, 226, 200);
    ```

- Create /src/components/Sidebar/index.js, and /src/components/Sidebar/index.scss

  - ```js
    import { Link, NavLink } from 'react-router-dom'
    import './index.scss'
    import Logo from '../../assets/images/logo.png'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import {
      faEnvelope,
      faHome,
      faUser,
    } from '@fortawesome/free-solid-svg-icons'
    import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

    const Sidebar = () => {
      return (
        <div className="nav-bar">
          <Link className="logo" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <nav>
            <NavLink end activeclassname="active" to="/">
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
              end
              activeclassname="active"
              className="about-link"
              to="/about"
            >
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
              end
              activeclassname="active"
              className="contact-link"
              to="/contact"
            >
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
          </nav>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/canadaprogrammer"
              >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/jungjin-park-b3a67b163/"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
              </a>
            </li>
          </ul>
        </div>
      )
    }

    export default Sidebar
    ```

  - ```scss
    @import '../../default.scss';

    .nav-bar {
      background: #181818;
      width: 60px;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 3;
      min-height: 500px;
      .logo {
        display: block;
        padding: 8px 0;
        img {
          display: block;
          margin: 8px auto;
          width: 50px;
          height: auto;
          &.sub-logo {
            width: 50px;
          }
        }
      }
      nav {
        display: block;
        text-align: center;
        position: absolute;
        height: auto;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        a {
          font-size: 22px;
          color: #4d4d4e;
          display: block;
          line-height: 51px;
          height: 51px;
          position: relative;
          text-decoration: none;
          i {
            transition: all 0.4s ease-in-out;
          }
          &:hover {
            color: $mint;
            svg {
              opacity: 0;
            }
            &::after {
              opacity: 1;
            }
          }
          &:after {
            content: '';
            font-size: 9px;
            letter-spacing: 2px;
            position: absolute;
            bottom: 0;
            display: block;
            width: 100%;
            text-align: center;
            opacity: 0;
            transition: all 0.4s ease-out;
          }
          &:first-child {
            &::after {
              content: 'HOME';
            }
          }
          &:nth-child(2) {
            &::after {
              content: 'ABOUT';
            }
          }
          &:last-child {
            &::after {
              content: 'CONTACT';
            }
          }
          &.active {
            svg {
              color: $mint;
            }
          }
        }
      }
      ul {
        position: absolute;
        bottom: 20px;
        width: 100%;
        display: block;
        padding: 0;
        list-style: none;
        text-align: center;
        margin: 0;
        li {
          a {
            padding: 7px 0;
            display: block;
            font-size: 15px;
            line-height: 16px;
            &:hover svg {
              color: $mint;
            }
          }
        }
      }
    }
    ```

- On /Layout/index.js

  - ```js
    import Sidebar from '../Sidebar'

    ...
      return <><Sidebar /></>
      ...
    ```

## Build Home Page

- On /src/components/Layout/index.js

  - ```js
    import { Outlet } from 'react-router-dom'
    import Sidebar from '../Sidebar'
    import './index.scss'

    const Layout = () => {
      return (
        <div className="App">
          <Sidebar />
          <div className="page">
            <Outlet />
          </div>
        </div>
      )
    }

    export default Layout
    ```

- On /src/components/Layout/index.scss

  - ```scss
    .page {
      width: 100%;
      height: 100%;
      position: absolute;
    }
    .container {
      width: 100%;
      will-change: contents;
      height: 90%;
      min-height: 566px;
      position: absolute;
      opacity: 0;
      top: 50%;
      transform: translateY(-50%);
      margin: 0 auto;
      z-index: 1;
      transform-style: preserve-3d;
      animation: fadeIn 1s forwards;
      animation-delay: 1s;
    }
    ```

- Create /src/components/Home/index.js and /src/components/Home/index.scss

  - ```js
    import { Link } from 'react-router-dom'
    import './index.scss'

    const Home = () => {
      return (
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              Hi, <br />
              I'm Jungjin Park <br />
              Web developer
            </h1>
            <h2>Full-Stack Developer</h2>
            <Link to="/contact" className="flat-button">
              Contact Me
            </Link>
          </div>
        </div>
      )
    }

    export default Home
    ```

  - ```scss
    @import '../../default.scss';

    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

    .home-page {
      .text-zone {
        position: absolute;
        left: 10%;
        top: 50%;
        transform: translateY(-50%);
        width: 40%;
        max-height: 90%;
      }
      h1 {
        color: #fff;
        font-size: 53px;
        margin: 0;
        font-family: 'Playfair Display', serif;
        font-weight: 400;
      }
      h2 {
        color: #8d8d8d;
        margin-top: 20px;
        font-weight: 400;
        font-size: 18px;
        font-family: sans-serif;
        letter-spacing: 3px;
        animation: fadeIn 1s 1.8s backwards;
      }
      .flat-button {
        color: $mint;
        font-size: 22px;
        font-weight: 400;
        font-family: sans-serif;
        text-decoration: none;
        padding: 10px 18px;
        border: 1px solid $mint;
        margin-top: 25px;
        float: left;
        animation: fadeIn 1s 1.8s backwards;
        white-space: nowrap;
        &:hover {
          background: $mint;
          color: $purple;
        }
      }
    }
    ```

- On /src/App.js

  - ```js
    ...
    import Home from './components/Home'

    ...
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
            ...
    ```

## Animated Letters

- Create /src/components/AnimatedLetters/index.js and /src/components/AnimatedLetters/index.scss

  - ```js
    import './index.scss'

    const AnimatedLetters = ({ letterClass, strArray, idx }) => {
      return (
        <span>
          {strArray.map((char, i) => (
            <span key={char + i} className={`${letterClass} _${i + idx}`}>
              {char}
            </span>
          ))}
        </span>
      )
    }

    export default AnimatedLetters
    ```

  - ```scss
    @import '../../default.scss';

    .text-animate {
      display: inline-block;
      opacity: 0;
      animation: bounceIn 1s 1s;
      animation-fill-mode: forwards;
      min-width: 10px;
    }
    .text-animate-hover {
      display: inline-block;
      animation-fill-mode: forwards;
      min-width: 10px;
      &:hover {
        animation: rubberBand 1s;
        color: $mint;
      }
    }
    @for $i from 1 through 39 {
      .text-animate._#{$i} {
        animation-delay: #{$i / 10}s;
      }
    }
    ```

- On /src/components/Home/index.js

  - ```js
    import { useEffect, useState } from 'react'
    import { Link } from 'react-router-dom'
    import AnimatedLetters from '../AnimatedLetters'
    import './index.scss'
    import Initial from './Initial'
    import InitialJ from '../../assets/images/initial-j-3.png'
    import InitialP from '../../assets/images/initial-p-3.png'

    const Home = () => {
      const [letterClass, setLetterClass] = useState('text-animate')
      const greetArray1 = ['H', 'i', ',']
      const greetArray2 = ['I', "'", 'm']
      const nameArray1 = ['u', 'n', 'g', 'j', 'i', 'n']
      const nameArray2 = ['a', 'r', 'k']
      const jobArray = ['W', 'e', 'b', '', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
      useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
      return (
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
        </div>
      )
    }

    export default Home
    ```

- On /src/components/Home/index.scss

  - ```scss
    @keyframes wiggle {
      0%,
      7% {
        transform: rotateZ(0);
      }
      15% {
        transform: rotateZ(-15deg);
      }
      20% {
        transform: rotateZ(10deg);
      }
      25% {
        transform: rotateZ(-10deg);
      }
      30% {
        transform: rotateZ(6deg);
      }
      35% {
        transform: rotateZ(-4deg);
      }
      40%,
      100% {
        transform: rotateZ(0);
      }
    }
    .home-page {
      h1 {
        img {
          margin-left: 2rem;
          width: 44px;
          height: auto;
          animation: wiggle 2s linear infinite;
          animation-delay: 1.4s;
        }
      }
    ```

## Animation with GSAP

- Create stroke svg from Adobe Illustrator
  - New > Click Type Tool (T) > Add Text
  - Change the size of text
  - Change the text color to transparent
  - Select > Select All (Ctrl + A)
  - Type > Create Outlines (Shift + Ctrl + O)
  - Move Component Path into one layer
  - Make multiple paths to one path
    - Click Scissors Tool (C)
    - Click Indicator Selected Art on Layers
    - To add anchor point, Alt + click
    - To cut a path, click two point and press Delete key twice
    - Click layer > layer menu > Release to Layers (Sequence)
    - Click Indicator Selected Art on Layers
    - Click Selection Tool (V)
    - For removing a path, Click the path and press Delete key
    - To connect paths
      - Click Pen Tool (P)
      - Click two Anchors
    - Remove useless layers
  - Select > All
  - File > Document Setup (Alt + Ctrl + P) > Edit Artboards
    - Resize the canvas
  - File > Save As > SVG
    - Click SVG Code

- Create /src/components/Home/Initial/index.js and /src/components/Home/Initial/index.scss

  - ```js
    import './index.scss'
    import InitialJ from '../../../assets/images/initial-j-3.png'
    import InitialP from '../../../assets/images/initial-p-3.png'
    import { useEffect, useRef } from 'react'
    import gsap from 'gsap-trial'
    import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

    const Initial = () => {
      const bgJRef = useRef()
      const bgPRef = useRef()
      const outlineInitialJRef = useRef()
      const solidInitialJRef = useRef()
      const outlineInitialPRef = useRef()
      const solidInitialPRef = useRef()

      useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
        gsap
          .timeline()
          .to(bgJRef.current, {
            duration: 1,
            opacity: 1,
          })
          .from(outlineInitialJRef.current, {
            drawSVG: 1,
            duration: 10,
          })
        gsap
          .timeline()
          .to(bgPRef.current, {
            duration: 1,
            opacity: 1,
          })
          .from(outlineInitialPRef.current, {
            drawSVG: 1,
            duration: 10,
          })
        gsap.fromTo(
          solidInitialJRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 10,
            duration: 4,
          }
        )
        gsap.fromTo(
          solidInitialPRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 10,
            duration: 4,
          }
        )
      }, [])
      return (
        <>
          <div className="initial-container first-container" ref={bgJRef}>
            <img
              className="solid-initial"
              ref={solidInitialJRef}
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
                  stroke="#00e2c8"
                  ref={outlineInitialJRef}
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
          <div className="initial-container second-container" ref={bgPRef}>
            <img
              className="solid-initial initial-p"
              ref={solidInitialPRef}
              src={InitialP}
              alt="Initial P"
            />
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="306.5px"
              height="308.5px"
              viewBox="0 0 306.5 308.5"
            >
              <g className="svg-container">
                <path
                  fill="none"
                  stroke="#00e2c8"
                  ref={outlineInitialPRef}
                  d="M44.047,48.496c-5.972-1.798-11.164-5.057-11.164-15.554c0-22.68,25.92-26.325,43.335-26.325
                  c9.72,0,21.87,0.405,33.21,0.81c11.745,0.81,22.275,1.215,29.16,1.215c10.53,0,21.061-0.405,31.994-1.215
                  c10.531-0.405,21.061-0.81,31.592-0.81c26.367,0,49.608,4.8,65.738,17.626l-80.787,30.07l-0.584-0.733
                  c-3.844-4.474-9.768-6.869-17.982-6.868c-10.125,0-10.531,10.125-14.176,36.045l-4.455,33.21
                  c-0.81,6.075-2.835,18.63-2.835,23.895c0,6.48,1.62,6.885,7.695,6.885c0.353,0,0.7-0.006,1.045-0.019l-0.237-0.783
                  c-0.001-0.141-0.002-0.283-0.002-0.43c0-5.265,2.024-17.82,2.834-23.895l4.455-33.21c3.645-25.92,4.051-36.045,14.176-36.045
                  c3.434,0,6.466,0.418,9.113,1.232l0.5,0.346c-2.647-0.813-5.68-1.232-9.113-1.232c-10.125,0-10.531,10.125-14.176,36.045
                  l-4.455,33.21c-0.81,6.075-2.834,18.63-2.834,23.895c0,0.146,0.001,0.289,0.002,0.43l0.323,0.409
                  c30.153-1.74,35.63-51.792,35.63-74.474c0-7.49-1.558-13.509-4.835-17.815l80.771-30.067l0.541,0.281
                  c19.553,10.997,31.748,30.529,31.748,62.512c0,53.459-36.045,108.539-129.601,108.539c-6.479,0-12.555-0.404-19.035-0.404
                  l-2.025,30.779c-1.813,12.916-0.551,20.159,2.208,24.504l-2.075-0.591c-5.408-4.25-10.161-3.665-8.995-25.214l2.625-34.25
                  c6.48,0,14.772-0.111,21.25-0.25c93.25-2,124.341-52.66,127.375-105.625c1.489-25.992-8.537-47.75-22.847-59.367l-0.772-0.638
                  c14.31,11.618,22.893,29.687,22.893,56.517c0,53.459-36.045,108.539-129.601,108.539c-6.479,0-12.555-0.404-19.035-0.404
                  l-2.025,30.779c-3.293,23.469,3.563,28.207,11.101,30.862l0.708,0.243c4.637,1.556,9.418,2.526,12.172,6.732l0.641,0.497
                  c5.707,1.909,10.703,4.55,10.703,15.455c0,20.655-24.705,27.944-88.289,27.944c-42.593,0-59.879-6.005-66.894-13.002l1.271,0.518
                  c10.14,4.213,27.589,7.199,57.624,7.199c63.584,0,88.289-7.289,88.289-27.944c0-4.264-0.764-7.264-2.035-9.451l-1-0.715
                  c1.271,2.188,2.035,5.188,2.035,9.451c0,20.655-24.705,27.944-88.289,27.944c-30.034,0-47.484-2.986-57.624-7.199l-1.303-0.566
                  c-12.758-5.8-12.758-13.674-12.758-19.369c0-24.705,21.465-6.479,29.16-32.805c10.53-36.045,25.515-136.889,25.515-173.744
                  c0-2.296-0.385-4.121-1.066-5.59l-0.135-0.28c-2.771-5.491-9.856-5.816-16.147-7.663l-0.053,0.093
                  c3.501,5.438,10.298,6.132,16.119,7.675"
                />
              </g>
            </svg>
          </div>
        </>
      )
    }

    export default Initial
    ```

  - ```scss
    @import '../../../default.scss';

    .initial-container {
      z-index: 0;
      width: 400px;
      height: 408.2px;
      position: absolute;
      top: 0;
      // right: 15%;
      bottom: 0;
      left: auto;
      margin: auto;
      opacity: 0;
      &.first-container {
        right: calc(432px + 10%);
      }
      &.second-container {
        right: 10%;
      }
      svg {
        width: 100%;
        height: auto;
        bottom: 0;
        // transform: rotateZ(30deg) !important;
      }
      .solid-initial {
        position: absolute;
        top: 3px;
        right: auto;
        bottom: auto;
        left: 0;
        margin: auto;
        width: 100%;
        opacity: 0;
        // transform: rotateZ(30deg);
        z-index: 1;
        &.initial-p {
          top: 6px;
          left: 9px;
          width: 96%;
        }
      }
    }
    .svg-container {
      stroke: $mint;
      stroke-width: 2;
    }
    ```

- Add `<Initial />` to /src/components/Home/index.js

## Create About Page

- Create /src/components/About/index.js and /src/components/About/index.scss

  - ```js
    import './index.scss'
    import AnimatedLetters from '../AnimatedLetters'
    import { useEffect, useState } from 'react'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import {
      faCss3,
      faGitAlt,
      faHtml5,
      faJsSquare,
      faPhp,
      faReact,
    } from '@fortawesome/free-brands-svg-icons'

    const About = () => {
      const [letterClass, setLetterClass] = useState('text-animate')

      useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

      return (
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>I am a Web Developer living in Victory, BC.</p>
            <p>
              Creating responsive websites, maintaining clients' homepages, and
              applying customers' requests quickly.
            </p>
            <p>
              Solving problems, organizing well, and working independently with high
              attention to detail.
            </p>
            <p>
              IRiding a bicycle, walking on the beach, and watching movies. A family
              person and father of two lovely children.
            </p>
          </div>
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faPhp} color="#9970FF" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
      )
    }

    export default About
    ```

  - ```scss
    .stage-cube-cont {
      width: 50%;
      height: 100%;
      top: 0;
      padding-top: 18%;
      margin-left: 0;
      position: absolute;
      right: 0;
      overflow: hidden;
    }
    .cubespinner {
      animation-name: spincube;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 12s;
      transform-style: preserve-3d;
      transform-origin: 100px 100px 0;
      margin-left: calc(50% - 100px);
      div {
        position: absolute;
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        background: rgba(255, 255, 255, 0.4);
        text-align: center;
        font-size: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 20px 0px lightyellow;
      }
      .face1 {
        transform: translateZ(100px);
      }
      .face2 {
        transform: rotateY(90deg) translateZ(100px);
      }
      .face3 {
        transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
      }
      .face4 {
        transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
      }
      .face5 {
        transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
      }
      .face6 {
        transform: rotateX(-90deg) translateZ(100px);
      }
    }
    @keyframes spincube {
      from,
      to {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
      }
      16% {
        transform: rotateY(-90deg);
      }
      33% {
        transform: rotateY(-90deg) rotateZ(90deg);
      }
      50% {
        transform: rotateY(-180deg) rotateZ(90deg);
      }
      66% {
        transform: rotateY(-270deg) rotateZ(90deg);
      }
      83% {
        transform: rotateX(90deg);
      }
    }
    ```

- Add About into /src/App.js

  - ```js
    import About from './components/About'
    ...
              <Route path="about" element={<About />} />
              ...
    ```

- On /src/compoennts/Layout/index.scss

  - ```scss
    ...
    .about-page {
      .text-zone {
        position: absolute;
        left: 10%;
        top: 50%;
        transform: translateY(-50%);
        width: 35%;
        vertical-align: middle;
        display: table-cell;
        max-height: 90%;
        h1 {
          font-size: 53px;
          font-family: 'Playfair Display', serif;
          color: $mint;
          font-weight: 700;
          margin-top: 0;
          position: relative;
          margin-bottom: 40px;
          left: 10px;
        }
        p {
          font-style: 13px;
          color: #fff;
          font-family: sans-serif;
          font-weight: 300;
          min-width: fit-content;
          animation: pulse 1s;
          &:nth-of-type(1) {
            animation-delay: 1.1s;
          }
          &:nth-of-type(2) {
            animation-delay: 1.2s;
          }
          &:nth-of-type(3) {
            animation-delay: 1.3s;
          }
          &:nth-of-type(4) {
            animation-delay: 1.4s;
          }
          &:nth-of-type(5) {
            animation-delay: 1.5s;
          }
        }
      }
      .text-animate-hover {
        &:hover {
          color: #fff;
        }
      }
    }
    ```

## Loading Animation

- On /src/components/About/index.js, Home/index.js, add `<Loader type="pacman" />`

  - ```js
    import Loader from 'react-loaders'
    ...
    <>
      <div className="container about-page">
      ...
      </div>
      <Loader type="pacman" />
    </>
    ...
    ```

- On /src/App.scss

  - ```scss
    ...
    @import '~loaders.css/src/animations/pacman.scss';

    .loader-active {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: 0;
      bottom: 0;
      width: 50px;
      height: 50px;
      animation: fadeOut 1s 1s;
      animation-fill-mode: forwards;
    }
    .pacman > div {
      &:first-of-type,
      &:nth-child(2) {
        border-top-color: $mint;
        border-left-color: $mint;
        border-bottom-color: $mint;
      }
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6) {
        background-color: $mint;
      }
    }
    ```

## Contact Page

- Create /src/components/Contact/index.js and index.scss

  - ```js
    import { useEffect, useState } from 'react'
    import Loader from 'react-loaders'
    import AnimatedLetters from '../AnimatedLetters'
    import './index.scss'

    const Contact = () => {
      const [letterClass, setLetterClass] = useState('text-animate')

      useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
      return (
        <>
          <div className="container contact-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <div className="contact-form">
                <form>
                  <ul>
                    <li className="half">
                      <input type="text" name="name" placeholder="Name" required />
                    </li>
                    <li className="half">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </li>
                    <li>
                      <textarea
                        name="message"
                        placeholder="Message"
                        required
                      ></textarea>
                    </li>
                    <li>
                      <input type="submit" className="flat-button" value="SEND" />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
          <Loader type="pacman" />
        </>
      )
    }

    export default Contact
    ```

  - ```scss
    @import '../../default.scss';

    .contact-form {
      width: 100%;
      margin-top: 20px;
      ul {
        padding: 0;
        margin: 0;
        li {
          padding: 0;
          margin: 0;
          list-style: none;
          margin-bottom: 10px;
          overflow: hidden;
          display: block;
          position: relative;
          opacity: 0;
          animation: fadeInUp 2s 2s;
          animation-fill-mode: forwards;
          clear: both;
          &.half {
            width: 49%;
            margin-left: 2%;
            float: left;
            clear: none;
            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
    }
    input[type='text'],
    input[type='email'] {
      width: 100%;
      border: 0;
      background-color: $purple-1;
      height: 50px;
      font-size: 16px;
      color: #fff;
      padding: 0 20px;
      box-sizing: border-box;
    }
    textarea {
      width: 100%;
      border: 0;
      background-color: $purple-1;
      font-size: 16px;
      color: #fff;
      padding: 20px;
      min-height: 150px;
      box-sizing: border-box;
    }
    .flat-button {
      color: $mint;
      background: 0 0;
      font-size: 11px;
      letter-spacing: 3px;
      text-decoration: none;
      padding: 8px 10px;
      border: 1px solid $mint;
      float: right;
      border-radius: 4px;
    }
    ```

- On /src/App.js, add `Route path="contact" element={<Contact />} />`

- On /src/components/Layout/index.scss, change `.about-page` to `.about-page, .contact-page`
