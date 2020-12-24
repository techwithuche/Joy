import React from 'react'

export default function Header() {
    return (
       <>

    <div id="loader-wrapper">
      <div id="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>

    <div className="tm-main-container">
      <div className="tm-top-container">
      


      <nav id="tmNav" className="tm-nav">
          <a className="tm-navbar-menu" href="#">Menu</a>
          <ul className="tm-nav-links">
            <li className="tm-nav-item active">
              <a href="#" data-linkid="0" data-align="right" className="tm-nav-link">Intro</a>
            </li>
            <li className="tm-nav-item">
              <a href="#" data-linkid="1" data-align="right" className="tm-nav-link">About</a>
            </li>
            <li className="tm-nav-item">
              <a
                href="#"
                data-linkid="2"
                data-align="middle"
                className="tm-nav-link">Blog</a>
            </li>
            <li className="tm-nav-item">
              <a href="#" data-linkid="3" data-align="left" className="tm-nav-link">Contact</a>
            </li>
            
          </ul>
        </nav>

        
        <header className="tm-site-header-box tm-bg-dark">
          <h1 className="tm-site-title">Joy Dimba</h1>
          <p className="mb-0 tm-site-subtitle"></p>
        </header>
      </div>
    </div>
       </>
    )
}
