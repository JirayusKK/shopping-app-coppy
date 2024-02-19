import '../SASS/Topbar.scss'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import LogoJ from '../../assets/img/Artboard_J.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faGlobe,
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

const Tbar = () => {
  const location = useLocation()

  const [isHomepage, setIsHomepage] = useState(location.pathname === '/')
  const [isHeld, setIsHeld] = useState(false)

  const handleMouseEnter = () => {
    setIsHeld(true)
  }

  const handleMouseLeave = () => {
    setIsHeld(false)
  }

  useEffect(() => {
    setIsHomepage(location.pathname === '/')
  }, [location.pathname, isHomepage])

  console.log('this state', isHomepage)

  return (
    <>
      {/* --------------------------------Top Bar---------------------------------- */}
      <div className="topbar">
        <di className="top_left">
          <span>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
            </p>
            <p>examplemail@gmail.com</p>
          </span>
          <span>
            <p>
              <FontAwesomeIcon icon={faPhone} />
            </p>
            <p>+66 1234 5678</p>
          </span>
        </di>
        <div className="top_right">
          <span>
            <p>
              <FontAwesomeIcon icon={faGlobe} />
            </p>
            <p>Eng</p>
          </span>
        </div>
      </div>
      {/* --------------------------------Menu Bar---------------------------------- */}
      <div className={`nav_menu ${isHomepage ? 'homepage' : 'none-homepage'}`}>
        <ul className="nav_items">
          <div className="iCons">
            <div className="iConL">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div>
              <FontAwesomeIcon className="iConNav" icon={faBars} />
              <FontAwesomeIcon className="iConNav" icon={faXmark} />
            </div>
          </div>
          <li className="home">
            <NavLink
              className="home"
              exact="true"
              activeClassName="active"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="shop">
            <NavLink
              className="shop"
              exact="true"
              activeClassName="active"
              to="/Shop"
            >
              Shop
            </NavLink>
          </li>
          <li className="store">
            <NavLink
              className="store"
              exact="true"
              activeClassName="active"
              to="/Store"
            >
              Store
            </NavLink>
          </li>
          <li className="logoJ">
            <NavLink className="logoJ" activeClassName="active" to="/">
              <img className="logoJ" src={LogoJ} />
            </NavLink>
          </li>
          <li className="about">
            <NavLink
              className="about"
              exact="true"
              activeClassName="active"
              to="/About"
            >
              About
            </NavLink>
          </li>
          <li className="faq">
            <NavLink
              className="faq"
              exact="true"
              activeClassName="active"
              to="/Faq"
            >
              FAQ
            </NavLink>
          </li>
          <li className="payment">
            <NavLink
              className="payment"
              exact="true"
              activeClassName="active"
              to="/Payment"
            >
              Confirm Payment
            </NavLink>
          </li>
          <div className="iCons">
            <a className="iConR">
              <FontAwesomeIcon icon={faCartShopping}/>
              <FontAwesomeIcon icon={faUser}/>
            </a>
          </div>
        </ul>
      </div>
    </>
  )
}

export default Tbar
