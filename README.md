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
            <NavLink exact="true" activeclassname="active" to="/">
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              className="about-link"
              to="/about"
            >
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
              exact="true"
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

    const Home = () => {
      const [letterClass, setLetterClass] = useState('text-animate')
      const greetArray1 = ['H', 'i', ',']
      const greetArray2 = ['I', "'", 'm']
      const nameArray = ['J', 'u', 'n', 'g', 'j', 'i', 'n', '', 'P', 'a', 'r', 'k']
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
              &nbsp;
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
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

## Animation with GSAP

- Create /src/components/Home/Initial/index.js and /src/components/Home/Initial/index.scss

  - ```js
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
    ```

    - ```scss
    @import '../../../default.scss';

    .initial-container {
      z-index: 0;
      width: 400px;
      height: 408.2px;
      position: absolute;
      top: 0;
      right: 15%;
      bottom: 0;
      left: auto;
      margin: auto;
      opacity: 0;
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
      }
    }
    .svg-container {
      stroke: $mint;
      stroke-width: 2;
    }
    ```

- Add `<Initial />` to /src/components/Home/index.js
