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

      @import url('https://fonts.googleapis.com/css2?family=La+Belle+Aurore&family=Roboto:wght@400;700&display=swap');

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
    $purple: rgb(57, 0, 122);
    $purple-1: rgb(40, 0, 87);
    $purple-2: rgb(24, 0, 51);
    $blue-dark: rgb(0, 68, 179);
    $blue: rgb(0, 113, 211);
    $blue-light: rgb(0, 153, 221);
    $mint-blue: rgb(0, 190, 214);
    $mint: rgb(0, 226, 200);

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
        height: 210px;
        top: 50%;
        margin-top: -120px;
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

    const Layout = () => {
      return <><Sidebar /></>
    ```
