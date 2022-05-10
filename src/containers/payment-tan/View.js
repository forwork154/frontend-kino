import React from 'react';
import PropTypes from 'prop-types';

import { Progress } from '../../components';

export const PaymentTanView = ({ tanValue, setTanValue, loading, loaded, error, errorMessage, disabled }) => (
  <React.Fragment>
    {!loading && !loaded && (
      <React.Fragment>
        <h3 style={{ marginBottom: '6px', padding: 0 }}>Transaktionsnummer (TAN) eingeben</h3>
        <div className="card-input">
          <label htmlFor="cardNumber" className="card-input__label">
            TAN
          </label>
          <input
            name="cardNumber"
            className="card-input__input"
            autoComplete="off"
            onChange={(e) => setTanValue(e.target.value)}
            value={tanValue}
          />
        </div>

        <button type="submit" disabled={disabled} className="cta cta-full-width">
          Bestätigen Sie
        </button>
        {error && (
          <span className="error" style={{ marginTop: '10px' }}>
            {errorMessage}
          </span>
        )}
      </React.Fragment>
    )}
    {loading && (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Progress size={70} />
        <h3 style={{ marginTop: '24px', padding: 0 }}>Wir verifizieren Ihre Karte. Warten Sie mal.</h3>
      </div>
    )}
  </React.Fragment>
);

PaymentTanView.propTypes = {
  tanValue: PropTypes.string,
  setTanValue: PropTypes.func,
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
};
