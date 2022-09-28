import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Button, Label, Input, Message } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';
import { Notify } from 'notiflix';
import { getContacts } from '../../redux/selectors';
const schema = yup.object().shape({
  name: yup
    .string()
    .required('This field is Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name is not valid'
    ),
  number: yup
    .string()
    .required('This field is Required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number is not valid'
    ),
});

const initialValues = {
  name: '',
  number: '',
};
const options = {
  position: 'center-top',
  fontSize: '20px',
  width: '450px',
  borderRadius: '4px',
  closeButton: true,
  info: {
    background: '#000000',
    color: '#ffffff',
    notiflixIconColor: 'rgba(225,225,225,0.5)',
  },
};

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addValidateValues = async values => {
    if (contacts.find(contact => contact.name === values.name)) {
      Notify.info(`${values.name} is already in contacts`, options);
      return;
    }
    try {
      // await dispatch(addContact(values));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    await addValidateValues(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          Name
          <Input type="text" name="name" />
          <Message name="name" component="span" />
        </Label>

        <Label>
          Number
          <Input type="tel" name="number" />
          <Message name="number" component="span" />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
