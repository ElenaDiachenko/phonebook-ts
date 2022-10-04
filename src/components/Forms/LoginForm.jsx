import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Button, Label, Input, Message, Title } from './Form.styled';
import { logIn } from 'redux/auth/auth-operations';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
  password: yup
    .string()
    .min(6, 'Password has to be longer than 6 characters!')
    .required('Password is required!'),
});

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
