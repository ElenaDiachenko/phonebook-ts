import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Overlay, ModalWindow, Button } from './Modal.styled';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const hanleEscapeClose = e => (e.key === 'Escape' ? onClose() : null);
    document.body.addEventListener('keydown', hanleEscapeClose);
    return () => {
      document.body.removeEventListener('keydown', hanleEscapeClose);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <Button type="button" onClick={onClose}>
          <AiOutlineClose />
        </Button>
        {children}
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
