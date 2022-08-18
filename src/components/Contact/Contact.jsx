import PropTypes from 'prop-types';
import { ContactName, ContactNumber, DeleteButton } from './Contact.styled';

export const Contact = ({ name, number, onDelete }) => (
  <>
    <ContactName>{name} :</ContactName>
    <ContactNumber>{number}</ContactNumber>
    <DeleteButton onClick={onDelete}>Delete</DeleteButton>
  </>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
