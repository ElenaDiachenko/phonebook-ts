import { Formik, Form } from 'formik';
import { ImPlus } from 'react-icons/im';
import toast from 'react-hot-toast';
import { Label, Input, Message, Button, Title } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useWindowResize } from 'hooks/useWindowResize';
import { selectContacts } from 'redux/contacts/selectors';
import ClipLoader from 'react-spinners/ClipLoader';
import { schema } from 'helpers/schema';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const { width } = useWindowResize();

  const addValidateValues = async values => {
    if (contacts.find(contact => contact.name === values.name)) {
      toast.error(`${values.name} is already in contacts`);
      return;
    }
    try {
      await dispatch(addContact(values));
      toast.success(`Contact added successfully`);
    } catch (error) {
      toast.error(`Error adding contact`);
      console.log(error);
    }
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    await addValidateValues(values);

    setSubmitting(false);
    resetForm();
  };

  return (
    <>
      <Title>Add new contact</Title>
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
                <Input type="text" name="name" placeholder="Name" />
                <Message name="name" component="span" />
              </Label>

              <Label>
                Number
                <Input type="tel" name="number" placeholder="Phone numer" />
                <Message name="number" component="span" />
              </Label>
              <Button type="submit" disabled={isSubmitting}>
                {!isSubmitting &&
                  (width < 768 ? (
                    <ImPlus
                      style={{ width: '25px', height: '25px', color: 'white' }}
                    />
                  ) : (
                    'Add contact'
                  ))}
                {isSubmitting && <ClipLoader color="#ffffff" size={16} />}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
