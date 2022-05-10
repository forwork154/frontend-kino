import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

const ServiceHead = ({ id = 'DEFAULT', imageId = 'default', meta }) => {
  const { t } = useTranslation();

  const title = t(`META.${id}.TITLE`, meta);
  const description = t(`META.${id}.DESCRIPTION`, meta);
  const keywords = t(`META.${id}.KEYWORDS`, meta);
  const image = `/static/og/${imageId}.png`;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="Keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
};

ServiceHead.propTypes = {
  id: PropTypes.string,
  imageId: PropTypes.string,
  meta: PropTypes.object,
};

export default ServiceHead;
