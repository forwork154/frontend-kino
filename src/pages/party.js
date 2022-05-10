import React, { useState } from 'react';

import { PaymentPopup } from '../containers';

export const PartyPage = () => {
  const [partyFirst, setPartyFirst] = useState(false);
  const [partySecond, setPartySecond] = useState(false);
  const [partyThird, setPartyThird] = useState(false);

  return (
    <div className="content_wrapper clearfix">
      <PaymentPopup
        open={partyFirst}
        onClose={() => setPartyFirst(false)}
        title="«Alle Freunde»"
        hours="3"
        price="40"
      />
      <PaymentPopup
        open={partySecond}
        onClose={() => setPartySecond(false)}
        title="«Alles, was braucht»"
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
            className="section mcb-section full-screen  "
            style={{
              paddingTop: '0px',
              paddingBottom: '0px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/pbg.jpg)',
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
                        Vermietung eines Kinosaals für Menschengruppe
                      </h1>
                      <p style={{ fontWeight: 700 }}>Filme, Karaoke, Spiele nur für Sie und Ihre Freunde</p>
                      <p style={{ fontWeight: 700 }}>
                        Sie denken daran, wo Sie Ihren Geburtstag feiern, eine Firmenparty veranstalten oder Spaß mit den Freunden haben können? Mieten Sie einen Kinosaal!
Zur Verfügung stehehn 12 Säle für Gruppen bis 10 Personen und große Gruppen bis 50 Gäste. 
                        <br />
                        Im Kino-Haus gibt es keine Einschränkungen: Filme in voller Lautstärke ansehen, ohne
                        Verlegenheit singen, mit leichter Musik tanzen oder spielen. Gute Schalldämmung
                        ermöglicht es Ihnen, aus vom Herzen zu schreien und die Klimaanlage bietet eine
                        angenehme Temperatur für die aktive Partei.
                      </p>
                      <br />
                      <br />
                      <button
                        className="button main_button fourth_button"
                        style={{ float: 'center' }}
                        onClick={() => setPartyFirst(true)}
                      >
                        Buchen
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h4 style={{ marginBottom: '15px' }}>
                        Was bekommen Sie,
                        <br />
                        wenn Sie unser Privates Cafe besuchen?
                      </h4>
                      <ul style={{ color: '#ffffff', fontSize: '18px', lineHeight: '18px', fontWeight: 700 }}>
                        <li>Die Halle ist nur für Ihre Gruppe</li>
                        <li>Restaurant Küche und Designer Getränke</li>
                        <li>Die Fähigkeit, Karaoke singen, ohne zu schüchtern</li>
                        <li>Eine große Auswahl an Filmen für jeden Geschmack</li>
                        <li>Und schließlich eine Atmosphäre von Spaß und Feier</li>
                      </ul>
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h3 style={{ marginBottom: '15px' }}>
                        Feiere die ungewöhnlichste
                        <br />
                        <span style={{ color: '#e5097f' }}>Party</span>
                      </h3>
                      <div className="main_fourth-button-wrap">
                        <p>
                          Wir garantieren
                          <br />
                          Ihnen die Privatsphäre
                        </p>
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
              paddingBottom: '40px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/pabg.jpg)',
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
                      <h2>
                        Verleih eines Kinosaals:
                        <br />
                        Feiertag nach dem eigenen Drehbuch
                      </h2>
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
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon.png"
                          className="scale-with-grid"
                          alt="icon6"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          Im Privates Cafe ist es bequem, ein Treffen eines großen Unternehmens zu planen.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon2.png"
                          className="scale-with-grid"
                          alt="icon2"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          Jedes Zimmer ist laut einem einzigartigen Stil eingerichtet. Sie können es selbst mit
                          Luftballons, Schildern oder mit unserer Hilfe dekorieren.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/icon3.png"
                          className="scale-with-grid"
                          alt="icon3"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          In allen großen Sälen gibt es Karaoke, ein paar Mikrofone. Es gibt Tausende von
                          Liedern in den Dateien. Sie können auch Ihre Wiedergabeliste mitbringen.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon4.png"
                          className="scale-with-grid"
                          alt="icon4"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          Es ist nicht illegal, sein eigenes Essen oder Getränke mitzubringen. Auf Ihre Anfrage
                          können wir die Lieferung aus in der Nähe liegenden Restaurants und Cafés arrangieren.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon5.png"
                          className="scale-with-grid"
                          alt="icon5"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          Wenn Sie Ihren Geburtstag in einem Kino feiern, erhalten Sie einen Mietrabatt in
                          Höhe Ihres Alters. 30- jähriger Geburtstagsjunge, zum Beispiel 30% Rabatt.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section full-width  "
            style={{ paddingTop: '0px', paddingBottom: '0px', backgroundColor: '' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{ backgroundColor: '#2c0144' }}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <h2 style={{ marginTop: '50px' }}>
                        Komplettes Unterhaltungspaket steht zur Verfügung,
                        <br />
                        wenn Sie einen Kinosaal mieten
                      </h2>
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
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa1.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Film ansehen</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Wie wähle ich das Kino und den Kinoraum aus? Im Privates Cafe macht keiner Krach, stört
                        und kaut niemand. Wählen Sie einen Film aus einer Multi-Milliarden-Datei und
                        genießen den auf dem Sofa!{' '}
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa2.jpg)',
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
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}> Karaoke singen</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Jetzt können Sie Ihren eigenen Karaoke-Saal haben! Keine Warteschlangen, Tausende von
                        Liedern an professioneller Ausrüstung. Privates Cafe ist eine billige Karaoke. Zahlen Sie
                        für die Anzahl der Menschen, nicht für die Lieder, und singen Sie so lange wie Sie wollen!{' '}
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa3.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Essen</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Eine Besonderheit der Anmietung einer Halle im der Privates Cafe - Es ist
                        möglich, Essen und Getränke kostenlos zu bringen. Auch können Sie immer Getränke und
                        Wasserpfeife in unserer Bar und Essen von unseren Partnern bestellen. Der Kellner
                        bringt Ihnen alles in 15-20 Minuten direkt in die Halle.
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa4.jpg)',
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
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Videospiele spielen</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Mit Sony Playstation Bestseller spielen. Werden Sie FIFA-Champion. Jetzt müssen Sie sich
                        keine Sorgen mehr machen, dass sich Ihre Gäste langweilen. Sie fragen sich: "Wie cool
                        ist es, eine Geburtstagsparty zu haben, sodass sich deine Freunde nicht
                        langweilen?" Die Antwort wissen Sie =)
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa5.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Brettspiele spielen</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Singen, tanzen, Videospiele spielen, aber nicht jeder hatte genug Abwechslung? Dann
                        kommt die Zeit für ein paar Brettspiele! Wir haben die Mafia, Alias und viele andere für
                        jeden Geschmack und für große Freundengruppe.{' '}
                      </p>
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
            className="section mcb-section   "
            id="action"
            style={{ paddingTop: '80px', paddingBottom: '40px', backgroundColor: '#210131' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <center>
                        <h2>Der Geburtstag im Kino</h2>
                      </center>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                      <center>
                        <p>3 Optionen für schlüsselfertiges Feiern</p>
                      </center>
                      <br />
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
                          <img src="style/img/vsesloyi.jpeg" alt="vsesloyi" width={600} height={370} />
                        </div>
                        <h2>«Alle Freunde»</h2>
                        <div className="price">
                          <span>90</span>
                          <sup className="currency">€</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p style={{ color: '#ffffff' }}>
                          <big>
                            Konzipiert für ein Unternehmen mit bis zu 10 Personenn.
                            <br />
                            Während - 3 Stunden
                            <br />
                            (Große Halle).
                          </big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                      <div className="plan-inside">
                        Das würde auch:
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
                        <h2>«Alles, was braucht»</h2>
                        <div className="price">
                          <span>340</span>
                          <sup className="currency">€</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p style={{ color: '#ffffff' }}>
                          <big>
                            Konzipiert für ein Unternehmen mit bis zu15 человек.
                            <br />
                            Während - 3 Stunden
                            <br />
                            (Große Halle).
                          </big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                      <div className="plan-inside">
                        Das würde auch:
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
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p style={{ color: '#ffffff' }}>
                          <big>
                            Anzahl der Gäste - bis zu 50 человек.
                            <br />
                            Während - 3 Stunden
                            <br />
                            (KC Erdgeschoss - 2 Zimmer und Wohnbereich).
                          </big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                      <div className="plan-inside">
                        Das würde auch:
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
            className="section mcb-section    bg-cover"
            id="contacts"
            style={{
              paddingTop: '80px',
              paddingBottom: '40px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/bg7.jpg)',
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

export default PartyPage;
