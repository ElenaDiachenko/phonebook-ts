import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { register } from 'redux/auth/auth-operations';
import { Button, Label, Input, Message, Title } from './Form.styled';
// import { Notify } from 'notiflix';
// import ClipLoader from 'react-spinners/ClipLoader';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name is not valid'
    ),
  email: yup
    .string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
  password: yup
    .string()
    .min(2, 'Password has to be longer than 6 characters!')
    .required('Password is required!'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm, setSubmitting }) => {
    setSubmitting(false);
    console.log(value);
    dispatch(register(value));
    resetForm();
  };

  return (
    <>
      <Title>Sign Up</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <Label>
                Name
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your username"
                />
                <Message name="name" component="span" />
              </Label>
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
                  placeholder="Enter your password (min 7 symbol)"
                />
                <Message name="password" component="span" />
              </Label>
              <Button type="submit" disabled={isSubmitting}>
                Login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
