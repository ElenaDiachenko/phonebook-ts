import { FC, useEffect, useState } from 'react';
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
import { IFormEditValues } from 'interfaces/IFormValues';

interface IProps {
  id: IContact['id'];
  onClose: () => void;
}

export const ContactEditor: FC<IProps> = ({ onClose, id }) => {
  const dispatch = useAppDispatch();
  const contacts: IContact[] = useAppSelector(selectContacts);
  const [initialValues, setInitialValues] = useState<IFormEditValues>({
    name: '',
    number: '',
  });
  const { width } = useWindowResize();

  useEffect(() => {
    if (contacts.length > 0 && !id) return;
    const currentContact = contacts.find(contact => contact.id === id);
    if (currentContact) {
      setInitialValues({
           name: currentContact.name,
           number: currentContact.number,
         });
    }
  }, [contacts, id]);


  const handleSubmit = async (
    values: IFormEditValues,
    { resetForm, setSubmitting }: FormikHelpers<IFormEditValues>
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
