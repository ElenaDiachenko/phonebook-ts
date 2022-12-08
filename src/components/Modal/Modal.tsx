import { useEffect, FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Overlay, ModalWindow, Button } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root') as Element;
interface IProps {
  children: React.ReactElement;
  onClose: () => void;
}
export const Modal: FC<IProps> = ({ onClose, children }) => {
  useEffect(() => {
    const hanleEscapeClose = (e: KeyboardEvent) =>
      e.key === 'Escape' ? onClose() : null;
    document.body.addEventListener('keydown', hanleEscapeClose);
    return () => {
      document.body.removeEventListener('keydown', hanleEscapeClose);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
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
