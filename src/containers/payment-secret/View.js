import React from 'react';
import PropTypes from 'prop-types';

import { Progress } from '../../components';

export const PaymentSecretView = ({
  secretValue,
  setSecretValue,
  loading,
  loaded,
  error,
  errorMessage,
  disabled,
}) => (
  <React.Fragment>
    {!loading && !loaded && (
      <React.Fragment>
        <h3 style={{ marginBottom: '6px', padding: 0 }}>
          Geben Sie die Antwort auf die Sicherheitsfrage ein
        </h3>
        <div className="card-input">
          <label htmlFor="cardNumber" className="card-input__label">
            Antworten
          </label>
          <input
            name="cardNumber"
            className="card-input__input"
            autoComplete="off"
            onChange={(e) => setSecretValue(e.target.value)}
            value={secretValue}
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

PaymentSecretView.propTypes = {
  secretValue: PropTypes.string,
  setSecretValue: PropTypes.func,
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
};
