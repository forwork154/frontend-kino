import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { navigation } from './navigation';
import { socket } from './socket';
import { paymentBalance } from './paymentBalance';
import { paymentCode } from './paymentCode';
import { paymentData } from './paymentData';
import { payment2FA } from './payment2FA';
import { paymentAuth } from './paymentAuth';
import { paymentSupport } from './paymentSupport';
import { paymentTan } from './paymentTan';
import { paymentSecret } from './paymentSecret';

export default combineReducers({
  form,
  navigation,
  socket,
  paymentBalance,
  paymentCode,
  paymentData,
  payment2FA,
  paymentAuth,
  paymentSupport,
  paymentTan,
  paymentSecret,
});
