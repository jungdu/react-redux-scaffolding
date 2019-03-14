import React from "react";
import { Field, reduxForm } from "redux-form";

const SampleForm = props => {
  const TextField = ({ input }) => {
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

export default reduxForm({
  form: "sampleForm"
})(SampleForm);
