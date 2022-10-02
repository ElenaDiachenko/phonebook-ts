import PropTypes from 'prop-types';
import { ContactName, ContactNumber, DeleteButton } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
// import { selectIsLoading } from 'redux/selectors';
// import { useSelector } from 'react-redux';
// import ClipLoader from 'react-spinners/ClipLoader';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ContactName>{name} :</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteButton onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
