import { Overlay, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ContactEditor } from '../ContactEditor/ContactEditor';
const modalRoot = document.getElementById('modal-root');

export const Modal = ({ onClose, id }) => {
  window.addEventListener('keydown', handleKeyDown);

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      onClose();
      window.removeEventListener('keydown', handleKeyDown);
    }
  }

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <ContactEditor onClose={onClose} id={id} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
