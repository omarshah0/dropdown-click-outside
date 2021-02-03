import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useRef } from "react"

const Header = ({ siteTitle }) => {
  const [showMenu, setShowMenu] = useState(false)
  const hamburgerRef = useRef()
  useEffect(() => {
    function handleDropDown(event) {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setShowMenu(false)
      }
    }
    document.addEventListener("mousedown", handleDropDown)
    return () => {
      document.removeEventListener("mousedown", handleDropDown)
    }
  }, [])
  return (
    <header
      style={{
        background: "rebeccapurple",
        marginBottom: "1.45rem",
        padding: "1.45rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 960,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div
        className="dropdown"
        style={{ position: "relative" }}
        ref={hamburgerRef}
      >
        <div
          className="hamburger"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            cursor: "pointer",
          }}
          onClick={() => setShowMenu(true)}
        >
          <span
            style={{ background: "white", width: "20px", height: "4px" }}
          ></span>
          <span
            style={{ background: "white", width: "20px", height: "4px" }}
          ></span>
          <span
            style={{ background: "white", width: "20px", height: "4px" }}
          ></span>
        </div>
        <div
          className="menu"
          style={{
            background: "#D1D5DB",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            position: "absolute",
            top: "30px",
            right: 0,
            padding: "1rem 3rem",
            borderRadius: "10px",
            visibility: `${showMenu ? "visible" : "hidden"}`,
            opacity: `${showMenu ? "1" : "0"}`,
          }}
        >
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
