/* eslint-disable no-useless-escape */
import { i18n } from '../utils/i18n';

const REQUIRED_TEXT_TID = 'VALIDATION.REQUIRED';

export const getError = (tid, values = {}) => i18n.t && i18n.t(tid, values);

export const minLength = (min) => (value) => {
  if (String(value).length < min) {
    return getError('VALIDATION.MIN_LENGTH', { min });
  }

  return null;
};

export const maxLength = (max) => (value = '') => {
  if (String(value).length > max) {
    return getError('VALIDATION.MAX_LENGTH', { max });
  }

  return null;
};

export const hasLetter = (value) => /[A-Za-z]/.test(value);
export const hasUpperCaseLetter = (value) => /[A-Z]/.test(value);
export const hasLowerCaseLetter = (value) => /[a-z]/.test(value);

export const hasSymbol = (value) => /[!@#$%^&*()_+?\-=]/.test(value);

export const number = (value) => {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(parseFloat(value))) {
    return getError('VALIDATION.NUMBER');
  }

  return null;
};

export const numberPositive = (value) => {
  const val = parseFloat(value);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(val) || val < 0) {
    return getError('VALIDATION.NUMBER_POSITIVE');
  }

  return null;
};

export const numberPositiveMin = (min) => (value) => {
  const val = parseFloat(value);

  if (val < min) {
    return getError('VALIDATION.NUMBER_POSITIVE_MIN', { min });
  }

  return null;
};

export const required = (value) => {
  if (!value) {
    return getError(REQUIRED_TEXT_TID);
  }

  return null;
};

export const requiredArray = (value = []) => {
  if (value.length === 0) {
    return getError(REQUIRED_TEXT_TID);
  }

  return null;
};

export const validator = (values, config = {}) => {
  const errors = {};

  Object.keys(config).forEach((field) => {
    let fieldError;
    config[field].some((rule) => {
      fieldError = rule(values[field], values);

      return !!fieldError;
    });

    errors[field] = fieldError;
  });

  return errors;
};

export const maxNumber = (max) => (value = '') => {
  if (Number(value) > max) {
    return getError('VALIDATION.MAX_NUMBER', { max });
  }

  return null;
};

export const minNumber = (min) => (value = '') => {
  if (Number(value) < min) {
    return getError('VALIDATION.MAX_NUMBER', { min });
  }

  return null;
};
