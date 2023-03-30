import Image from 'next/image'
import { useState } from 'react'
import { FaUser, FaBars, FaAngleUp } from 'react-icons/fa'
import Link from 'next/link'
import cn from 'classnames'
import { Squash as Hamburger } from 'hamburger-react'

function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="header">
      <Link href="/">
        <Image
          className="header__logo"
          width={155}
          height={55}
          src="https://res.cloudinary.com/dxfi1vj6q/image/upload/v1669228061/theBetterStay/Amarillo_kxcydh.png"
          alt="The Better Stay Logo"
        />
      </Link>

      
      <div
        className={cn('header__nav-links', {
          'header__nav-links--show': showMenu,
        })}
      >
        <Link href="/"> Home </Link>
        <Link href="/rentals"> Rentals </Link>
        <Link href="/services"> Services </Link>
        <Link href="/contact-us"> Contact Us </Link>
        <Link href="/login" className="header__nav-links__login">
          Login <FaUser />
        </Link>
      </div>
      <div className="header__menu-button hamburger-menu">
        <Hamburger
          toggled={showMenu}
          toggle={setShowMenu}
          rounded
          label="Show menu"
        />
      </div>
    </div>
  )
}

export default Header
