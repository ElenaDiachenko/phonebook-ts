import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button, Label, Input, Message, Title } from './Form.styled';
import { logIn } from 'redux/auth/auth-operations';
import { schema } from 'helpers/login-schema';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    setSubmitting(false);
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <>
      <Title>Log In</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <Label>
                Email adress
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email adress"
                />
                <Message name="email" component="span" />
              </Label>

              <Label>
                Password
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <Message name="password" component="span" />
              </Label>
              <Button type="submit" disabled={isSubmitting}>
                LogIn
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
