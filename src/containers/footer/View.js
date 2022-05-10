import React, { useState } from 'react';

import { Link } from '../../components';
import { PaymentPopup } from '../index';

export const FooterView = () => {
  const [dateFirst, setDateFirst] = useState(false);

  return (
    <footer id="Footer" className="clearfix">
      <PaymentPopup
        open={dateFirst}
        onClose={() => setDateFirst(false)}
        title="VIP-date Überraschung"
        hours="3"
        price="90"
      />
      <div className="widgets_wrapper" style={{ padding: '15px 0' }}>
        <div className="container">
          <div className="column one">
            <aside id="custom_html-3" className="widget_text widget widget_custom_html">
              <div className="textwidget custom-html-widget">
                <div className="footer-flex">
                  <div className="footer-item">
                    <div className="footer-logo">
                      <img src="/style/img/logo.png" alt="" />
                    </div>
                    <div className="footer-social-flex" />
                  </div>
                  <div className="footer-item">
                    <nav className="footer-nav">
                      <ul>
                        <li className="footer-nav-link">
                          <Link href="/date">
                            <a>Für 2 personen</a>
                          </Link>
                        </li>
                        <li className="footer-nav-link">
                          <Link href="/party">
                            <a>Für viele Personen</a>
                          </Link>
                        </li>
                        <li className="footer-nav-link">
                          <Link href="/action">
                            <a>VIP-Angebote</a>
                          </Link>
                        </li>
                        <li className="footer-nav-link">
                          <Link href="/advantages">
                            <a>FAQ</a>
                          </Link>
                        </li>
                        <li className="footer-nav-link">
                          <Link href="/contacts">
                            <a>Kontakte</a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className=" footer-item">
                    <div className="menu-phone-wrapper">
                      <a className="menu-phone roistat-phone" href="tel:+74999555678">
                        +7 (499) 955-56-78
                      </a>
                      <p className="menu-phone-time">12:00 - 00:00</p>
                    </div>
                    <button className="button footer_button" type="button" onClick={() => setDateFirst(true)}>
                      Buchen Saal
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </footer>
  );
};
