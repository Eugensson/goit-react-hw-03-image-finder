import { Component } from 'react';
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

import { Backdrop, Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() { 
    const {children} = this.props;

    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <Content>
          {children}
        </Content>
      </Backdrop>,
      modalRoot)
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
