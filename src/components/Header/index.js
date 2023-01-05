// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import './index.css'

const Header = () => (
  <>
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button type="button" data-testid="hamburgerIconButton">
          <GiHamburgerMenu />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <ul>
            <li>
              <AiFillHome />
              <Link to="/">Home</Link>
            </li>
            <li>
              <BsInfoCircleFill />
              <Link to="/about">About</Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose />
          </button>
        </>
      )}
    </Popup>
  </>
)
export default Header
