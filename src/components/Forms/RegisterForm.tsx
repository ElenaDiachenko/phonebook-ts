import { useAppDispatch } from 'redux/hooks';
import { Formik, Form, FormikHelpers } from 'formik';
import { register } from 'redux/auth/auth-operations';
import { Button, Label, Input, Message, Title } from './Form.styled';
import { schema } from 'helpers/register-schema';
import { IFormRegisterValues } from 'interfaces/IFormValues';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (
    value: IFormRegisterValues,
    { resetForm, setSubmitting }: FormikHelpers<IFormRegisterValues>
  ) => {
    setSubmitting(false);
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
                SignUp
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
