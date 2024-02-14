import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import "./Header.css"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Header() {

  const totalAmaount = useSelector(state => state.cart.totalQuantity)

  const nav_link = [
    {
      path: 'home',
      display: "ANA SAYFA"
    },
    {
      path: 'shop',
      display: "MAĞZA"
    },
    {
      path: 'card',
      display: "SEPETİM"
    },
  ]
  const menuRef = useRef(null)
  const menuToggle = () => menuRef.current.classList.toggle("active_menu")
  const headerRef = useRef(null)
  const stickyFunc = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky_header")
      } else {
        headerRef.current.classList.remove("sticky_header")
      }
    })
  }
  useEffect(() => {
    stickyFunc();
    return () => window.removeEventListener("scroll", stickyFunc)
  }, [])

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <span className='logoIcon'>
                <i className="ri-shopping-bag-3-line "></i>
              </span>
              <NavLink to="home">
                <h1>Kral Moda</h1>
              </NavLink>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav_link.map((item, index) => (
                  <li key={index} className="nav_item" >
                    <NavLink to={item.path} className={(navclass) => navclass.isActive ? "nav_active" : ""}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_icons">
              <Link to="/card" className="fav_icon" >
              <span className='fav_icon' >
              <i className="ri-shopping-bag-line"></i>
                <span className='badge'>{totalAmaount}</span>
              </span>
              </Link>
              <div className="mobile_icon">
                <span ><i onClick={menuToggle} className="ri-menu-line"></i></span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header