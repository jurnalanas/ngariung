import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '10%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: '#ddd',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#modal-hook')

const ErrorModal = props => {
  return (
    <Modal
      onRequestClose={props.onClear}
      contentLabel="An Error Occurred!"
      style={customStyles}
      isOpen={!!props.error}
    >
      <p>{props.error}</p>
      <button className="border border-gray-700 py-2 px-2 rounded my-2 bg-red-500" onClick={props.onClear}>close</button>
    </Modal>
  );
};

export default ErrorModal;
