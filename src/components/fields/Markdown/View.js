import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SimpleMDE from 'react-simplemde-editor';

import NoSsr from '@material-ui/core/NoSsr';

import { spacing, colors } from '../../../theme';
import { Error as ErrorComponent } from '../../index';

export const MarkdownView = ({ handleChange, input, touched, placeholder, error }) => (
  <NoSsr>
    <Markdown
      className="mk-l"
      options={{
        spellChecker: false,
        placeholder,
      }}
      onChange={(data) => handleChange(data)}
      value={input.value}
      events={{
        blur: () => input.onBlur(),
        focus: (data, event) => input.onFocus(event),
      }}
      toolbar={['bold', 'italic', 'heading', '|', 'quote']}
    />
    {touched && <Error error={error} />}
  </NoSsr>
);

MarkdownView.propTypes = {
  handleChange: PropTypes.func,
  touched: PropTypes.bool,
  error: PropTypes.string,
  input: PropTypes.object,
  placeholder: PropTypes.string,
};

const Error = styled(ErrorComponent)`
  && {
    margin-top: ${spacing(2)};
  }
`;
const Markdown = styled(SimpleMDE)`
  && {
    width: 100%;
    height: 370px;
    .editor-statusbar {
      display: none;
    }
    .editor-toolbar {
      border-left: 1px solid ${colors.gray};
      border-top: 1px solid ${colors.gray};
      border-right: 1px solid ${colors.gray};
    }
    .CodeMirror {
      border: 1px solid ${colors.gray};
    }
  }
`;
