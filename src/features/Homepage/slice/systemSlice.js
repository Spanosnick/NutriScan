import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  notificationModal :{
    isOpen: false,
    title: '',
    message: ''
  }

};

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload;
    },
    toggleNotificationModal(state, action) {
      const { isOpen,title,message } = action.payload;
      state.notificationModal = {
        isOpen: isOpen,
        title: title,
        message: message
      };
    }
  }
});

export const { changeTheme,toggleNotificationModal } = systemSlice.actions;
export default systemSlice.reducer;
