import { FC } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import { RiEdit2Line } from 'react-icons/ri';
import { useWindowResize } from 'hooks/useWindowResize';
import { Button, Label, Input, Message } from '../Forms/Form.styled';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import ClipLoader from 'react-spinners/ClipLoader';
import { schema } from 'helpers/schema';
import { IContact } from 'interfaces/IContact';
import { IFormValues } from 'interfaces/IFormValues';

interface IProps {
  id: IContact['id'];
  onClose: () => void;
}

export const ContactEditor: FC<IProps> = ({ onClose, id }) => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const currentContact = contacts.find(contact => contact.id === id);
  const { width } = useWindowResize();

  const initialValues = currentContact
    ? {
        name: currentContact.name,
        number: currentContact.number,
      }
    : {
        name: '',
        number: '',
      };

  const handleSubmit = async (
    values: IFormValues,
    { resetForm, setSubmitting }: FormikHelpers<IFormValues>
  ) => {
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
