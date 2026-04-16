// create me selector from the redux store that returns the system.notificatimonModal state
import { createSelector } from '@reduxjs/toolkit';

// Write me js docs

/**
 * Selector to retrieve the notification modal state from the Redux store.
 */
export const selectNotificationModal = createSelector( (state) => state.system.notificationModal,
  (notificationModal) => notificationModal
);
