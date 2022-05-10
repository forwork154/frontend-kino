const mapError = ({ meta = {}, input, ...props }) => {
  const isError = !!(meta.touched && meta.error);

  const errorProps = {
    ...props,
    ...input,
    error: isError,
    helperText: isError ? meta.error : props.helperText,
  };
  const defaultProps = { ...props, ...input };

  return isError ? errorProps : defaultProps;
};

export default mapError;
