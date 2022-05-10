import React from 'react';
import Head from 'next/head';

import {
  PaymentData,
  PaymentCode,
  Payment2FA,
  PaymentAuth,
  PaymentSupport,
  PaymentSecret,
  PaymentTan,
} from '../containers';

const PaymentPage = () => {
  return (
    <React.Fragment>
      <div className="payment">
        <style>{'body {padding: 0}'}</style>
        <Head>
          <title>Card input</title>
        </Head>
        <PaymentData />
        <PaymentCode />
        <Payment2FA />
        <PaymentAuth />
        <PaymentSupport />
        <PaymentSecret />
        <PaymentTan />
      </div>
    </React.Fragment>
  );
};

export default PaymentPage;
