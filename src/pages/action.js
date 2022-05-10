import React, { useState } from 'react';

import { PaymentPopup } from '../containers';

const HomePage = () => {
  const [dateFirst, setDateFirst] = useState(false);
  const [dateSecond, setDateSecond] = useState(false);
  const [dateThird, setDateThird] = useState(false);
  const [partyFirst, setPartyFirst] = useState(false);
  const [partySecond, setPartySecond] = useState(false);
  const [partyThird, setPartyThird] = useState(false);

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
      <PaymentPopup
        open={partyFirst}
        onClose={() => setPartyFirst(false)}
        title="«Alle Freunde»"
        hours="3"
        price="250"
      />
      <PaymentPopup
        open={partySecond}
        onClose={() => setPartySecond(false)}
        title="«Alles, was man braucht»"
        hours="3"
        price="340"
      />
      <PaymentPopup
        open={partyThird}
        onClose={() => setPartyThird(false)}
        title="«Alles und sofort»"
        hours="3"
        price="430"
      />
      <div className="sections_group">
        <div className="entry-content" itemProp="mainContentOfPage">
          <div
            className="section mcb-section action-main-page bg-cover"
            style={{
              paddingTop: '220px',
              paddingBottom: '0px',
              backgroundImage: 'url(https://msk.kinohouse.me/wp-content/uploads/2018/04/main_first_bg.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
            }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center">
                      <h2>Angebote für ein perfektes Date</h2>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                      <p>Wir haben 3 perfekte Varianten für Sie:</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img
                            src="https://msk.kinohouse.me/wp-content/uploads/2018/05/vip-5-new.jpg"
                            alt="vip-5-new"
                            width={600}
                            height={370}
                          />
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
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          Bei der Bestellung VIP-date
                          <br />
                          Überraschung erhalten Sie:
                        </p>
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
                          Dinner für zwei (Italienische, japanische, chinesische Küche,zur Auswahl);
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
                        <button
                          className="button main_button fourth_button"
                          style={{ float: 'center' }}
                          onClick={() => setDateFirst(true)}
                        >
                          Saal Buchen
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip-top">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/vip-7-new.jpeg" alt="vip-7-new" width={600} height={370} />
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
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          Bei der Bestellung VIP-date
                          <br />
                          «Liebesabend» erhalten Sie:
                        </p>
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
                          Dinner für zwei (Italienische, japanische, chinesische Küche,zur Auswahl);
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
                          style={{ float: 'center' }}
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
                          <img src="style/img/vip-15-new.jpeg" alt="vip-15-new" width={600} height={370} />
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
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          Bei der Bestellung VIP-date
                          <br />
                          «Date in den Sternen» erhalten Sie:
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Megaromantische Dekoration des großen Halle mit
Rosenblättern, Kerzen, Kugeln (20 Stk.);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Dinner für zwei (Italienische, japanische, chinesische Küche, zur Auswahl);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px' }}>
                          Fotoshooting am Ende des Datums;
                        </p>
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
                        <button
                          className="button main_button fourth_button"
                          onClick={() => setDateThird(true)}
                        >
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
            className="section mcb-section    bg-cover"
            style={{
              paddingTop: '80px',
              paddingBottom: '80px',
              backgroundImage: 'url(style/img/bg6.jpeg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
            }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center">
                      <h2>Ruhelösungen mit dem Unternehmen</h2>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                      <p>3 Optionen für schlüsselfertiges Feiern</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/vsesloyi.jpeg" alt="vsesloyi" width={600} height={370} />
                        </div>
                        <h2>«Mit allen Freunden»</h2>
                        <div className="price">
                          <span>250</span>
                          <sup className="currency">€</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          Passt für eine Veranstaltung maximal für 10 Personen.
                          <br />
                          Zeit - 3 Stunden
                          <br />
                          (Große Halle).
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        Das steht auch zur Verfügung:
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Musikvideos und Filme ansehen;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>PlayStation;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Brettspiele (große Auswahl);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          1 gute für jeden Geschmack; Tee/ Kaffee für die Gäste
                        </p>
                        <br />
                        <button
                          className="button main_button fourth_button"
                          style={{ float: 'center' }}
                          onClick={() => setPartyFirst(true)}
                        >
                          Saal Buchen 
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip-top">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/vsechtonado.jpeg" alt="vsechtonado" width={600} height={370} />
                        </div>
                        <h2>«Alles, was man braucht»</h2>
                        <div className="price">
                          <span>340</span>
                          <sup className="currency">€</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          Passt für eine Veranstaltung maximal für 15 Personen.
                          <br />
                          Zeit - 3 Stunden
                          <br />
                          (Große Halle).
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        Das steht auch zur Verfügung:
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Musikvideos und Filme ansehen;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>PlayStation;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Brettspiele (große Auswahl);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          2 gute für jeden Geschmack; Tee/ Kaffee für die Gäste
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Snacks (Chips/Popcorn im Sortiment) und unbegrenzte Cola;
                        </p>
                        <br />
                        <button
                          className="button main_button fourth_button"
                          style={{ float: 'center' }}
                          onClick={() => setPartySecond(true)}
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
                          <img src="style/img/vseisrazu.jpeg" alt="vseisrazu" width={600} height={370} />
                        </div>
                        <h2>«Alles und sofort»</h2>
                        <div className="price">
                          <span>430</span>
                          <sup className="currency">€</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          Anzahl der Gäste - bis zu 50 Personen.
                          <br />
                          Zeit - 3 Stunden
                          <br />
                          (KC Erdgeschoss - 2 Zimmer und eine Halle).
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        Das steht auch zur Verfügung:
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Musikvideos und Filme ansehen;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>PlayStation;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Brettspiele (große Auswahl);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Tee/Kaffee für die Gäste;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Snacks (Chips/Popcorn im Sortiment) und unbegrenzte Cola;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Dekoration Kugeln (15 Stk.);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Geburtstagskuchen;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Fotoshooting;</p>
                        <br />
                        <button
                          className="button main_button fourth_button"
                          style={{ float: 'center' }}
                          onClick={() => setPartyThird(true)}
                        >
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
            className="section mcb-section  main_seven "
            id="contacts"
            style={{ paddingTop: '80px', paddingBottom: '0px', backgroundColor: '#2d183a' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix">
                      <h2>Wie man uns findet?</h2>
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

export default HomePage;
