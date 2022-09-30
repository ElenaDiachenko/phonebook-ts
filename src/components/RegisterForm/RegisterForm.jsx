import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Button, Label, Input, Message } from './RegisterForm.styled';
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
    .min(6, 'Password has to be longer than 6 characters!')
    .required('Password is required!'),
});

const initialValues = {
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setSubmitting(false);
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
              Name
              <Input type="text" name="name" />
              <Message name="name" component="span" />
            </Label>
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
