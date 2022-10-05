import { FaTrashAlt } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import {
  ContactName,
  ContactNumber,
  ContentWrap,
  ButtonstWrap,
} from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Modal } from '../Modal/Modal';
import { ContactEditor } from '../Forms/ContactEditor';
import { useModal } from 'hooks/useModal';
import { Box } from 'components/Box';
import { Button } from 'components/Button/Button';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const { isModalOpen, closeModal, openModal } = useModal();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success(`Contact deleted successfully`);
  };

  const handleOpenModal = () => openModal();

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <ContentWrap>
          <ContactName>{name} :</ContactName>
          <ContactNumber>{number}</ContactNumber>
        </ContentWrap>
        <ButtonstWrap>
          <Button onClick={handleDelete} aria-label={`Delete ${name}`}>
            <FaTrashAlt />
          </Button>
          <Button onClick={handleOpenModal} aria-label={`Edit ${name}`}>
            <RiEdit2Line />
          </Button>
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
