import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MarkdownView } from './View';
import { MarkdownSkeleton } from './Skeleton';

export function Markdown({ input, loading, meta = {}, placeholder }) {
  const { error, touched } = meta;

  const handleChange = (data) => {
    input.onChange(data);
  };

  return (
    <Container>
      {loading ? (
        <MarkdownSkeleton />
      ) : (
        <MarkdownView
          placeholder={placeholder}
          handleChange={handleChange}
          error={error}
          touched={touched}
          input={input}
        />
      )}
    </Container>
  );
}

Markdown.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
