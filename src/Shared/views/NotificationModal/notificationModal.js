import React from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleNotificationModal } from '../../../features/Homepage/slice/systemSlice';
import { selectNotificationModal } from '../../selectors/sharedSelectors';


function NotificationModal({ isOpen, title, message,confirmText ='ok', closeModal }) {
  if (!isOpen) return null;
  return (
    <div className={`notification-modal}`}>
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onConfirm}>{confirmText}</button>
        <button onClick={closeModal}>Κλείσιμο</button>
      </div>
    </div>
  );
}
NotificationModal.PropTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    confirmText: PropTypes.string,
    closeModal: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { isOpen, title, message } = useSelector(selectNotificationModal);
  return { isOpen, title, message };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(toggleNotificationModal({
    isOpen: false,
    title: '',
    message: ''
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationModal);
