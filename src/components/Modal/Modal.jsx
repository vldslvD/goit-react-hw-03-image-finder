import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalDiv } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() { 
    window.addEventListener('keydown', e => {
      console.log(e.code);
      if (e.code === 'Escape') {
        console.log("aloha")
        this.props.onClose();
      }
    })
   }
  render() {
    return createPortal(
      <Backdrop>
        <ModalDiv>
          <img src={this.props.href} alt={this.props.tags} />
        </ModalDiv>
      </Backdrop>,
      modalRoot
    );
  }
}
