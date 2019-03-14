import React from "react";
import { Field, reduxForm } from "redux-form";

const SampleForm = props => {
  const TextField = ({ input, meta }) => {
    console.log(meta);
    return <input {...input} />;
  };

  const onSubmit = formProps => {
    console.log(formProps);
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="fieldA" component={TextField} />
    </form>
  );
};

const validate = formValues => {
  const errors = {};
  if (!formValues.fieldA) {
    errors.fieldA = "You must enter a filedA";
  }
  return errors;
};

export default reduxForm({
  form: "sampleForm",
  validate
})(SampleForm);
