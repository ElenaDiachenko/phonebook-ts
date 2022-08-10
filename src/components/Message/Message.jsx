import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, MessageContent } from './Message.styled';

const messageRoot = document.getElementById('modal-root');

export class Message extends Component {
  state = {
    showMessage: false,
  };
  static propTypes = {
    onClick: PropTypes.func,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <MessageContent>{this.props.children}</MessageContent>
      </Backdrop>,
      messageRoot
    );
  }
}
