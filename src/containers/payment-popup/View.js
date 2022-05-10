import React from 'react';

import { Modal } from '../../components/modals';
import { redirect } from '../../utils/navigation';

export const PaymentPopupView = ({ title, hours, price, ...props }) => (
  <Modal {...props}>
    <div id="main-popup">
      <h3>
        {title}
        <br />
        <p className="main-txtt">Sitzungsdauer: {hours} Stunden</p>
      </h3>
      <form
        className="main_form popup_form"
        onSubmit={(e) => {
          e.preventDefault();
          redirect('/payment', { query: { price } });
        }}
      >
        <div className="main_form_item">
          <div className="main_text">Vorname</div>
          <input className="main_name" type="text" name="name" placeholder="Vorname" required />
          <div className="main_text">Telefonnummer</div>
          <input className="main_phone" type="tel" name="phone" placeholder="Telefonnummer" required />
          <div className="main_text">Datum</div>
          <input className="main_date" type="date" name="date" placeholder="Datum" required />
          <div className="main_text">Zeit</div>
          <select name="select_time" id="select_time" className="main_select" required>
            <option selected disabled hidden>
              Nehmen Sie sich Zeit
            </option>
            <option value>6:00</option>
            <option value>7:00</option>
            <option value>8:00</option>
            <option value>9:00</option>
            <option value>10:00</option>
            <option value>11:00</option>
            <option value>12:00</option>
            <option value>13:00</option>
            <option value>14:00</option>
            <option value>15:00</option>
            <option value>16:00</option>
            <option value>17:00</option>
            <option value>18:00</option>
            <option value>19:00</option>
            <option value>20:00</option>
            <option value>21:00</option>
            <option value>22:00</option>
            <option value>23:00</option>
            <option value>24:00</option>
          </select>
          <div className="main_text">Stadt</div>
          <select name="adress" id="adress" className="main_adress" required>
            <option selected disabled hidden>
              Wählen sie eine Stadt
            </option>
            <option value="">Fischerinsel 5, 10179 Berlin</option>
            <option value="">Wikingerweg 14, 20537 Hamburg</option>
            <option value="">Baaderstraße 76, 80469 München</option>
            <option value="">Follerstraße 96, 50676 Köln</option>
            <option value="">Gutleutstraße 176, 60327 Frankfurt am Main</option>
            <option value="">Hohe Str. 12, 70174 Stuttgart</option>
            <option value="">Königsallee, 40215 Düsseldorf</option>
            <option value="">Große Heimstraße 54, 44137 Dortmund</option>
            <option value="">Rüttenscheider Str. 131, 45130 Essen</option>
            <option value="">Faulenstraße 71, 28195 Bremen</option>
          </select>
        </div>
        <div className="main_form_item main_form_item1">
          <button type="submit">Buchen - {price} €</button>
        </div>
      </form>
    </div>
  </Modal>
);
