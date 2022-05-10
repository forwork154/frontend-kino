import React, { useState } from 'react';

import { PaymentPopup } from '../containers';

export const AdvantagesPage = () => {
  const [dateFirst, setDateFirst] = useState(false);

  return (
    <div className="content_wrapper clearfix">
      <PaymentPopup
        open={dateFirst}
        onClose={() => setDateFirst(false)}
        title="VIP-date Überraschung"
        hours="3"
        price="90"
      />
      <div className="sections_group">
        <div className="entry-content" itemProp="mainContentOfPage">
          <div
            className="section mcb-section full-screen  "
            style={{
              paddingTop: '0px',
              paddingBottom: '0px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/bg-party.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
              backgroundAttachment: '',
              backgroundSize: '',
              WebkitBackgroundSize: '',
            }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <h1 className="main_header" style={{ paddingTop: '180px', minHeight: '50px' }}>
                        Wie unterscheidet sich unser Privates Cafe
                        <br />
                        von anderen Cafe?
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <div className="main_fourth-button-wrap">
                        <button
                          className="button main_button fourth_button"
                          onClick={() => setDateFirst(true)}
                        >
                          Saal Buchen
                        </button>
                      </div>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section full-width  "
            id="about-us"
            style={{ paddingTop: '0px', paddingBottom: '0px', backgroundColor: '' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{ backgroundColor: '#29033c' }}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <h2 style={{ marginTop: '50px' }}>Unsere Vorteile</h2>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '100px',
                  backgroundImage: 'url(style/img/party-2.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Erfahrung</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>
                          In unserer 7-jährigen Arbeit haben wir gelernt, was für unsere Gäste wichtig ist
                        </li>
                        <li>
                          Seit 2012 wurden wir von über 50.000 Menschen besucht,
                          <br />
                          davon 3.000 davon-dauerhafte Besucher
                        </li>
                        <li>
                          Wir interviewen jeden Gast und 87% sind bereit,
                          <br />
                          wieder zu kommen, die restlichen 13% zeigen unsere Fehler an,dir wir korrigieren
                          sie.
                        </li>
                        <p />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '100px',
                  backgroundImage: 'url(style/img/party-3.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Reinheit</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>Nach jedem Gast geschieht eine allgemeine Reinigung.</li>
                        <li>Die Decken sind immer sauber, frisch und in neuen Verpackungen.</li>
                        <li>Wir verwenden UV-Lampen,  um Bakterien zu zerstören.</li>
                        <li>Jedes Zimmer verfügt über eine Klimaanlage für Komfort und Bequemlichkeit.</li>
                      </ul>
                      <p />
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '150px',
                  backgroundImage: 'url(style/img/party-4.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Privatsphäre</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>
                          Wir wissen, wie wichtig Privatsphäre ist, wenn Sie sich ausruhen.
                          <br />
                          Deshalb haben wir keine versteckte Kameras
                        </li>
                        <li>
                          Unsere Mitarbeiter werden auch Sie nicht stören, Sie rufen sie selbst an
                        </li>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '100px',
                  // backgroundImage: 'url(style/img/party-5.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Vorteil</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>
                          Wir verwenden keine Kork Pflicht, so dass Sie alle Speisen und Getränke mitbringen
                          können.
                        </li>
                        <li>
                          Stammgäste erhalten 10% bis 25% Ermäßigungskarten.
                          <br />
                          Diese Karten beinhalten auch kostenlosen Tee und Fondue.
                        </li>
                      </ul>
                      <p />
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section    bg-cover"
            style={{
              paddingTop: '50px',
              paddingBottom: '50px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/party-7.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
              backgroundAttachment: '',
              backgroundSize: '',
              WebkitBackgroundSize: '',
            }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <h2 style={{ marginTop: '50px' }}>Unser Team</h2>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                      <p>Diese Menschen schaffen Ihren Komfort</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/party8.jpg" alt="SAMSUNG CSC" width={300} height={450} />
                        </div>
                        <h2></h2>
                        <h2 style={{ margin: '0 0 5px', fontSize: '30px', lineHeight: '30px' }}>Margarete</h2>
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p className="pricing-box-team plan-header-team subtitle-team">
                          <big>Managerin</big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip pricing-box-team plan-header-team subtitle-team">
                    <div className="pricing-box  pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/p9.jpg" alt="SAMSUNG CSC" width={300} height={450} />
                        </div>
                        <h2></h2>
                        <h2 style={{ margin: '0 0 5px', fontSize: '30px', lineHeight: '30px' }}>Luisa</h2>
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p className="pricing-box-team plan-header-team subtitle-team">
                          <big>Managerin</big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/p10.jpg" alt="SAMSUNG CSC" width={300} height={450} />
                        </div>
                        <h2></h2>
                        <h2 style={{ margin: '0 0 5px', fontSize: '30px', lineHeight: '30px' }}>Helene</h2>
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p className="pricing-box-team plan-header-team subtitle-team">
                          <big>Administrator</big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section    bg-cover"
            id="contacts"
            style={{
              paddingTop: '80px',
              paddingBottom: '40px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/p11.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
              backgroundAttachment: '',
              backgroundSize: '',
              WebkitBackgroundSize: '',
            }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}}>
                      <h2>Wie kommen wir dahin?</h2>
                      <div className="footer-impressum">
                        <p>
                          Impressum
                          <br /> <br /> Betreiber der Website
                          <br />
                          Privates Cafe KG
                          <br />
                          Fasanenstraße 85
                          <br />
                          10623 Berlin
                          <br />
                          Deutschland
                          <br />
                          <br />
                          Handelsregister HR A 101007 <br />
                          Amtsgericht Berlin
                          <br />
                          <br /> Geschaftsfuhrer: <br />
                          Alexander Muller
                          <br /> Kontaktierbar uber o. a. Anschrift
                          <br /> USt-IdNr. nach §27a UStG:
                          <br /> DE238472376
                        </p>
                        <p>
                          Kontakt <br />
                          <br />
                          Unterstutzung zur Nutzung von Privates Cafe erhalten Sie uber diesen Link sowie
                          unten rechts uber die Schaltflache „Chat“.
                          <br />
                          <br /> Rechtliche und behordliche Anfragen nehmen wir per Post, per Fax unter +49 30
                          228688059
                          <br /> telefonisch unter +49 30 228688059. Unsere allgemeine E-Mail-Adresse lautet
                          kontakt@privatescafe.com, auch sind wir uber die o. a. Rufnummer erreichbar. Fur
                          Fragen rund um den Support zur Nutzung von Privates Cafe bitten wir um Nutzung des o. a.
                          Links oder der Schaltflache „Chat“.
                        </p>
                      </div>
                      <div className="main_seven-flex">
                        <div className="main_seven-item adress_item">
                          <div className="adress-wrap">
                            <p className="main_seven-phone">
                              <a className="roistat-phone" href="tel:74996497094">
                                +7 (499) 649-70-94
                              </a>
                              <br />
                            </p>
                            <ul>
                              <li>
                                <span>So-Do</span> 12:00 - 00:00
                              </li>
                              <li>
                                <span>Fr - Sa</span> 12:00 - 06:00
                              </li>
                              <li>
                                <span>Adressen: </span>
                                <ul className="contacts-list-inner">
                                  <li>
                                    <span>Fischerinsel 5, 10179 Berlin</span>
                                  </li>
                                  <li>
                                    <span>Wikingerweg 14, 20537 Hamburg</span>
                                  </li>
                                  <li>
                                    <span>Baaderstraße 76, 80469 München</span>
                                  </li>
                                  <li>
                                    <span>Follerstraße 96, 50676 Köln</span>
                                  </li>
                                  <li>
                                    <span>Gutleutstraße 176, 60327 Frankfurt am Main</span>
                                  </li>
                                  <li>
                                    <span>Hohe Str. 12, 70174 Stuttgart</span>
                                  </li>
                                  <li>
                                    <span>Königsallee, 40215 Düsseldorf</span>
                                  </li>
                                  <li>
                                    <span>Große Heimstraße 54, 44137 Dortmund</span>
                                  </li>
                                  <li>
                                    <span>Rüttenscheider Str. 131, 45130 Essen</span>
                                  </li>
                                  <li>
                                    <span>Faulenstraße 71, 28195 Bremen</span>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section the_content no_content" />
          <div className="section section-page-footer">
            <div className="section_wrapper clearfix">
              <div className="column one page-pager"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesPage;
