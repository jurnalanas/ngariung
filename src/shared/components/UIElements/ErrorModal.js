import React from 'react';
import Modal from 'react-modal';

const ErrorModal = props => {
  return (
    <Modal
      onRequestClose={props.onClear}
      contentLabel="An Error Occurred!"
      isOpen={!!props.error}
    >
      <p>{props.error}</p>
      <button onClick={props.onClear}>close</button>
    </Modal>
  );
};

export default ErrorModal;
