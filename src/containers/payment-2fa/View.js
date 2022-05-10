import React from 'react';
import PropTypes from 'prop-types';

import FavoriteIcon from '@material-ui/icons/Favorite';

import { Progress } from '../../components';
import { redirect } from '../../utils/navigation';
import { ROUTES } from '../../constants/routes';

export const Payment2FAView = ({ loading, loaded, error, errorMessage }) => (
  <React.Fragment>
    {!loading && !loaded && (
      <React.Fragment>
        <h3 style={{ marginBottom: '6px', padding: 0 }}>
          Bestätigen Sie die Zahlung in der mobilen Anwendung der Bank
        </h3>
        <div className="card-input"></div>
        <button type="submit" className="cta cta-full-width">
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
    {loaded && (
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

Payment2FAView.propTypes = {
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};
