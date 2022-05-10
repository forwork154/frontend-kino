import React, { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { Link } from '../../components';

export const HeaderView = ({ activePath }) => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <div id="Header_wrapper">
      <div
        id="Side_slide"
        className="left dark enabled"
        data-width={250}
        style={{ left: isMobileMenuOpened ? '0px' : '-250px', transition: '0.3s' }}
      >
        <div className="close-wrapper" onClick={() => setIsMobileMenuOpened(false)}>
          <a className="close">
            <CloseIcon style={{ color: 'rgb(166, 166, 166)' }} />
            {/* <i className="icon-cancel-fine" /> */}
          </a>
        </div>
        <div className="extras">
          <div className="extras-wrapper" />
        </div>
        <div className="lang-wrapper" />
        <div className="menu_wrapper">
          <nav id="menu">
            <ul
              id="menu-%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%be%d0%b5-%d0%bc%d0%b5%d0%bd%d1%8e-%d1%81%d0%bb%d0%b5%d0%b2%d0%b0"
              className="menu menu-main menu_left"
            >
              <li id="menu-item-25" className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link href="/date" onClick={() => setIsMobileMenuOpened(false)}>
                  <a>
                    <span>
                      Für
                      <br />
                      2 Personen
                    </span>
                  </a>
                </Link>
              </li>
              <li id="menu-item-415" className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link href="/party" onClick={() => setIsMobileMenuOpened(false)}>
                  <a>
                    <span>
                      Für
                      <br />
                      viele Personen
                    </span>
                  </a>
                </Link>
              </li>

              <li id="menu-item-357" className="menu-item menu-item-type-custom menu-item-object-custom last">
                <Link href="/action" onClick={() => setIsMobileMenuOpened(false)}>
                  <a>
                    <span>
                      Aktionen und VIP
                      <br />
                      Angebote
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
            <ul
              id="menu-%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%be%d0%b5-%d0%bc%d0%b5%d0%bd%d1%8e-%d1%81%d0%bf%d1%80%d0%b0%d0%b2%d0%b0"
              className="menu menu-main menu_right"
            >
              <li
                id="menu-item-527"
                className="menu-item menu-item-type-post_type menu-item-object-page last"
              >
                <Link href="/advantages" onClick={() => setIsMobileMenuOpened(false)}>
                  <a>
                    <span>
                      Unsere
                      <br />
                      Vorteile
                    </span>
                  </a>
                </Link>
              </li>
              <li id="menu-item-361" className="menu-item menu-item-type-custom menu-item-object-custom last">
                <Link href="/contacts" onClick={() => setIsMobileMenuOpened(false)}>
                  <a>
                    <span>Kontakte</span>
                  </a>
                </Link>
              </li>
            </ul>
            <ul
              id="menu-%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%be%d0%b5-%d0%bc%d0%b5%d0%bd%d1%8e-%d1%81%d0%bb%d0%b5%d0%b2%d0%b0-1"
              className="menu menu-mobile"
            >
              <li
                id="menu-item-25"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25"
              >
                <Link href="/date" onClick={() => setIsMobileMenuOpened(false)}>
                  <a>
                    <span>
                      Für
                      <br />
                      2 Personen
                    </span>
                  </a>
                </Link>
              </li>
              <li
                id="menu-item-415"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-415"
              >
                <Link href="/party" onClick={() => setIsMobileMenuOpened(false)}>
                  <a>
                    <span>
                      Für
                      <br />
                      viele Personen
                    </span>
                  </a>
                </Link>
              </li>

              <li
                id="menu-item-357"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-357"
              >
                <Link href="/action" onClick={() => setIsMobileMenuOpened(false)}>
                  <a>
                    <span>
                      Aktionen und VIP
                      <br />
                      Angebote
                    </span>
                  </a>
                </Link>
              </li>
              <li
                id="menu-item-357"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-357"
              >
                <Link href="/advantages" onClick={() => setIsMobileMenuOpened(false)}>
                  <a>
                    <span>
                      Unsere
                      <br />
                      Vorteile
                    </span>
                  </a>
                </Link>
              </li>
              <li
                id="menu-item-357"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-357 last"
              >
                <Link href="/contacts" onClick={() => setIsMobileMenuOpened(false)}>
                  <a>
                    <span>Kontakte</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="social" />
      </div>
      <div
        id="body_overlay"
        style={{ display: isMobileMenuOpened ? 'block' : 'none' }}
        onClick={() => setIsMobileMenuOpened(false)}
      ></div>
      <header id="Header">
        {/* .header_placeholder 4sticky  */}
        <div className="header_placeholder" style={{ height: '0px' }} />
        <div id="Top_bar" className style={{ top: '0px' }}>
          <div className="container">
            <div className="column one">
              <div className="top_bar_left clearfix" style={{ width: '1489px' }}>
                {/* Logo */}
                <div className="logo">
                  <Link href="/">
                    <a id="logo" title data-height={170} data-padding={15}>
                      <img
                        className="logo-main scale-with-grid"
                        src="/style/img/logo.png"
                        data-retina
                        data-height={115}
                        alt="log-new"
                      />
                      <img
                        className="logo-sticky scale-with-grid"
                        src="/style/img/logo.png"
                        data-retina
                        data-height={115}
                        alt="log-new"
                        style={{}}
                      />
                      <img
                        className="logo-mobile scale-with-grid"
                        src="/style/img/logo.png"
                        data-retina
                        data-height={115}
                        alt="log-new"
                        style={{}}
                      />
                      <img
                        className="logo-mobile-sticky scale-with-grid"
                        src="/style/img/logo.png"
                        data-retina
                        data-height={115}
                        alt="log-new"
                        style={{}}
                      />
                    </a>
                  </Link>
                </div>
                <div className="menu_wrapper">
                  <nav id="menu">
                    <ul
                      id="menu-%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%be%d0%b5-%d0%bc%d0%b5%d0%bd%d1%8e-%d1%81%d0%bb%d0%b5%d0%b2%d0%b0"
                      className="menu menu-main menu_left"
                    >
                      <li
                        id="menu-item-25"
                        className="actiontodos menu-item menu-todos menu-item-type-post_type menu-item-object-page"
                      >
                        <Link href="/date">
                          <a>
                            <span className={`trants ${activePath === '/date' ? 'active' : ''}`}>
                              Für
                              <br />
                              2 Personen
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-415"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <Link href="/party">
                          <a>
                            <span className={`trants ${activePath === '/party' ? 'active' : ''}`}>
                              Für
                              <br />
                              viele Personen
                            </span>
                          </a>
                        </Link>
                      </li>
                      {/* <li id="menu-item-356" className="menu-item menu-item-type-custom menu-item-object-custom last"><a
                                             href="halls.html"><span>Залы<br>и цены</span></a></li> */}
                      <li
                        id="menu-item-357"
                        className="menu-item menu-item-type-custom menu-item-object-custom last"
                      >
                        <Link href="/action">
                          <a>
                            <span className={`trants ${activePath === '/action' ? 'active' : ''}`}>
                              Aktionen und VIP
                              <br />
                              Angebote
                            </span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                    <ul
                      id="menu-%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%be%d0%b5-%d0%bc%d0%b5%d0%bd%d1%8e-%d1%81%d0%bf%d1%80%d0%b0%d0%b2%d0%b0"
                      className="menu menu-main menu_right"
                    >
                      <li
                        id="menu-item-527"
                        className="menu-item menu-item-type-post_type menu-item-object-page last"
                      >
                        <Link href="/advantages">
                          <a>
                            <span className={`trants ${activePath === '/advantages' ? 'active' : ''}`}>
                              Unsere
                              <br />
                              Vorteile
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-361"
                        className="menu-item menu-item-type-custom menu-item-object-custom last"
                      >
                        <Link href="/contacts">
                          <a>
                            <span className={`trants ${activePath === '/contacts' ? 'active' : ''}`}>
                              Kontakte
                            </span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                    <ul
                      id="menu-%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%be%d0%b5-%d0%bc%d0%b5%d0%bd%d1%8e-%d1%81%d0%bb%d0%b5%d0%b2%d0%b0-1"
                      className="menu menu-mobile"
                    >
                      <li
                        id="menu-item-25"
                        className="actiontodos menu-item menu-item-type-post_type menu-item-object-page menu-item-25"
                      >
                        <Link href="date">
                          <a>
                            <span className={`trants ${activePath === '/date' ? 'active' : ''}`}>
                              Für
                              <br />
                              2 Personen
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-415"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-415"
                      >
                        <Link href="/party">
                          <a>
                            <span className={`trants ${activePath === '/party' ? 'active' : ''}`}>
                              Für
                              <br />
                              viele Personen
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-357"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-357 last"
                      >
                        <Link href="action">
                          <a>
                            <span className="trants">
                              Aktionen und VIP
                              <br />
                              Angebote
                            </span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <a className="responsive-menu-toggle">
                    <MenuIcon style={{ color: '#e5097f' }} onClick={() => setIsMobileMenuOpened(true)} />
                  </a>

                  <div className="menu-phone-wrapper" style={{ textAlign: 'center' }}>
                    <a className="menu-phone roistat-phone" href="tel:+74999555678">
                      8 (499) 955-56-78
                    </a>
                    <p style={{ fontSize: '14px' }}>So-Do: 12:00 - 00.00 / Fr-Sa: 12:00 - 06:00</p>
                  </div>
                </div>
                <div className="secondary_menu_wrapper">
                  {/* #secondary-menu */}
                  <nav
                    id="secondary-menu"
                    className="menu-%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%be%d0%b5-%d0%bc%d0%b5%d0%bd%d1%8e-%d1%81%d0%bf%d1%80%d0%b0%d0%b2%d0%b0-container"
                  >
                    <ul
                      id="menu-%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%be%d0%b5-%d0%bc%d0%b5%d0%bd%d1%8e-%d1%81%d0%bf%d1%80%d0%b0%d0%b2%d0%b0-1"
                      className="secondary-menu"
                    >
                      <li
                        id="menu-item-527"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-527"
                      >
                        <Link href="/advantages">
                          <a className={`trants ${activePath === '/advantages' ? 'active' : ''}`}>
                            Unsere
                            <br />
                            Vorteile
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-361"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-361"
                      >
                        <Link href="/contacts">
                          <a className={`trants ${activePath === '/contacts' ? 'active' : ''}`}>Kontakte</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
