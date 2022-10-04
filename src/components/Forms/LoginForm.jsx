import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Button, Label, Input, Message } from './Form.styled';
import { logIn } from 'redux/auth/auth-operations';
// import { Notify } from 'notiflix';
// import ClipLoader from 'react-spinners/ClipLoader';

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
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <Label>
              E-mail
              <Input type="email" name="email" />
              <Message name="email" component="span" />
            </Label>

            <Label>
              Password
              <Input type="password" name="password" />
              <Message name="password" component="span" />
            </Label>
            <Button type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
