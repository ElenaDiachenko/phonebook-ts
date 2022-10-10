import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import toast from 'react-hot-toast';
import { RiEdit2Line } from 'react-icons/ri';
import { useWindowResize } from 'hooks/useWindowResize';
import { Button, Label, Input, Message } from '../Forms/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import ClipLoader from 'react-spinners/ClipLoader';
import { schema } from 'helpers/schema';

export const ContactEditor = ({ onClose, id }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const currentContact = contacts.find(contact => contact.id === id);
  const { width } = useWindowResize();

  const initialValues = {
    name: currentContact.name,
    number: currentContact.number,
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    await dispatch(editContact({ id, ...values }));
    toast.success(`Contact edited successfully`);
    onClose();
    setSubmitting(false);
    resetForm();
  };

  return (
    <>
      <h2>Edit contact</h2>
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
                Number
                <Input type="tel" name="number" />
                <Message name="number" component="span" />
              </Label>
              <Button type="submit" disabled={isSubmitting}>
                {!isSubmitting &&
                  (width < 768 ? <RiEdit2Line size={20} /> : 'Edit contact')}
                {isSubmitting && <ClipLoader color="#ffffff" size={16} />}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

ContactEditor.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
