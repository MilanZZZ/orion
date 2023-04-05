import React, {useState} from 'react'
import './Navbar.css';
import images from '../../constants/Images/images';


const Navbar = () => {
  const [dash, setDash] = useState(Array(4).fill(false))
  const Pages = [
    "Home", "Solutions", "Features", "Resources"
  ]
  return (
    <div className="navbar-container">
      <div className="logo">
        <img className={`image`} src={images.logo_white} alt="logo" />
      </div>
      <div className="links">
        {Pages.map((link, index) => (
          <li key={`link-${index}`} className="link-list">
            <div className="wrapp-a">
              <a
                onMouseEnter={() => setDash(dash.map((val, i) => i === index))}
                onMouseLeave={() => setDash(dash.map(() => false))}
                className="link"
                href={`#${link}`}
              >
                {link}
              </a>
              {<div className="dash"></div>}
            </div>
          </li>
        ))}
      </div>
      <div className="buttons">
        <a href="" className="login">
          Log in
        </a>
        <button className="demo-button button-nav">Try For Free</button>
      </div>
    </div>
  );
}

export default Navbar;