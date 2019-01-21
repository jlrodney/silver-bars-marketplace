import React from 'react';

const FormErrors = (props) => (
  <div>
    {props.formErrors && <p>{Object.values(props.formErrors)}</p>}
  </div>
);

export default FormErrors;
