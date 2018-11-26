import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Text, View, TextInput, Button } from "react-native";
import { Content, Form, Item, Input, Label } from "native-base";

const validate = values => {
  const errors = {};
  if (!values.name) errors.name = "Required";
  if (!values.email) errors.email = "Required";
  return errors;
};

const renderInput = ({ input: { onChange, ...restInput } }) => {
  return <Input onChangeText={onChange} {...restInput} />;
};

class Login extends Component {
  submit = values => console.log("Submitting ", values);

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={{ padding: 20 }}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
          </Item>
          <Field name="name" component={renderInput} />

          <Label>password</Label>
          <Field name="email" component={renderInput} />

          <Button title="Go" onPress={handleSubmit(this.submit)} />
        </Form>
      </View>
    );
  }
}

export default reduxForm({
  form: "login",
  validate
})(Login);
