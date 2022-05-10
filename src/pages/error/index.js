import React from 'react';
import PropTypes from 'prop-types';
import Head from '../_head';

import { PAGE_TYPE } from '../../constants/meta';
import { PageLayout, SectionLayout, ContentLayout } from '../../components/layouts';
import { Error } from '../../containers';

const ErrorPage = ({ statusCode }) => {
  return (
    <PageLayout align="center">
      <Head id={PAGE_TYPE.ERROR} />
      {statusCode ? (
        <Error status={statusCode} />
      ) : (
        <React.Fragment>
          <ContentLayout>
            <SectionLayout indent>App error. Contact with support</SectionLayout>
          </ContentLayout>
        </React.Fragment>
      )}
    </PageLayout>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
};

export default ErrorPage;
