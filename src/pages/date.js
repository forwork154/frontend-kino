import React, { useState } from 'react';

import { PaymentPopup } from '../containers';

const HomePage = () => {
  const [dateFirst, setDateFirst] = useState(false);
  const [dateSecond, setDateSecond] = useState(false);
  const [dateThird, setDateThird] = useState(false);

  return (
    <div className="content_wrapper clearfix">
      <PaymentPopup
        open={dateFirst}
        onClose={() => setDateFirst(false)}
        title="VIP-date Überraschung"
        hours="3"
        price="40"
      />
      <PaymentPopup
        open={dateSecond}
        onClose={() => setDateSecond(false)}
        title="VIP-date «Liebesabend»"
        hours="3"
        price="80"
      />
      <PaymentPopup
        open={dateThird}
        onClose={() => setDateThird(false)}
        title="VIP-date «Date in den Sternen»"
        hours="4"
        price="190"
      />
      <div className="sections_group">
        <div
          className="section mcb-section full-screen   bg-cover"
          style={{
            paddingTop: '0px',
            paddingBottom: '0px',
            backgroundColor: '',
            backgroundImage: 'url(style/img/svbg.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: '',
            backgroundSize: '',
            WebkitBackgroundSize: '',
          }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap divider  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner" />
            </div>
            <div className="wrap mcb-wrap divider  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner" />
            </div>
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix align_center" style={{}}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 style={{ marginTop: '15px' }}>Mit 'ner Frau verabredet</h1>
                    <p>
                      Wählen Sie ein ungewöhnliches Date in einem privaten Kinosaal mit Sofas und einer großen
                      Leinwand
                    </p>

                    <br />
                    <strong>
                      Buchen Sie eine Kinohalle mit Sofas für zwei Personen - bereiten Sie den Saal für eine private Stunde
                    </strong>
                    <br />
                    <br />
                    <button className="button main_button fourth_button" onClick={() => setDateFirst(true)}>
                      Saal Buchen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section mcb-section   "
          style={{
            paddingTop: '80px',
            paddingBottom: '80px',
            backgroundColor: '',
            backgroundImage: 'url(style/img/svromantik.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: '',
            backgroundSize: '',
            WebkitBackgroundSize: '',
          }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one-second  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}} />
                </div>
              </div>
            </div>
            <div className="wrap mcb-wrap one-second  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}}>
                    <p className="main-form_header" style={{ textAlign: 'left' }}>
                      Buchen Sie ein Ort in unserem Cafe mit Sofas für einen unvergesslichen Abend
mit Ihrem geliebten Menschen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="section mcb-section    bg-cover"
          id="action"
          style={{
            paddingTop: '80px',
            paddingBottom: '120px',
            backgroundColor: '#2d183a',
            backgroundImage: 'url(style/img/svbg7.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
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
                    <h2>Privates Cafe für zwei: Lösungen für ein perfektes Date</h2>
                    <hr
                      style={{
                        width: '100px',
                        marginBottom: '10px',
                        marginTop: 0,
                        border: 0,
                        borderTop: '2px solid #e5097f',
                      }}
                    />
                    <p>Wir haben für Sie 3 perfekte Lösungen:</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one-third column_pricing_item price-vip">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="style/img/svvip5.jpg" alt="vip-5-new" width={600} height={370} />
                      </div>
                      <h2></h2>
                      <h3>
                        VIP-date
                        <br />
                        Überraschung
                      </h3>
                      <div className="price">
                        <span>40</span>
                        <sup className="currency">€</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          Bei der Bestellung VIP-date
                          <br />
                          Überraschung erhalten Sie:
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Romantische Dekoration der Halle mit Rosenblättern und Kerzen;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Vorauswahl des Lieblingsfilms oder der Musik;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Dinner für zwei (Italienische, japanische, chinesische Küche,
zur Auswahl);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Leckere Nachspeisen: Schokoladenfondue mit Früchten;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Tee oder Kaffee (zur Auswahl);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Dauer: 3 Stunden.
                      </p>
                      <button className="button main_button fourth_button" onClick={() => setDateFirst(true)}>
                        Saal Buchen
                      </button>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-third column_pricing_item price-vip-top">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="style/img/svvip7.jpg" alt="vip-7-new" width={600} height={370} />
                      </div>
                      <h2></h2>
                      <h3>
                        VIP-date
                        <br />
                        «Liebesabend»
                      </h3>
                      <div className="price">
                        <span>80</span>
                        <sup className="currency">€</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          Bei der Bestellung VIP-date
                          <br />
                          «Liebesabend» erhalten Sie:
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Romantische Dekoration der Halle mit Rosenblättern und Kerzen;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Vorauswahl des Lieblingsfilms oder der Musik;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Dinner für zwei (Italienische, japanische, chinesische Küche,
zur Auswahl);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Leckere Nachspeisen: Schokoladenfondue mit Früchten;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Tee oder Kaffee (zur Auswahl);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Überraschung aus "Kino Haus": eine Flasche Champagner
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Dauer: 3 Stunden.
                      </p>
                      <button
                        className="button main_button fourth_button"
                        onClick={() => setDateSecond(true)}
                      >
                        Saal Buchen
                      </button>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-third column_pricing_item price-vip">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="style/img/svvip15.jpg" alt="vip-15-new" width={600} height={370} />
                      </div>
                      <h2></h2>
                      <h3>
                        VIP-date
                        <br />
                        «Date in den Sternen»
                      </h3>
                      <div className="price">
                        <span>190</span>
                        <sup className="currency">€</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          Bei der Bestellung VIP-date
                          <br />
                          «Date in den Sternen» erhalten Sie:
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Megaromantische Dekoration des großen Halle mit Rosenblättern, Kerzen,
                        Kugeln (20 Stk.)
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Dinner für zwei (Italienische, japanische, chinesische Küche,
zur Auswahl);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px' }}>Fotoshooting am Ende des Datums;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Blumenstrauß für die Frau / Lieblingsgericht für den Mann;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Leckere Nachspeisen: Schokoladenfondue mit Früchten;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Tee oder Kaffee (zur Auswahl);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Überraschung aus "Kino Haus": eine Flasche Champagner "Mondoro" oder Wein (zur
                        Auswahl);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Dauer: 4 Stunden;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Vorauswahl des Lieblingsfilms oder der Musik;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Ein Geschenk von "Kino Haus" - "Flusskreuzfahrt auf dem Fluss"
                      </p>
                      <button className="button main_button fourth_button" onClick={() => setDateThird(true)}>
                        Saal Buchen
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section mcb-section   "
          id="contacts"
          style={{ paddingTop: '80px', paddingBottom: '0px', backgroundColor: '#2d183a' }}
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
  );
};

export default HomePage;

