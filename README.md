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

  - Create /src/assets/images
    - logo_sub.png, logo-lines-2.svg, logo-lines.svg, logo-s.png, logo1.png, logo2.png, logo3.png, logo4.png, logopreload.png
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
