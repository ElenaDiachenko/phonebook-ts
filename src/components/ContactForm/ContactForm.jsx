import { Formik, Form } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Button, Label, Input, Message } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';

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

// const onSubmit = ({ name, number }) => {
//   dispatch(addContact)
// }

// const onSubmit= ({ name, number }) => {
//   const newContact = { id: nanoid(), name, number };

//   contacts.find(contact => contact.name === name)
//     ? Notify.info(`${name} is already in contacts`, {
//         position: 'center-top',
//         fontSize: '20px',
//         width: '450px',
//         borderRadius: '4px',
//         closeButton: true,
//         info: {
//           background: '#000000',
//           color: '#ffffff',
//           notiflixIconColor: 'rgba(225,225,225,0.5)',
//         },
//       })
//     : setContacts(prevContacts => [newContact, ...prevContacts]);
// };

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    // console.log(values);
    // onSubmit(values);
    dispatch(addContact(values));
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
