import PropTypes from 'prop-types';
import {
  ContactName,
  ContactNumber,
  DeleteButton,
  ContentWrap,
  ButtonstWrap,
} from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Modal } from '../Modal/Modal';
import { ContactEditor } from '../ContactEditor/ContactEditor';
import { useModal } from 'hooks/useModal';
import { Box } from 'components/Box';
// import { selectIsLoading } from 'redux/selectors';
// import { useSelector } from 'react-redux';
// import ClipLoader from 'react-spinners/ClipLoader';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const { isModalOpen, closeModal, openModal } = useModal();

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <ContentWrap>
          <ContactName>{name} :</ContactName>
          <ContactNumber>{number}</ContactNumber>
        </ContentWrap>
        <ButtonstWrap>
          <DeleteButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteButton>
          <DeleteButton onClick={openModal}>Edit</DeleteButton>
        </ButtonstWrap>
      </Box>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ContactEditor onClose={closeModal} id={id} />
        </Modal>
      )}
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
